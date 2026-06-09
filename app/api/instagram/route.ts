import { NextRequest, NextResponse } from "next/server";
import { getInstagramPosts } from "@/lib/instagram";

export async function GET(req: NextRequest) {
    const cursor = req.nextUrl.searchParams.get("cursor") ?? undefined;
    const result = await getInstagramPosts(cursor);

    if (!result) {
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }

    return NextResponse.json(result);
}
