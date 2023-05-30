import prisma from "@/app/_libs/prismadb";

interface ProjectStacksParams {
  category?: string;
}

const getProjectStacks = async (params: ProjectStacksParams) => {
  try {
    const { category } = params;
    let query: any = {};
    if (category) {
      query.category = category;
    }
  } catch (error) {
    console.log(error);
  }
};
