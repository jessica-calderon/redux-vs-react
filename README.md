# Redux vs React State Management

A simple demo project comparing React's built-in state management (`useState`, `useContext`) with Redux Toolkit. Both pages implement the same features so you can see the differences side-by-side.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` and check out both pages.

## The Difference

### React State (useState, useContext)

React's built-in state is perfect for most apps. Use it when:

- Your app is small to medium-sized
- State only needs to be shared between a few components
- You don't need complex async operations
- State doesn't need to persist across navigation
- You want to keep dependencies minimal

**Good for:** form inputs, UI toggles, component-level state, simple counters.

**Limitations:** State is lost when components unmount, no built-in async handling, can get messy with prop drilling in large apps.

### Redux Toolkit

Redux is overkill for simple apps, but it's worth it when:

- Your app is large and complex
- State needs to be shared across many components
- You need time-travel debugging (Redux DevTools)
- You're doing lots of async operations (API calls, side effects)
- State needs to persist across navigation
- You need middleware for logging, persistence, etc.

**Good for:** user auth state, shopping carts, global settings, API data caching, complex app state.

**Trade-offs:** More boilerplate, steeper learning curve, but better tooling and scalability.

## What This Project Shows

Both pages have the same features:
- Counter
- Theme toggle
- Search filter

The Local State page uses `useState` and `useContext`. The Redux page uses Redux Toolkit with async thunks. Try navigating between them - you'll notice the Redux counter persists while the local state one resets.

## Project Structure

```
src/
├── pages/
│   ├── LocalStatePage.tsx      # useState + useContext demo
│   └── ReduxStatePage.tsx      # Redux Toolkit demo
├── context/
│   └── ThemeContext.tsx        # React Context (local state only)
├── store/
│   ├── counterSlice.ts
│   ├── themeSlice.ts
│   ├── searchSlice.ts         # includes async thunk example
│   ├── store.ts
│   └── hooks.ts
└── components/
    └── Navigation.tsx
```

## Redux DevTools

The Redux page works with Redux DevTools. Install the browser extension and you can see all actions, state changes, and use time-travel debugging.

## Deployment

This is set up for GitHub Pages. Run `npm run deploy` to build and deploy.

## When Should You Use Redux?

Start with React state. If you find yourself:
- Passing props through 3+ component levels
- Duplicating state across components
- Struggling with async state management
- Needing to debug complex state flows

Then consider Redux. Most apps don't need it, but when you do, it's worth the setup.
