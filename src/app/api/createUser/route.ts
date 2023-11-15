import User from "@/model/user";
import { connect } from "@/utilities/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, name } = await request.json();

  await connect();

  try {
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (userExist) {
      return NextResponse.json({ message: "user connected", success: true });
    } else {
      await User.create({ email: email, name: name, balance: 1 });
      return new NextResponse("user registered", { status: 200 });
    }
  } catch (e: any) {
    return NextResponse.json({ message: e, success: false });
  }
}
