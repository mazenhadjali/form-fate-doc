---

id: formfate-factory
title: FormFateFactory Wrapper
sidebar_position: 2
---

# FormFateFactory Wrapper

Encapsulate `<FormFate>` with common props and custom components.

```tsx
import React from 'react';
import { FormFate, FormFateProps } from 'react-form-fate';
import { components } from './components';

export default function FormFateFactory(props: FormFateProps) {
  return <FormFate {...props} components={components} />;
}
```

* Centralizes component mapping
* Simplifies imports across your app
