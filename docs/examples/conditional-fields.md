---

id: conditional-fields
title: Conditional Fields Example
---------------------------------

# Conditional Fields Example

This form shows how to display fields based on the value of another field.

```tsx
const formDefinition = {
  name: "conditionalForm",
  properties: {
    account: {
      type: "block",
      title: "Account Type",
      properties: {
        type: {
          type: "radio",
          title: "Type",
          options: [
            { value: "personal", label: "Personal" },
            { value: "business", label: "Business" },
          ],
        },
        companyName: {
          type: "text",
          title: "Company Name",
          conditional: { field: "type", equal: "business", state: true },
        },
      },
    },
  },
  buttons: [{ type: "submit", label: "Continue" }],
};
```

This example uses `conditional` logic to display `companyName` only when `type` is "business".
