import React, { useMemo, useState, useEffect } from "react";
import "./Setting.css";
import { FaLock, FaFileInvoice, FaHistory, FaSignOutAlt } from "react-icons/fa"; // + FaSignOutAlt
import { FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { useSearchParams, useNavigate } from "react-router-dom";

/* ===== Helper: chấm điểm & rule password ===== */
const pwdRules = (pwd) => ({
  len8: pwd.length >= 8,
  upper: /[A-Z]/.test(pwd),
  lower: /[a-z]/.test(pwd),
  digit: /\d/.test(pwd),
  special: /[^A-Za-z0-9]/.test(pwd),
  nospace: !/\s/.test(pwd),
});
const scorePwd = (pwd) => {
  const r = pwdRules(pwd);
  return Object.values(r).reduce((s, v) => s + (v ? 1 : 0), 0);
};

/* ===== View: Đổi mật khẩu ===== */
function ChangePassword() {
  const [show, setShow] = useState({ cur: false, next: false, cf: false });
  const [form, setForm] = useState({ cur: "", next: "", cf: "" });
  const rules = useMemo(() => pwdRules(form.next), [form.next]);
  const score = useMemo(() => scorePwd(form.next), [form.next]);

  const allOk =
    rules.len8 && rules.upper && rules.lower && rules.digit &&
    rules.special && rules.nospace &&
    form.next === form.cf && form.cur && form.cur !== form.next;

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const toggle = (key) => setShow((s) => ({ ...s, [key]: !s[key] }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allOk) return;
    // TODO: call API đổi mật khẩu
    alert("Đổi mật khẩu thành công ✅");
    setForm({ cur: "", next: "", cf: "" });
  };

  const meterClass =
    score <= 2 ? "weak" : score === 3 ? "fair" : score === 4 ? "good" : "strong";

  return (
    <div className="panel-card pw-card">
      <aside className="pw-left">
        <h3 className="pw-title">Đổi mật khẩu</h3>
        <p className="pw-caption">Mật khẩu mới cần đáp ứng:</p>
        <ul className="pw-rules">
          <li className={rules.len8 ? "ok" : ""}>Tối thiểu 8 ký tự</li>
          <li className={rules.upper ? "ok" : ""}>Ít nhất 1 chữ hoa (A–Z)</li>
          <li className={rules.lower ? "ok" : ""}>Ít nhất 1 chữ thường (a–z)</li>
          <li className={rules.digit ? "ok" : ""}>Ít nhất 1 chữ số (0–9)</li>
          <li className={rules.special ? "ok" : ""}>Ít nhất 1 ký tự đặc biệt</li>
          <li className={rules.nospace ? "ok" : ""}>Không có khoảng trắng</li>
        </ul>
        <div className={`pw-meter ${meterClass}`}>
          <div className="bar" style={{ width: `${(score / 6) * 100}%` }} />
        </div>
        <small className="pw-note">
          Gợi ý: dùng cụm từ dễ nhớ + số/ký tự đặc biệt. Tránh lặp lại mật khẩu cũ.
        </small>
      </aside>

      <section className="pw-right">
        <form className="pw-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>Mật khẩu hiện tại</label>
            <div className="pw-input">
              <input
                type={show.cur ? "text" : "password"}
                name="cur"
                value={form.cur}
                onChange={onChange}
                placeholder="Nhập mật khẩu hiện tại"
                autoComplete="current-password"
              />
              <button type="button" className="pw-eye" onClick={() => toggle("cur")}>
                {show.cur ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className="form-row">
            <label>Mật khẩu mới</label>
            <div className="pw-input">
              <input
                type={show.next ? "text" : "password"}
                name="next"
                value={form.next}
                onChange={onChange}
                placeholder="Nhập mật khẩu mới"
                autoComplete="new-password"
              />
              <button type="button" className="pw-eye" onClick={() => toggle("next")}>
                {show.next ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className="form-row">
            <label>Nhập lại mật khẩu mới</label>
            <div className="pw-input">
              <input
                type={show.cf ? "text" : "password"}
                name="cf"
                value={form.cf}
                onChange={onChange}
                placeholder="Nhập lại mật khẩu mới"
                autoComplete="new-password"
              />
              <button type="button" className="pw-eye" onClick={() => toggle("cf")}>
                {show.cf ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {form.cf && form.cf !== form.next && (
              <small className="pw-error">Mật khẩu xác nhận chưa khớp.</small>
            )}
            {form.next && form.cur && form.next === form.cur && (
              <small className="pw-error">Mật khẩu mới không được trùng mật khẩu cũ.</small>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-update" disabled={!allOk}>
              Cập nhật mật khẩu
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

/* ===== View: Chung ===== */
function GeneralProfile() {
  return (
    <div className="panel-card profile-card">
      <div className="profile-left">
        <img src="./User.svg" alt="avatar" className="avatar" />
        <button className="btn-upload">Tải lên</button>
        <p className="note">Tải lên file ảnh (tối đa 5MB)</p>
      </div>

      <div className="profile-right">
        <form className="info-form" noValidate>
          <div className="form-row r-name">
            <label>Họ và tên</label>
            <input type="text" defaultValue="Tấn Tín" placeholder="Nhập họ tên" />
          </div>
          <div className="form-row r-username">
            <label>Username</label>
            <input type="text" value="tantin65" disabled />
          </div>
          <div className="form-row r-dob">
            <label>Ngày sinh</label>
            <input type="date" />
          </div>
          <div className="form-row r-email">
            <label>Email</label>
            <input type="email" defaultValue="buitantin65@gmail.com" />
            <a href="#!" className="change-link">Đổi email</a>
          </div>
          <div className="form-row r-phone">
            <label>Số điện thoại</label>
            <input type="tel" placeholder="Nhập số điện thoại" />
          </div>
          <div className="form-row r-gender">
            <label>Giới tính</label>
            <div className="radio-group">
              <label><input type="radio" name="gender" defaultChecked /> Nam</label>
              <label><input type="radio" name="gender" /> Nữ</label>
            </div>
          </div>
          <div className="form-row r-school">
            <label>Thông tin trường</label>
            <input type="text" placeholder="Tên trường..." />
          </div>
          <div className="form-row r-grade">
            <label>Khối dạy và môn dạy</label>
            <input type="text" placeholder="VD: Khối 10 - Toán" />
          </div>
        </form>

        <div className="form-actions">
          <button type="submit" className="btn-update">Cập nhật</button>
        </div>
      </div>
    </div>
  );
}

/* ===== Setting container với tab & đồng bộ URL + Logout ===== */
export default function Setting() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "general");

  useEffect(() => {
    const q = searchParams.get("tab") || "general";
    setActiveTab(q);
  }, [searchParams]);

  const changeTab = (tab) => {
    setActiveTab(tab);
    navigate(`/settings?tab=${tab}`, { replace: true });
  };

  // ⬇️ Đăng xuất (tái dùng logic như Navbar)
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="setting">
      <aside className="setting-sidebar">
        <div className={`menu-item ${activeTab === "general" ? "active" : ""}`} onClick={() => changeTab("general")}>
          <FiUser /><span>Chung</span>
        </div>
        <div className={`menu-item ${activeTab === "password" ? "active" : ""}`} onClick={() => changeTab("password")}>
          <FaLock /><span>Đổi mật khẩu</span>
        </div>
        <div className={`menu-item ${activeTab === "lang" ? "active" : ""}`} onClick={() => changeTab("lang")}>
          <FaFileInvoice /><span>Ngôn Ngữ</span>
        </div>
        <div className={`menu-item ${activeTab === "history" ? "active" : ""}`} onClick={() => changeTab("history")}>
          <FaHistory /><span>Lịch sử</span>
        </div>

        {/* Nút Đăng xuất ở đáy sidebar */}
        <button
          type="button"
          className="menu-item danger logout-btn"
          onClick={handleLogout}
          style={{ marginTop: "auto" }}  // ép xuống đáy không cần thêm CSS
        >
          <FaSignOutAlt /><span>Đăng xuất</span>
        </button>
      </aside>

      <main className="setting-content">
        {activeTab === "general" && <GeneralProfile />}
        {activeTab === "password" && <ChangePassword />}
        {activeTab === "lang" && (
          <div className="panel-card"><p>Chọn ngôn ngữ (đang để trống ví dụ)…</p></div>
        )}
        {activeTab === "history" && (
          <div className="panel-card"><p>Lịch sử (đang để trống ví dụ)…</p></div>
        )}
      </main>
    </div>
  );
}
