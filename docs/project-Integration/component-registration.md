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
  factory: () => { type: string; title: string };
}

export const customComponents: CustomComponent[] = [
  { label: 'Search', type: 'search', component: SearchInputCard, factory: () => ({ type: 'search', title: 'Search' }) },
];

export const components = customComponents.reduce(
  (acc, c) => ({ ...acc, [c.type]: c.component }),
  {} as Record<string, React.ElementType>
);
```
