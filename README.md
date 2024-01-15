# Next.js 13 Crash Course Tutorial - learn-9

### 1. Create a 404 File

Next.js automatically recognizes a special file called `404.js` in your `pages` directory as your custom 404 error page.

- **File Structure**:

  ```
  pages/
    404.js
  ```

### 2. Design Your 404 Page

You can design your 404 page however you like. Here's an example of a simple 404 page:

  ```jsx
  export default function Custom404() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Back to the top</a>
      </div>
    );
  }
  ```
