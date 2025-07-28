// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./routes/home";
// import Account from "./routes/account";
// import Cart from "./routes/cart";
// import Favorites from "./routes/favorites";
// import Search from "./routes/search";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/account", element: <Account /> },
//   { path: "/cart", element: <Cart /> },
//   { path: "/favorites", element: <Favorites /> },
//   { path: "/search", element: <Search /> },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }


// App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Account from "./routes/account";
import Cart from "./routes/cart";
import Favorites from "./routes/favorites";
import Search from "./routes/search";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/account", element: <Account /> },
  { path: "/cart", element: <Cart /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/search", element: <Search /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
