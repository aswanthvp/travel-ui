import React from "react";
import { Routes, Route } from "react-router-dom";

import { PageLayout } from "./component/Layouts";
import LoginPage from "./component/Login";
import TripsList from "./component/Trips";
import Navbar from "./component/Navbar";
import ProtectedRoutes from "./component/ProtectedRoutes";
import TripForm from "./component/TripForm";

function App() {
  return (
    <PageLayout>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/trips" element={<ProtectedRoutes />}>
          <Route exact path="/trips" element={<TripsList />} />
        </Route>
        <Route path="/" element={<TripForm />}></Route>
      </Routes>
    </PageLayout>
  );
}

export default App;
