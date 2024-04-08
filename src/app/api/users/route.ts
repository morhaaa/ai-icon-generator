import User from "@/model/user";
import { connect } from "@/utilities/db";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const totalUsers = await User.countDocuments();
    return NextResponse.json({
      message: "icons",
      success: true,
      data: { totalUsers },
      status: 200,
    });
  } catch (e: any) {
    return NextResponse.json({ message: e, success: false });
  }
}
