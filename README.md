# Next.js 13 Crash Course Tutorial #5 - learn 5

### 1. CSS and Sass

Next.js allows you to import CSS and Sass stylesheets directly into your JavaScript components.

1.  Use of CSS: You can create a `.css` file and then import it into your component.
2.  Use of Sass: Similar to CSS, but with `.scss` or `.sass` files.

### 2. CSS Modules

Next.js supports CSS Modules by default, allowing you to have local styles that only affect your component.

1.  CSS Module File: Name it as `[name].module.css`.
2.  Import Styles: Import your CSS Module file into your component and use it as an object.

  ```jsx
  // styles/Button.module.css
  .button {
    background-color: blue;
    colour: white;
  }

  // Component that uses Button.module.css
  import styles from '../styles/Button.module.css';

  function Button() {
    return <button className={styles.button}>Click me</button>;
  }
  ```

### Incorporate Google Fonts

1. Select Font in Google Fonts: Visit [Google Fonts](https://fonts.google.com/)t.
2. Incorporate the Font in your Application:
        a) Link the source in your HTML file or in the Next.js Head component.
        b) Use `@import` in your CSS style code.

   ```jsx
   // pages/_document.js or your Head component from the page below
   <Head>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   </Head>
   ```

   ```css
   /* Method with @import in CSS */
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
   body {
     font-family: 'Roboto', sans-serif;
   }
   ```

### Use the `<Image>` Tag

Next.js provides optimizers for images.

- **Importing images**:

  ```jsx
  import Image from 'next/image';
  ```