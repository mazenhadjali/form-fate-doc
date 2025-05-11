---
id: basic-form
title: Basic Form Example
---

# Basic Form Example

This is a simple form demonstrating basic text and email fields using FormFate.

```tsx
const formDefinition = {
  name: "basicForm",
  properties: {
    user: {
      type: "block",
      title: "User Info",
      properties: {
        name: {
          type: "text",
          title: "Name",
          required: true,
        },
        email: {
          type: "email",
          title: "Email",
          required: true,
        },
      },
    },
  },
  buttons: [{ type: "submit", label: "Send" }],
};
```

This example shows the core building blocks of a FormFate form.
