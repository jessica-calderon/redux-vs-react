**Redux vs React State Management**
===================================

This is a small project I built to explore the practical differences between React's built-in state tools (`useState`, `useContext`) and Redux Toolkit. The demo runs directly on GitHub Pages, and each page shows a different approach so you can compare how they behave in a simple, real example.

**Live Demo:**  
<https://jessica-calderon.github.io/redux-vs-react/>

**GitHub Repo:**  
<https://github.com/jessica-calderon/redux-vs-react>

---

**Why I Put This Together**
---------------------------

I wanted a clear way to revisit when React state is enough and when Redux provides real value. Instead of reading long docs, building a tiny side-by-side example made it much easier to see the differences in state behavior, persistence, and how each approach scales.

---

**React State (useState, useContext)**
--------------------------------------

React's built-in state tools work well when:

-   State only lives inside one component or a small section of the tree

-   You don't need global persistence

-   You want a simple, lightweight setup

-   You're handling straightforward UI behavior

Typical uses: form fields, toggles, visual UI state, small interactive components.

Where it struggles: prop drilling, duplicated state, and anything that needs to survive navigation or refresh.

---

**Redux Toolkit**
-----------------

Redux Toolkit makes more sense when:

-   State needs to be shared across many components

-   The app grows and state becomes harder to coordinate

-   You're dealing with async logic like API calls

-   You want structured, predictable state updates

-   You want DevTools for debugging and time-travel

It adds more structure but pays off when the app becomes more complex.

---

**What the Demo Shows**
-----------------------

Both pages implement the same features:

-   Counter

-   Theme toggle

-   Search filter

The **Local State** page uses `useState` and `useContext`.  
The **Redux Demo** page uses Redux Toolkit slices, selectors, and an async thunk.

If you navigate back and forth, you'll notice:

-   The **Redux counter persists** across navigation and refresh

-   The **Local State counter resets** because the component unmounts

That simple difference highlights when global state becomes valuable.

---

**Project Structure**
---------------------

```
src/
├── pages/
│   ├── LocalStatePage.tsx
│   └── ReduxStatePage.tsx
├── context/
│   └── ThemeContext.tsx
├── store/
│   ├── counterSlice.ts
│   ├── themeSlice.ts
│   ├── searchSlice.ts
│   ├── store.ts
│   └── hooks.ts
└── components/
    └── Navigation.tsx
```

---
**Running It Locally (Optional)**
---------------------------------

You don't need to install anything to view the demo, but if you want to explore or modify the code:

```bash
npm install
npm run dev
```

---

**How I Decide When to Use Redux**
----------------------------------

After building this comparison, I learned that React state works well for most cases, but Redux becomes valuable when:

-   I'm passing the same data through multiple layers

-   I need persistence

-   Async logic becomes harder to organize

-   Debugging state changes gets messy

That's the point where Redux tends to help more than it hurts.