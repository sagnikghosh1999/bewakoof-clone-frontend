import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Utils/Spinner.jsx";

//lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const MenHome = lazy(() => import("./pages/MenHome"));
const WomenHome = lazy(() => import("./pages/WomenHome"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/men" element={<MenHome />} />
        <Route path="/women" element={<WomenHome />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route path="/product/:id" element={<ProductDetailsPage />} />

        <Route
          path="/products/:category/:subcategory"
          element={<ProductsPage />}
        />
        <Route path="/search" element={<ProductsPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
