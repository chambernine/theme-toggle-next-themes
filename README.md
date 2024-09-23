# Next.js 14 Project with Theme Toggle and Bun

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), featuring theme toggling and using Bun as the JavaScript runtime.

## Features

- Next.js 14
- Theme toggle (Light/Dark mode)
- Bun as JavaScript runtime

## Getting Started

First, ensure you have [Bun](https://bun.sh) installed on your system.

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Theme Toggle

This project includes a theme toggle feature, allowing users to switch between light and dark modes. The theme state is managed using React context and persisted in local storage for a consistent user experience across page loads.

To implement the theme toggle:

1. Create a `ThemeProvider` component in `app/providers/ThemeProvider.tsx`.
2. Wrap your app with the `ThemeProvider` in `app/layout.tsx`.
3. Use the `useTheme` hook in your components to access and change the current theme.

Example usage:

```jsx
import { useTheme } from "@/app/providers/ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
```

## Learn More

To learn more about Next.js and Bun, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Bun Documentation](https://bun.sh/docs) - learn about Bun features and usage.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
