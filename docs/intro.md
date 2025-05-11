---
id: introduction
title: Introduction
sidebar_position: 0
----------------------

# Getting Started with FormFate

**FormFate** is a schema-based form generation library designed for React and React Native. It allows developers to define forms using a structured JSON schema, enabling powerful logic, validation, and component customization with minimal code.

Whether you are building an enterprise-grade form system or a quick onboarding form, FormFate helps you reduce boilerplate and keep form logic declarative and reusable.

## 🚀 Quick Installation

### React (Web)

```bash
npm install formfatecore react-form-fate
```

### React Native

If you're targeting mobile platforms, use:

```bash
npm install formfatecore native-form-fate
```

> `formfatecore` provides the shared schema engine logic.

## 🧱 What You'll Build

FormFate lets you define forms using structured blocks, such as:

```ts
const myForm = {
  name: "example",
  properties: {
    userDetails: {
      type: "block",
      title: "User Details",
      properties: {
        firstName: {
          type: "text",
          title: "First Name",
          required: true,
        },
        email: {
          type: "email",
          title: "Email Address",
        }
      }
    }
  },
  buttons: [
    { type: "submit", label: "Submit" }
  ]
}
```

Use `<FormFate />` for web or `<NativeFormFate />` for mobile.

## ✨ Why FormFate?

* Built-in validation & logic
* Easy integration with custom components
* Compatible with both React and React Native
* Built for composability and reusability

## 📱 React Native Support

FormFate also powers **native-form-fate** — the fully native form generator for **React Native**. It provides the same schema-based flexibility adapted to native mobile interfaces.

Explore the documentation to learn about field types, conditional logic, async selects, and more.
