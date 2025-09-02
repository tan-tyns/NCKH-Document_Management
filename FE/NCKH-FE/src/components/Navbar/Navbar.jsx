import React from 'react'
import './Navbar.css'
import { FaBell, FaUserCircle, FaEnvelope, FaKey, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: xoá token, clear localStorage nếu có
    localStorage.removeItem("token"); 
    navigate("/login"); // điều hướng sang trang Login
  };
  const goSettings = () => navigate("/settings");
  const goChangePassword = () => navigate("/settings?tab=password");
  return (
      <div className='navbar'>
      <div className='navbar-left'>
          <img src='/Logo_STU.svg' alt="STU_LOGO" className='nav-logo'/>
          <span className='nav-title'>Trường Đại Học Công Nghệ Sài Gòn</span>
      </div>
      <div className='navbar-right'>
          <div className='nav-account'>
          <FaUserCircle size={35}    />
          <div className='navbar-user' onClick={goSettings}>
              <span className='username'>BÙI TẤN TÍN</span>
              <span className='useremail'>Quản Trị Viên</span>
          </div>
          <div className="navbar-caret">▼</div>
          <div className="account-menu">
              <div className="menu-row menu-header" onClick={goSettings}>
                <FaUserCircle />
                <span>Bùi Tấn Tín</span>
              </div>
              <div className="menu-divider" />

              <div className="menu-row">
                <FaEnvelope />
                <span>dh52201565@student.edu.vn</span>
              </div>
              <button className="menu-row" type="button" onClick={goChangePassword}>
                <FaKey />
                <span>Đổi mật khẩu</span>
              </button>
              <button className="menu-row danger" type="button" onClick={handleLogout}>
                <FaSignOutAlt />
                <span>Đăng xuất</span>
              </button>
          </div>
          </div>
      </div>
      </div>
      )
  }

export default Navbar
