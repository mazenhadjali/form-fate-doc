---

id: field-types
title: Field Types
sidebar_position: 4
---

# Field Types

FormFate supports a variety of built-in field types. Each type can be customized with attributes like `title`, `description`, `required`, `default`, and more.

## 📄 Basic Fields

### Text

```ts
{
  type: "text",
  title: "First Name",
  required: true,
}
```

### Textarea

```ts
{
  type: "textarea",
  title: "Description",
}
```

### Email

```ts
{
  type: "email",
  title: "Email",
  required: true,
}
```

### Password

```ts
{
  type: "password",
  title: "Password",
}
```

## 📍 Selectable Fields

### Select

```ts
{
  type: "select",
  title: "Choose Option",
  options: [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
  ],
}
```

### Radio

```ts
{
  type: "radio",
  title: "Gender",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
}
```

## 📦 Boolean Fields

### Checkbox

```ts
{
  type: "checkbox",
  title: "Accept Terms",
  default: false,
}
```

## 🛠️ Custom Components

You can register custom types like this:

```tsx
const customComponents = {
  mycustomtype: ({ fieldConfig, ...props }) => <input {...props} />,
};
```

And pass it to `<FormFate components={customComponents} />`.
