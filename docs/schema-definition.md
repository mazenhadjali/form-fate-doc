---

id: schema-definition
title: Defining a Form Schema
sidebar_position: 2
-----------------------------

# Defining a Form Schema

The core of FormFate lies in its `FormDefinition` object. This schema outlines the structure, logic, and behavior of your form.

## Basic Schema Structure

```ts
const formDefinition: FormDefinition = {
  name: "exampleForm",
  properties: {
    blockName: {
      type: "block",
      title: "User Details",
      properties: {
        firstName: {
          type: "text",
          title: "First Name",
          required: true,
        },
      },
    },
  },
  buttons: [
    { type: "submit", label: "Submit" },
    { type: "reset", label: "Reset", variant: "destructive" },
  ],
};
```

## Rendering with FormFate

```tsx
<FormFate formDefinition={formDefinition} onSubmit={handleSubmit} />
```

The `FormDefinition` includes:

* `name`: Unique identifier for the form
* `properties`: The nested structure of blocks and fields
* `buttons`: Control buttons like submit/reset

You can deeply nest blocks and reuse configurations across multiple forms.
