import Icon from "@/model/icon";
import { connect } from "@/utilities/db";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const totalPosts = await Icon.countDocuments();
    return NextResponse.json({
      message: "icons",
      success: true,
      data: { totalPosts },
      status: 200,
    });
  } catch (e: any) {
    return NextResponse.json({ message: e, success: false });
  }
}
