import { NextResponse } from "next/server";
import prisma from "@/app/_libs/prismadb";

export async function GET(request: Request) {
  try {
    //return all messages from prisma
    const messages = await prisma.message.findMany({
      include: {
        sender: true,
      },
    });

    return NextResponse.json(messages);
  } catch (error: any) {
    console.log(error, "ERROR_MESSAGES");
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
