---

id: getting-started
title: Getting Started
sidebar_position: 1
----------------------

# Getting Started with FormFate

Welcome to **FormFate**, a schema-driven form generation library for React and React Native. This guide helps you quickly get up and running.

## What is FormFate?

FormFate lets you create powerful and dynamic forms using JSON-like schemas. It's built on top of `formfatecore` and works seamlessly with TypeScript.

## Prerequisites

* React 17+ or React Native
* TypeScript (recommended)

## Installation

Using NPM:

```bash
npm install formfatecore react-form-fate
```

Or using Yarn:

```bash
yarn add formfatecore react-form-fate
```

## Minimal Usage Example

```tsx
import React from "react";
import { FormFate } from "react-form-fate";
import { FormDefinition } from "formfatecore";

const formDefinition: FormDefinition = {
  name: "simpleForm",
  properties: {
    name: {
      type: "text",
      title: "Your Name",
      required: true,
    },
  },
  buttons: [{ type: "submit", label: "Submit" }],
};

export default function App() {
  const handleSubmit = (data) => console.log(data);

  return <FormFate formDefinition={formDefinition} onSubmit={handleSubmit} />;
}
```

You're now ready to explore FormFate's rich schema options!
