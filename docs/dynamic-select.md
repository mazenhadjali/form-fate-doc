---

id: dynamic-select
title: Dynamic Select (Async)
sidebar_position: 6
---

# Dynamic Select (Async)

FormFate supports fetching select options from an API dynamically using `optionsUrl`.

## Example

```ts
{
  type: "select",
  title: "Mentor",
  required: true,
  optionsUrl: {
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    mapper: ({ response }) => {
      return response.map(user => ({ value: user.id, label: user.name }));
    },
  },
}
```

## Filtering Options

You can also filter fetched options based on the form state:

```ts
filterFunction: ({ options, formValues }) => {
  return options.filter(option => option.label.includes(formValues.firstName || ""));
}
```

This makes your forms more responsive to user input and external data.

> Ensure the `mapper` returns a list of objects with `value` and `label`.
