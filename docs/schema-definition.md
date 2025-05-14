---
id: schema-definition
title: Defining a Form Schema
sidebar_position: 3
---

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

---

## Field Property Attributes

Below is a table of all supported field-level attributes in FormFate, with their types and descriptions:

| Attribute        | Type                                                | Description                                                                                         |
| ---------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`           | `string`                                            | Field type (e.g., `text`, `email`, `select`, `radio`, `block`).                                     |
| `title`          | `string`                                            | Label text shown above or beside the input.                                                         |
| `description`    | `string`                                            | Helper text displayed under or beside the field.                                                    |
| `required`       | `boolean`                                           | Whether the field must be filled before submission.                                                 |
| `default`        | `any`                                               | Initial value of the field when the form loads.                                                     |
| `validator`      | `(value, formValues) => true &#124; string`         | Custom validation function returning `true` or an error message.                                    |
| `disabled`       | `({ formValues }) => boolean`                       | Function to dynamically disable the field based on other form values.                               |
| `conditional`    | `object` \| `({ formValues }) => boolean`           | Controls field visibility: either an object `{ field, equal, state }` or a function on form values. |
| `valueCallback`  | `({ formValues, value }) => any`                    | Function to dynamically compute or override the field’s value during rendering.                     |
| `className`      | `string`                                            | CSS class name(s) applied to the field’s wrapper for custom styling.                                |
| `options`        | `Array<{ value: any; label: string }>`              | Static list of options for `select`, `radio`, or similar inputs.                                    |
| `optionsUrl`     | `{ url: string; method: string; mapper: Function }` | Configuration for fetching options asynchronously (remote URL, HTTP method, response mapper).       |
| `filterFunction` | `({ options, formValues }) => array`                | Function to filter or transform the asynchronously fetched options based on current form values.    |

Use this reference to understand and leverage all available field-level behaviors in your form schemas.
