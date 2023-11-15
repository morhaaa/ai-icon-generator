import User from "@/model/user";
import { connect } from "@/utilities/db";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  params: { email: string };
}

export async function GET(request: NextRequest, params: Params) {
  const email = params.params.email;

  await connect();

  try {
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        message: "user connected",
        success: true,
        data: user,
        status: 200,
      });
    } else {
      return new NextResponse("user not found", { status: 404 });
    }
  } catch (e: any) {
    return NextResponse.json({ message: e, success: false });
  }
}
