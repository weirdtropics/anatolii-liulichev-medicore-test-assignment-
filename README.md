# Pokédex App — Test Assingment for MediCore

A modern and responsive Pokédex application built with **React**, **Vite**, **Material UI**, **TypeScript**, and **React Query**. This project allows users to browse, search, and favorite Pokémon using data from the [PokéAPI](https://pokeapi.co/).

## ✨ Features

- 🔍 **Search Pokémon** by name or number
- 🌀 **Infinite scrolling** for lazy-loaded lists
- 📊 **Detailed Pokémon modal** with:
  - Carousel for images
  - Type chips
  - Base stats chart
  - Move list
- ❤️ **Favorites management** with `localStorage` persistence
- 🌐 Fully responsive layout with a fixed sidebar using Toolpad-style navigation
- ⚙️ **Type-safe API data fetching** with Zod validation
- 🧪 Ready for testing and scalable codebase structure

## 🛠️ Tech Stack

- **React** + **Vite** for fast development
- **TypeScript** for static typing
- **MUI** for consistent UI components
- **React Query** for async state management
- **Zod** for runtime data validation
- **Toolpad Core** for sidebar layout
- **ESLint** + **Prettier** for linting and formatting

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) (version `18.x` or higher recommended) and [pnpm](https://pnpm.io/) installed.

```bash
# Clone the repo
git clone https://github.com/weirdtropics/anatolii-liulichev-medicore-assignment.git
cd anatolii-liulichev-medicore-assignment.

# Install dependencies
pnpm install
```

## 🚀 Running the App

Start the development server:

```bash
pnpm dev
```

The app will be running at `http://localhost:5173` (default Vite port).

## 🧪 Running Tests (optional)

Coming soon: unit tests for key components and hooks.

## 🌍 API

This app uses the public [PokéAPI](https://pokeapi.co/). No authentication or backend is required.

---

## 📌 Todos / Possible Improvements

- Add unit tests for hooks and components
- Add sorting & filtering options
- Add pagination fallback for infinite scroll
- Improve mobile performance & accessibility
- Internationalization support

## 🤝 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for the Pokémon data
- [Material UI](https://mui.com/) for the design system
- [TanStack Query](https://tanstack.com/query/latest) for data-fetching
