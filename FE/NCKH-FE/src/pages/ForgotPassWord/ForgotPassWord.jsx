import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassWord = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setLoading(true);
    try {
      // TODO: Gọi API gửi mail reset password
      // await api.forgotPassword(email)
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot">
      <div className="forgot-card">
        {/* Nút quay lại trang Login */}
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/login")}
        >
          ← Quay lại đăng nhập
        </button>

        <h2 className="forgot-title">Quên mật khẩu</h2>
        <p className="forgot-sub">
          Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu.
        </p>

        {!sent ? (
          <form className="forgot-form" onSubmit={onSubmit} noValidate>
            <label className="input-wrap">
              <span className="input-label">Email</span>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                inputMode="email"
              />
            </label>

            <button
              type="submit"
              className="forgot-btn"
              disabled={!isValidEmail || loading}
            >
              {loading ? "Đang gửi..." : "GỬI LIÊN KẾT"}
            </button>
          </form>
        ) : (
          <div className="forgot-done">
            <h3>✅ Yêu cầu đã được gửi</h3>
            <p>
              Nếu email tồn tại trong hệ thống, chúng tôi đã gửi liên kết đặt lại
              mật khẩu tới <b>{email}</b>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassWord;
