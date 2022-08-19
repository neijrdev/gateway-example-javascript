/* eslint-disable import/no-duplicates */
import React from "react";
import { Routes, HashRouter, Route } from "react-router-dom";
import App from "./pages/App";
import Api from "./pages/Api";

const BrowserRouter = ({ history }) => {
  return (
    <HashRouter basename="/" history={history}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </HashRouter>
  );
};

export default BrowserRouter;
