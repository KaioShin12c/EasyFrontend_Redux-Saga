import React, { useEffect } from "react";
import "./App.css";
import cityApi from "apis/cityApi";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "components/Layout";
import LoginPage from "features/auth/pages/LoginPage";
import { NotFound, PrivateRoute } from "components/Common";

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => {
      console.log("cities", response);
    });
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
