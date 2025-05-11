---
id: features-and-logic
title: Features & Logic
sidebar_position: 5
---

# Features & Logic

FormFate is not just about static forms — it supports powerful logic through conditional rendering, validation, disabling, and dynamic data fetching.

## ✅ Validation

You can add field-level validation with synchronous or asynchronous functions:

```ts
validator: (value) => {
  if (!value || value.length < 3) return "Must be at least 3 characters";
  return true;
}
```

## 🔒 Disabling Fields

You can disable a field dynamically based on other field values:

```ts
disabled: ({ formValues }) => formValues.firstName?.length < 3,
```

## 🎭 Conditional Rendering

Show a field only when a condition is met:

```ts
conditional: ({ formValues }) => formValues.social === "linkedin",
```

Or using shorthand:

```ts
conditional: { field: "social", equal: "github", state: true },
```

## 🔁 Value Callback

Modify a field’s value reactively:

```ts
valueCallback: ({ formValues, value }) => {
  return formValues.firstName.length < 3 ? "" : value;
}
```

These tools enable you to create smart, context-aware forms that feel native and dynamic.
