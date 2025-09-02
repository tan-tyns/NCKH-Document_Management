import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home/Home";
import Manage from "./pages/Manage/Manage";
import Setting from "./pages/Setting/Setting";
import Courses from "./pages/Courses/Courses";
import Exams from "./pages/Exams/Exams";
import Statistics from "./pages/Statistics/Statistics";
import Login from "./pages/Login/Login";
import ForgotPassWord from "./pages/ForgotPassWord/ForgotPassWord";

/** AppShell: khung layout chung cho các trang sau khi đăng nhập */
function AppShell() {
  return (
    <>
      <Navbar />
      <Layout>
        {/* Nơi render các route con */}
        <Outlet />
      </Layout>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Điều hướng root về trang /login */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassWord />} />

        {/* Private/App routes sử dụng layout chung */}
        <Route element={<AppShell />}>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/settings" element={<Setting />} />
        </Route>

        {/* 404 -> quay về login */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
