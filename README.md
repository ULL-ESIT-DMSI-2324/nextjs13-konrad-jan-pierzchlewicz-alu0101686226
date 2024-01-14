# Next.js 13 Crash Course Tutorial #6: Fetching & Revalidating Data


### 1. Fetching data from a JSON File

You can store data in a JSON file within your project and then import that data directly into your components or pages.

**STEPS**:
- Create a JSON File: Any `.json` file in the `public` directory.
- Import and use the data:

// generated by Copilot
  ```jsx
  import data from '../path/to/some.json';

  function MyComponent() {
    return (
      <div>
        {data.map(item => <p key={item.id}>{item.name}</p>)}
      </div>
    );
  }
  ```

### 2. Fetching from an External Server (JSON Server Package)

To retrieve data from an external server, you can use `fetch` in the `getStaticProps` or `getServerSideProps` functions.

**Example of Using `getStaticProps`**:

  ```jsx
  export async function getStaticProps() {
    const res = await fetch('http://example.com/data') // here you should replace the url with your own route
    const data = await res.json()

    return {
      props: { data },
    }
  }

  function MyPage({ data }) {
    // Function to render the data
  }
  ```

### 3. Revalidation with Incremental Static Regeneration (ISR)

ISR allows you to update your static pages after they have been generated.

**Use in `getStaticProps`**:

  ```jsx
  export async function getStaticProps() {
    // Fetch code here
    return {
      props: { /* your props */ },
      revalidate: 10, // Revalidate every 10 seconds
    }
  }
  ```

### 4. Client-Side Data Fetching

- **Use of `useEffect` and `fetch` in Components**:

  ```jsx
  import { useEffect, useState } from 'react';

  function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://example.com/data'); // again, replace the url with your own route
        const newData = await response.json();
        setData(newData);
      }

      fetchData();
    }, []);

    // Render the data
  }
  ```