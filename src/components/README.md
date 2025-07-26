# Component Structure

This project follows Atomic Design principles with a component-based architecture organized into three main categories:

## 📁 Folder Structure

```
src/components/
├── Atoms/          # Basic building blocks
├── Molecules/      # Simple combinations of atoms
├── Features/       # Complex, page-specific components
└── index.ts        # Central export file
```

## 🧬 Atoms

The smallest, most basic components that can't be broken down further:

- **Button** - Reusable button component with variants
- **Input** - Form input component with validation support

## 🧪 Molecules

Simple combinations of atoms that form functional units:

- **Card** - Container component with padding and shadow options
- **FormField** - Complete form field with label and input

## 🏗️ Features

Complex, page-specific components that combine molecules and atoms:

- **Header** - Site navigation header
- **Footer** - Site footer with links and newsletter signup

## 📦 Usage

Import components from the central index file:

```tsx
import { Button, Card, Header, Footer } from "@/components";
```

Or import individual components:

```tsx
import Button from "@/components/Atoms/Button";
import Card from "@/components/Molecules/Card";
```

## 🎨 Design System

All components use Tailwind CSS for styling and follow consistent design patterns:

- **Colors**: Gray scale with blue accents
- **Typography**: Geist Sans font family
- **Spacing**: Consistent padding and margin scales
- **Interactions**: Smooth transitions and hover effects
