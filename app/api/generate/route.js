import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body?.url || !body?.shorturl) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "Missing URL or shorturl",
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Linkly");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl: body.shorturl });

    if (existing) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "Short URL already exists",
      }, { status: 409 });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return NextResponse.json({
      success: true,
      error: false,
      message: "URL generated successfully",
      shorturl: body.shorturl,
    });

  } catch (error) {
    console.error("🚨 Error in /api/generate:", error); // <--- check your terminal
    return NextResponse.json({
      success: false,
      error: true,
      message: "Internal Server Error",
      reason: error.message,
    }, { status: 500 });
  }
}

