# Next.js 13 Crash Course Tutorial - learn-11

### Imports and Use of "use client"

```jsx
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useClient } from 'urql'
```

### Component Status

```jsx
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [priority, setPriority] = useState('low')
const [isLoading, setIsLoading] = useState(false)
```

### Form Submission Handler

```jsx
const handleSubmit = async (e) => {
  // Submit the ticket data to a server and redirect to the ticket page if the submission is successful.
}
```

### Form JSX

```jsx
// Defines the structure of the form, including text and selection fields for the title, body and priority of the ticket
<form onSubmit={handleSubmit} className="w-1/2">
  {/* Inputs and submit button here */}
</form>
```
