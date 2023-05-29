import prisma from "@/app/_libs/prismadb";

async function getUsers() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return users;
}

export default getUsers;
