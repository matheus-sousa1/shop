import "./App.css";
import Header from "./containers/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListening from "./containers/productListening";
import ProductDetail from "./containers/productDetail";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListening />}></Route>
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetail />}
          ></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
