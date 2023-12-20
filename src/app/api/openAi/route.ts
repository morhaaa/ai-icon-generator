import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import Icon from "@/model/icon";
import User from "@/model/user";
import { connect } from "@/utilities/db";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

const basePATH = process.env.NEXTAUTH_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const generationId = uuidv4();

    const { prompt, color, style, n, authorId } = body;

    await connect();

    const openaiPrompt = `Create an icon of a ${prompt} with a ${color} background in a ${style} style.`;
    const user = await User.findById(authorId);

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: openaiPrompt,
      n: parseInt(n, 10),
      size: "1024x1024",
    });

    const iconsCreated = await Promise.all(
      response.data.map(async (data) => {
        const image = await fetch(data.url!);
        const buffer = await image.arrayBuffer();

        const iconCreated = await Icon.create({
          prompt: prompt,
          authorId: authorId,
          generationId: generationId,
          image: Buffer.from(buffer),
        });

        if (iconCreated) {
          user.balance = user.balance - 1;

          await user.save();
        }

        const result = {
          prompt: prompt,
          url: data.url,
          authorId: authorId,
          generationId: generationId,
        };

        return result;
      })
    );

    if (iconsCreated.length > 0) {
      return NextResponse.json({
        success: true,
        data: iconsCreated,
        generationId: generationId,
        newBalance: user.balance,
      });
    } else {
      return NextResponse.json({
        success: false,
        data: "Something went wrong",
      });
    }
  } catch (error) {
    console.error("[ERROR IMAGES]", error);
    return NextResponse.json({ message: error, status: 500 });
  }
}
