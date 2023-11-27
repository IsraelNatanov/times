
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/utils/database";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    let user = await User.findOne({ email });
    if(user){
      return NextResponse.json(
        { message: "This user already exists." },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}