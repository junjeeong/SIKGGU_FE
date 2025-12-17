import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* <Route path="/{stordId}/products" element={<StoreProductsPage />} />
        <Route
          path="/{stordId}/products/{productId}"
          element={<ProductDetailPage />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
