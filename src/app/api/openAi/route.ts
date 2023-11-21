import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import Icon from "@/model/icon";
import User from "@/model/user";
import { connect } from "@/utilities/db";
import { updateUserBalance } from "@/containers/user-reducer";
import { store } from "@/containers/store";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

const basePATH = process.env.NEXTAUTH_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const generationId = uuidv4();
    const fakeUrl =
      "https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340";

    const { prompt, color, style, n, authorId } = body;

    // Commentato temporaneamente in attesa della configurazione di openai.images
    // const response = await openai.images.generate({
    //   model: "dall-e-3",
    //   prompt,
    //   n: 1, //parseInt(n, 10),
    //   size: "1024x1024",
    // });

    const openAiRes = {
      prompt: prompt,
      url: fakeUrl,
      authorId: authorId,
      generationId: generationId,
    };

    await connect();
    const image = await fetch(openAiRes.url);
    const buffer = await image.arrayBuffer();

    const iconCreated = await Icon.create({
      prompt: prompt,
      authorId: authorId,
      generationId: generationId,
      image: Buffer.from(buffer),
    });

    const user = await User.findById(authorId);

    if (iconCreated) {
      user.balance = user.balance - 1;

      await user.save();

      return NextResponse.json({
        success: true,
        data: iconCreated,
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
    console.error("[ERRORE IMMAGINE]", error);
    return NextResponse.json({ message: error, status: 500 });
  }
}
