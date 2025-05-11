---

id: custom-component
title: Custom Component Example
-------------------------------

# Custom Component Example

FormFate allows you to register custom field components.

```tsx
const customComponents = {
  mycustomtype: ({ fieldConfig, ...props }) => (
    <div>
      <label>{fieldConfig.title}</label>
      <input type="text" {...props} />
    </div>
  )
};

<FormFate formDefinition={formDefinition} components={customComponents} />
```

This allows full flexibility in rendering and interacting with fields beyond the built-in types.
