import prisma from "@/app/_libs/prismadb";

async function getMessages() {
  const messages = await prisma.message.findMany({
    include: {
      sender: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return messages;
}

export default getMessages;
