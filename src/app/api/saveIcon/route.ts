import Icon from "@/model/icon";
import { connect } from "@/utilities/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { url, prompt, author, generationId } = await request.json();

  console.log("qua ci sono");
  await connect();

  try {
    const image = await fetch(url);

    const buffer = await image.arrayBuffer();

    console.log(buffer);

    const response = await Icon.create({
      prompt: prompt,
      author: author,
      generationId: generationId,
      image: Buffer.from(buffer),
    });

    return NextResponse.json({ success: true, status: 200, data: response });
  } catch (e: any) {
    return NextResponse.json({ message: e, success: false });
  }
}
