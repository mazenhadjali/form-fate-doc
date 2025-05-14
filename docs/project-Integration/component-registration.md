---
id: component-registration
title: Component Registration
sidebar_position: 3
---

# Component Registration

Define a metadata array and build a lookup map for FormFate.

```ts
import { SearchInputCard } from './customComponents';

export interface CustomComponent {
  label: string;
  component: React.ElementType;
  type: string;
}

export const customComponents: CustomComponent[] = [
  { type: 'search', component: SearchInputCard },
];

export const components = customComponents.reduce(
  (acc, c) => ({ ...acc, [c.type]: c.component }),
  {} as Record<string, React.ElementType>
);
```
