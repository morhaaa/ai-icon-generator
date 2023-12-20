import Icon from "@/model/icon";
import { connect } from "@/utilities/db";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  params: { userId: string };
}

export async function GET(request: NextRequest, params: Params) {
  const authorId = params.params.userId;
  const searchParams = request.nextUrl.searchParams;
  const generationId = searchParams.get("generationId");

  await connect();

  try {
    const iconsData = generationId
      ? await Icon.find({
          authorId: authorId,
          generationId: generationId,
        })
      : await Icon.find({
          authorId,
        });

    if (iconsData) {
      const icons: Icon[] = iconsData.map((icon) => ({
        authorId: icon.authorId,
        imageUrl: icon.imageUrl,
        prompt: icon.prompt,
        generationId: icon.generationId,
      }));

      return NextResponse.json({
        message: "icons",
        success: true,
        data: icons,
        status: 200,
      });
    } else {
      return NextResponse.json({ message: "icons not found", status: 404 });
    }
  } catch (e: any) {
    return NextResponse.json({ message: e, success: false });
  }
}
