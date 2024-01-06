# Next.js 13 Crash Course Tutorial - learn 3

## Concepts of the tutorial

### 1. Directory Structure

- **Pages**: In Next.js, each `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory is automatically converted to an accessible path.
- **Dynamic routes**: To create dynamic paths, you can use square brackets (`[ ]`) to wrap parameter names in the file name. For example, `pages/posts/[id].js` translates to paths like `/posts/1`, `/posts/2`, etc.