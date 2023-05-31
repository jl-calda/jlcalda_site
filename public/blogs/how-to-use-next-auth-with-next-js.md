---
title: How to use Next-Auth with Next-JS
slug: how-to-use-next-auth-with-next-js
topics: ["next-js", "react-js", "next-auth"]
author: ChatGPT
thumbnail: /blogs/thumbnails/how-to-use-next-auth-with-next-js.webp
date: May 31, 2023
---

Setting up NextAuth.js with Google and GitHub Authentication
Install the necessary dependencies:

```bash
npm install next-auth next-auth/providers
```

Create a new file called pages/api/auth/[...nextauth].js in your Next.js app directory.

Import the necessary modules and configure the NextAuth.js provider in pages/api/auth/[...nextauth].js:

```javascript
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "YOUR_GOOGLE_CLIENT_ID",
      clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
    }),
    Providers.GitHub({
      clientId: "YOUR_GITHUB_CLIENT_ID",
      clientSecret: "YOUR_GITHUB_CLIENT_SECRET",
    }),
  ],
  // Add any other NextAuth.js configurations you need
});
```

Replace 'YOUR_GOOGLE_CLIENT_ID' and 'YOUR_GOOGLE_CLIENT_SECRET' with your actual Google OAuth credentials. Similarly, replace 'YOUR_GITHUB_CLIENT_ID' and 'YOUR_GITHUB_CLIENT_SECRET' with your GitHub OAuth credentials.

Create a new file called pages/index.js and use the getSession function provided by NextAuth.js to access the session data:

```javascript
import { getSession } from 'next-auth/client';

export default function HomePage({ session }) {
  // Use the session data in your component
  // ...

  return (
    // Your component JSX
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
```

Start your Next.js development server:

```bash
npm run dev
```

That's it! You've now set up NextAuth.js with Google and GitHub authentication in your Next.js application. Users will be able to log in using their Google or GitHub accounts. Remember to replace 'YOUR_GOOGLE_CLIENT_ID', 'YOUR_GOOGLE_CLIENT_SECRET', 'YOUR_GITHUB_CLIENT_ID', and 'YOUR_GITHUB_CLIENT_SECRET' with your actual OAuth credentials obtained from Google and GitHub.

Please note that the getSession function is used in the server-side getServerSideProps method to fetch the session data, which is then passed as a prop to the HomePage component. This allows you to access the session data on the server-rendered page.
