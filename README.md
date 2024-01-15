# Next.js 13 Crash Course Tutorial - learn-10

### 1. Loading UI in Next.js

Next.js 13 provides a new way to show a loading UI while data is loading. This is useful for both client-side and server-side rendering (SSR).

### 2. Basic Implementation

- **Example**:

  ```jsx
  import { useState, useEffect } from 'react';

  function DataLoader() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchData()
        .then(data => {
          setData(data);
        });
    }, []);

    if (!data) {
      return <p>Loading...</p>;
    }

    return <div>{/* Render data here */}</div>;
  }
  ```

### 3. What is Suspense?

Suspense is a React feature that allows components to wait for something before rendering. This is useful for loading data, code splitting, and image loading.

### 4. Use of Suspense

- **Example**:

  ```jsx
  import { Suspense } from 'react';

  function MyComponent() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <DataComponent />
      </Suspense>
    );
  }

  function DataComponent() {
    // Logic to load data
  }
  ```