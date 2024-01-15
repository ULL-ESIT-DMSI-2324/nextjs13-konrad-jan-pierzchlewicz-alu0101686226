## Next.js 13 Crash Course Tutorial - learn-8

### Static Rendering

Static Rendering is a method where HTML is generated at compile time and reused on every request. Next.js supports this approach through `getStaticProps` and `getStaticPaths`. Some benefits of static rendering are:

- Fewer Server Requests: Reduces load on the server as pages are served as static files.
- Performance: Pages load quickly because the HTML is pre-generated.
- Reduced Hosting Costs: Static pages can be hosted on a CDN.
- Better Developer Experience: Static pages can be previewed locally.


### Creating a Static Page

1. Define `getStaticProps`

   ```jsx
   export async function getStaticProps() {
      // Fetch data from external API
     const data = await fetch(...);

     return {
       props: { data }, // will be passed to the page component as props
     }
   }

   function MyStaticPage({ data }) {
     // Render data...
     return <div>{/* Page content */}</div>;
   }

   export default MyStaticPage;
   ```

### Using `getStaticPaths` for Dynamic Pages

For pages with dynamic paths (like `/[id].js`), you need to define `getStaticPaths` to tell Next.js which paths to pre-render. `getStaticPaths` returns an object with two keys:

- Define `getStaticPaths`:

  ```jsx
  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const paths = [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ];

    return { paths, fallback: 'blocking' };
  }

  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
  }
  ```

## `notFound` in `getStaticProps`

When `getStaticProps` does not find the data needed to render a page (for example, a blog ID that does not exist in the database), you can return `notFound: true` to display a 404 error page.

- **Example**:

  ```jsx

  export async function getStaticProps({ params }) {

    const data = await fetchData(params.id);
    // If the blog post does not exist, return `notFound: true`
    if (!data) {
      return { notFound: true };
    }
    return { props: { data } };
  }

  function MyStaticPage({ data }) {
    // Render data...
    return <div>{/* Page content */}</div>;
  }

  export default MyStaticPage;

  ```