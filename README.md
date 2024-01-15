# Next.js 13 Crash Course Tutorial - learn-7

### 1. Dynamic Segments?

Dynamic segments are parts of the URL that can change and are used to pass data to a page. In Next.js, these are handled by specially named files and folders in the `pages` directory.

### 2. How to create Dynamic Routes

To create a dynamic path, you must use square brackets (`[]`) around the segment name in the file or folder name. For example, `[id].js`.


### Creating a Page with a Dynamic Segment

1. Create a File for the Dynamic Path: For example a file with square brackets as here `[].js`.
2. Access to Dynamic Parameters:

   - You need to use the `useRouter` hook to access the data.

     ```jsx
     import { useRouter } from 'next/router';

     function Post() {
       const router = useRouter();
       const { id } = router.query; // Access the 'id' parameter

       return <div>ID of the thing that you are using: {id}</div>;
     }

     export defaultPost;
     ```