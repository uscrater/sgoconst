export interface InstagramPost {
    id: string;
    media_url: string;
    permalink: string;
    caption?: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    thumbnail_url?: string;
}

export async function getInstagramPosts(): Promise<InstagramPost[] | null> {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    const igUserId = process.env.INSTAGRAM_USER_ID;

    if (!token || !igUserId) {
        console.warn("INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID is not set. Using mock data.");
        return null;
    }

    const url = `https://graph.facebook.com/v20.0/${igUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=9`;

    try {
        const res = await fetch(url, {
            next: { revalidate: 3600 } // Revalidar a cada 1 hora (cache)
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch Instagram posts: ${res.statusText}`);
        }

        const data = await res.json();
        return data.data as InstagramPost[];
    } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        return null;
    }
}
