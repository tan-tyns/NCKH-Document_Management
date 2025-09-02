import React, { useState } from "react";
import { NavLink } from "react-router-dom";   // <-- thêm
import "./Sidebar.css";
import {
  FiMenu, FiHome, FiBookOpen, FiBarChart2, FiFileText, FiLayout, FiSettings,
} from "react-icons/fi";

const MENU_ITEMS = [
  { key: "home",    label: "Trang Chủ", icon: <FiHome />,      path: "/" },
  { key: "courses", label: "Kho Nội Dung",  icon: <FiBookOpen />,  path: "/courses" },
  { key: "stats",   label: "Thống Kê",  icon: <FiBarChart2 />, path: "/stats" },
  { key: "exams",   label: "Đề Thi",    icon: <FiFileText />,  path: "/exams" },
  { key: "manage",  label: "Quản Lý",   icon: <FiLayout />,    path: "/manage" },
  { key: "settings",label: "Cài Đặt",   icon: <FiSettings />,  path: "/settings" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* Header */}
      <div className="sb-head">
        <button className="sb-menu-btn" onClick={() => setOpen(v => !v)}>
          <FiMenu />
        </button>
        {open && <span className="sb-title">DANH MỤC</span>}
      </div>

      {/* Menu */}
      <nav className="sb-list">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className={({ isActive }) => `sb-item ${isActive ? "active" : ""}`}
            title={!open ? item.label : undefined}
          >
            <span className="sb-ic">{item.icon}</span>
            <span className="sb-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
