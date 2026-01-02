export interface GoogleReviewsData {
    rating: number;
    totalReviews: number;
    reviews: Array<{
        author: string;
        rating: number;
        text: string;
        time: number;
    }>;
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !apiKey) {
        console.warn("Google Place ID or API Key not set. Using mock data.");
        return null;
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;

        const res = await fetch(url, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch Google reviews: ${res.statusText}`);
        }

        const data = await res.json();

        if (data.status !== "OK") {
            throw new Error(`Google API error: ${data.status}`);
        }

        return {
            rating: data.result.rating || 5.0,
            totalReviews: data.result.user_ratings_total || 0,
            reviews: (data.result.reviews || []).map((review: any) => ({
                author: review.author_name,
                rating: review.rating,
                text: review.text,
                time: review.time
            }))
        };
    } catch (error) {
        console.error("Error fetching Google reviews:", error);
        return null;
    }
}
