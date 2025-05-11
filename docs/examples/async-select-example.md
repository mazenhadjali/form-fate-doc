---

id: async-select-example
title: Async Select Example
---

# Async Select Example

This form fetches select options dynamically from an API using `optionsUrl`.

```tsx
const formDefinition = {
  name: "asyncSelectForm",
  properties: {
    selectUser: {
      type: "select",
      title: "Select a User",
      optionsUrl: {
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
        mapper: ({ response }) =>
          response.map(user => ({ label: user.name, value: user.id }))
      }
    },
  },
  buttons: [{ type: "submit", label: "Submit" }],
};
```

> Tip: Use the `mapper` function to shape the fetched data into `label` and `value` pairs.
