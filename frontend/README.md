# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# WHATS DONE SO FAR:

✅ Frontend
React
Components split into reusable pieces
Routing
Authentication flow
Protected dashboard
Search
Responsive navigation
Responsive layout
Modal system
Emoji picker
Local UI state
✅ Backend
Express API
MongoDB
Mongoose models
CRUD (Create, Read, Delete)
User model
JWT authentication
Password hashing with bcrypt
Protected routes
Owner-based filtering (owner field)
✅ Security
Passwords hashed
JWT verification middleware
Users only see their own diary entries
Dashboard protected by token
Authentication separated from diary routes

# Check for: 
✅ 1. Environment variables

Nothing sensitive should be hardcoded.

JWT_SECRET=
MONGO_URI=
PORT=
DONE .env in both frontend and backend secured

✅ 2. Error handling

Not elaborate.

Just consistent.

Instead of random responses:

res.status(500).json({
    message: err.message
})

you eventually want things like

return res.status(400).json({
    message: "Username already exists."
});

or

return res.status(401).json({
    message: "Invalid credentials."
});

You've already started thinking this way.

Done...
✅ 3. Loading states

You've done this before in Password Keeper.

Buttons shouldn't be spam-clickable.

Logging in...
Saving...
Deleting...
Double checking...
Done...
✅ 4. Empty states

If there are no memories yet:

"Your diary is empty.
Capture your first memory."

Little things like that make an app feel finished.
Done...
✅ 5. Deployment

This is the one people forget.

A project isn't really "finished" until somebody besides you can use it.

Deploy

frontend
backend
database

Deploy Tomorrow..
✅ 6. README

This matters more than people think.

Include

screenshots
features
tech stack
installation
environment variables
API overview

Future employers (and future you) appreciate this.