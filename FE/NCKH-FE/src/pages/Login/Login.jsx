import React, { useState } from "react";
import "./Login.css";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const canSubmit = form.username.trim() && form.password.trim();

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: call API login here
    console.log("login", form);
  };

  return (
    <div className="login">
      <div className="login-card">
        <img className="login-logo" src="/Logo_STU.svg" alt="Logo" />

        <h2 className="login-title">ĐĂNG NHẬP</h2>
        <p className="login-sub">
          Vui lòng nhập thông tin tài khoản để đăng nhập vào hệ thống!
        </p>

        <form onSubmit={onSubmit} className="login-form">
          {/* Username */}
          <label className="input-wrap">
            <FiUser className="input-ic" />
            <input
              name="username"
              type="text"
              placeholder="Nhập tên tài khoản"
              value={form.username}
              onChange={onChange}
              autoComplete="username"
            />
          </label>

          {/* Password */}
          <label className="input-wrap">
            <FiLock className="input-ic" />
            <input
              name="password"
              type={showPw ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              value={form.password}
              onChange={onChange}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="pw-toggle"
              onClick={() => setShowPw((v) => !v)}
              aria-label={showPw ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              title={showPw ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            >
              {showPw ? <FiEyeOff /> : <FiEye />}
            </button>
          </label>

          <div className="login-extra">
            <Link to="/forgot-password" className="forgot-link">
              Quên mật khẩu?
            </Link>
          </div>

          <button type="submit" className="login-btn" disabled={!canSubmit}>
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
