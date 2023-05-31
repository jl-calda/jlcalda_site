export const topics = [
  "next-js",
  "tailwindcss",
  "next-auth",
  "mongodb",
  "typescript",
  "prisma",
  "node-js",
  "react-js",
  "pusher",
  "headless-ui",
  "radix-ui",
];

export type BlogType = {
  no: number;
  slug: string;
};

export const blogData = {
  featuredBlogNo: 2,
  blogs: [
    {
      isFeatured: true,
      no: 0,
      slug: "how-to-use-next-auth-with-next-js",
    },
    {
      isFeatured: true,
      no: 1,
      slug: "using-react-hook-form",
    },
    {
      isFeatured: true,
      no: 2,
      slug: "cloudinary-with-next-js",
    },
    {
      isFeatured: true,
      no: 3,
      slug: "using-prisma-with-mongodb-and-next-js",
    },
  ],
};
