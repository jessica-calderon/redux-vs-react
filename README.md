# Redux vs React State Management

An educational React + Vite project that demonstrates the difference between native React state management (`useState`, `useContext`) and Redux Toolkit.

## 🎯 Project Overview

This project showcases two approaches to state management in React:

1. **Local State Demo** (`/local-state`) - Uses React's built-in state management
2. **Redux Demo** (`/redux-state`) - Uses Redux Toolkit for global state management

Both pages implement the same features (counter, theme toggle, search filter) to make it easy to compare the approaches side-by-side.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Navigation header component
│   └── Navigation.css
├── context/
│   └── ThemeContext.tsx        # React Context for theme (local state page only)
├── pages/
│   ├── LocalStatePage.tsx      # Demo using useState + useContext
│   ├── ReduxStatePage.tsx      # Demo using Redux Toolkit
│   └── PageStyles.css
├── store/
│   ├── counterSlice.ts         # Redux slice for counter
│   ├── themeSlice.ts           # Redux slice for theme
│   ├── searchSlice.ts          # Redux slice for search (with async thunk)
│   ├── store.ts                # Redux store configuration
│   └── hooks.ts                # Typed Redux hooks
├── App.tsx                      # Main app with routing
├── main.tsx                     # Entry point with Redux Provider
└── index.css                    # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd redux-vs-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📚 When to Use Native React State

**Use `useState` and `useContext` when:**

- ✅ Building small to medium-sized applications
- ✅ State is only needed within a few components
- ✅ No need for complex state logic or async operations
- ✅ You want to keep dependencies minimal
- ✅ State doesn't need to persist across navigation
- ✅ Simple component-level state management is sufficient

**Example use cases:**
- Form inputs
- UI toggles (modals, dropdowns)
- Component-specific counters
- Local component state

## 🔄 When to Use Redux

**Use Redux Toolkit when:**

- ✅ Building large, complex applications
- ✅ State needs to be shared across many components
- ✅ You need time-travel debugging (Redux DevTools)
- ✅ Complex async operations (API calls, side effects)
- ✅ State needs to persist across navigation
- ✅ Predictable state updates are critical
- ✅ You need middleware for logging, persistence, etc.

**Example use cases:**
- User authentication state
- Shopping cart
- Global theme/settings
- API data caching
- Complex application state

## 🔑 Key Differences

### Local vs Global State

**Local State (React Native):**
- State lives within components
- Passed down via props or Context
- Lost when component unmounts (unless persisted)
- Simpler mental model
- Less boilerplate

**Global State (Redux):**
- State lives in a centralized store
- Accessible from any component
- Persists across component unmounts
- More structured and predictable
- Better for complex state logic

### State Management Comparison

| Feature | React Native State | Redux Toolkit |
|---------|-------------------|---------------|
| Setup Complexity | Low | Medium |
| Boilerplate | Minimal | Moderate |
| DevTools | Limited | Excellent (Redux DevTools) |
| Async Operations | Manual (useEffect) | Built-in (thunks) |
| State Persistence | Manual | Easy with middleware |
| Scalability | Good for small apps | Excellent for large apps |
| Learning Curve | Easy | Moderate |

## 🛠️ Features Demonstrated

### Local State Page (`/local-state`)
- ✅ Counter using `useState`
- ✅ Theme toggle using `useContext`
- ✅ Search filter using `useState`
- ✅ Explanation of React native state benefits

### Redux State Page (`/redux-state`)
- ✅ Counter using Redux slice
- ✅ Theme toggle using Redux slice
- ✅ Search filter with async thunk (fake API call)
- ✅ Explanation of Redux benefits
- ✅ Redux DevTools integration

## 🔍 Redux DevTools

The Redux page is configured to work with Redux DevTools. To use it:

1. Install the [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for Chrome/Firefox
2. Open your browser's DevTools
3. Click on the "Redux" tab
4. Interact with the Redux page and watch actions being dispatched in real-time
5. Use time-travel debugging to see how state changes over time

## 📦 Deployment to GitHub Pages

This project is configured for GitHub Pages deployment. The following configurations are already set up:

### Configuration Files

**`vite.config.ts`:**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/redux-vs-react/',
})
```

**`package.json`:**
```json
{
  "homepage": "https://jessica-calderon.github.io/redux-vs-react",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**`src/App.tsx`:**
```typescript
<BrowserRouter basename="/redux-vs-react">
```

### Deploying

1. **Install dependencies** (if not already installed):
```bash
npm install
```

2. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

This will:
- Run `predeploy` script to build the project
- Deploy the `dist` folder to the `gh-pages` branch
- Make your site available at `https://jessica-calderon.github.io/redux-vs-react`

3. **Configure GitHub Pages** (first time only):
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Select the `gh-pages` branch as the source
   - Your site will be live in a few minutes

### Important Notes

- The `base` path in `vite.config.ts` must match your repository name
- The `basename` in `BrowserRouter` must match the `base` path
- The `homepage` in `package.json` should match your GitHub Pages URL

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages

## 📖 Learning Resources

- [React State Management](https://react.dev/learn/managing-state)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

## 🤝 Contributing

This is an educational project. Feel free to fork, modify, and use it for learning purposes!

## 📝 License

MIT License - feel free to use this project for educational purposes.

---

**Note for Hiring Managers:** This project demonstrates understanding of both React's native state management and Redux Toolkit, showing when to use each approach appropriately. The code is intentionally simple and well-commented to serve as an educational resource.
