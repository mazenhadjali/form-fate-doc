---
id: pro-integration-usage
title: Usage Example
sidebar_position: 5
---

# Usage Example

```tsx
import React from 'react';
import FormFateFactory from './FormFateFactory';
import { FormDefinition } from 'formfatecore';

const schema: FormDefinition = {
  name: 'searchForm',
  properties: {
    search: {
      type: 'search',
      title: 'Search',
      required: true,
    },
  },
  buttons: [
    {
      type: 'submit',
      label: 'Go',
    },
  ],
};

export default function App() {
  return <FormFateFactory formDefinition={schema} onSubmit={data => console.log(data)} />;
}
```
