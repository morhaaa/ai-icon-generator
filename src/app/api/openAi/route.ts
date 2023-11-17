import OpenAI from "openai";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

const basePATH = process.env.NEXTAUTH_URL ?? "";

export async function POST(req: Request) {
  const body = await req.json();
  const generationId = uuidv4();
  const fakeUrl =
    "https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340";

  try {
    const { prompt, color, style, n, author } = body;

    // const response = await openai.images.generate({
    //   model: "dall-e-3",
    //   prompt,
    //   n: 1, //parseInt(n, 10),
    //   size: "1024x1024",
    // });

    const openAiRes = {
      prompt: prompt,
      url: fakeUrl,
      author: author,
      generationId: generationId,
    };

    console.log(openAiRes);
    const saveImages = await fetch(`${basePATH}/api/saveIcon`, {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify(openAiRes),
    });

    const result = await saveImages.json();

    console.log(result.message);
    if (result.success === true) {
      return NextResponse.json({
        success: true,
        data: result.data,
        generationId: generationId,
      });
    } else {
      return NextResponse.json({
        success: false,
        data: "something went wrong",
      });
    }
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
