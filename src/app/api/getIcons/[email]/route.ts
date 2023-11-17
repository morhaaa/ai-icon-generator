import Icon from "@/model/icon";
import { connect } from "@/utilities/db";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  params: { email: string };
}

export async function GET(request: NextRequest, params: Params) {
  const author = params.params.email;
  const searchParams = request.nextUrl.searchParams;
  const generationId = searchParams.get("generationId");

  await connect();

  try {
    const iconsData = generationId
      ? await Icon.find({
          author: author,
          generationId: generationId,
        })
      : await Icon.find({
          author,
        });

    if (iconsData) {
      const icons: Icon[] = iconsData.map((icon) => ({
        author: icon.author,
        image: icon.image,
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
      return new NextResponse("icons not found", { status: 404 });
    }
  } catch (e: any) {
    return NextResponse.json({ message: e, success: false });
  }
}
