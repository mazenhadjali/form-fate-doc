---
id: searchinput-component
title: Search Input Card Example
sidebar_position: 4
---

# Search Input Card Component Example

```tsx
import React from 'react';
import { useFormField } from 'react-form-fate';
import { ControllerRenderProps } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';

export const SearchInputCard: React.FC<{ field: ControllerRenderProps; fieldConfig: any }> = ({ field, fieldConfig }) => {
  const { error } = useFormField();
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      {fieldConfig.title && <label>{fieldConfig.title}</label>}
      <div className="relative">
        <MdSearch className="absolute left-3 ..." />
        <input {...field} placeholder={fieldConfig.placeholder || 'Search...'} />
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
```
