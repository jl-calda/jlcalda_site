---
title: Cloudinary with Next-JS
slug: cloudinary-with-next-js
topics: ["next-js", "cloudinary"]
author: ChatGPT
thumbnail: /blogs/thumbnails/cloudinary-with-next-js.png
date: May 31, 2023
---

###Prerequisites
Before you start, make sure you have the following set up:

Node.js and npm installed on your machine.
Basic knowledge of Next.js and TypeScript.

A Cloudinary account. If you don't have one, you can sign up for free at cloudinary.com.

###Step 1: Create a Next.js project
First, create a new Next.js project by running the following commands in your terminal:

```bash
npx create-next-app my-app
cd my-app
```

###Step 2: Install dependencies
Next, you need to install the required dependencies. Run the following command in your terminal:

```bash
npm install cloudinary react-cloudinary-upload-widget
```

###Step 3: Set up Cloudinary
Now, you need to retrieve your Cloudinary configuration details. Go to your Cloudinary account dashboard and navigate to the "Dashboard" section. Click on "Account Details" and find the "Cloud name," "API Key," and "API Secret" values.

###Step 4: Create a Cloudinary configuration file
In the root directory of your Next.js project, create a new file called .env.local. Add the following lines to it, replacing YOUR_CLOUD_NAME, YOUR_API_KEY, and YOUR_API_SECRET with your actual Cloudinary credentials:

```bash
CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

###Step 5: Create a Cloudinary service module
Create a new file called cloudinary.ts in the utils directory of your Next.js project. Add the following code to it:

```javascript
import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";

export const url = (publicId: string, options: Record<string, unknown>) => {
  const cloudinary = CoreCloudinary.new();
  options = {
    ...options,
    secure: true,
    // You can add more default options here if needed
  };

  return cloudinary.url(publicId, options);
};

export const openUploadWidget = (
  options: Record<string, unknown>,
  callback: (error: any, result: any) => void
) => {
  const cloudinary = Cloudinary.new();
  window.cloudinary.openUploadWidget(options, callback);
};

export const fetchPhotos = (
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const cloudinary = Cloudinary.new();
  cloudinary.v2.api.resources(
    { type: "upload", prefix: "your-folder-prefix", max_results: 30 },
    (error: any, result: any) => {
      if (error) {
        console.error(error);
      } else {
        const urls = result.resources.map((image: any) => image.url);
        setPhotos(urls);
      }
    }
  );
};
```

###Step 6: Use Cloudinary in your Next.js pages
In your Next.js pages, you can now import the Cloudinary service module and use it as needed. Here's an example of how to use the openUploadWidget and fetchPhotos functions in a page component:

```javascript
import { useState, useEffect } from 'react';
import { openUploadWidget, fetchPhotos } from '../utils/cloudinary';

const MyPage = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetchPhotos(setPhotos);
  }, []);

  const handleUploadClick = () => {
    openUploadWidget(
      {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        uploadPreset: 'your-upload-preset',
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          fetchPhotos(setPhotos);
        }
      }
    );
  };

  return (
    <div>
      <h1>My Page</h1>
      <button onClick={handleUploadClick}>Upload Photo</button>
      {photos.map((url) => (
        <img key={url} src={url} alt="Uploaded" />
      ))}
    </div>
  );
};

export default MyPage;
```

Make sure to replace 'your-folder-prefix' with the desired folder prefix in the fetchPhotos function and 'your-upload-preset' with your Cloudinary upload preset in the handleUploadClick function.

###Step 7: Run the Next.js development server
Finally, start the Next.js development server by running the following command in your terminal:

```bash
npm run dev
```

Visit http://localhost:3000 in your browser to see your Next.js application with Cloudinary integration.

That's it! You now have a basic setup for using Cloudinary with Next.js using TypeScript. Feel free to customize and extend it further to meet your specific requirements.
