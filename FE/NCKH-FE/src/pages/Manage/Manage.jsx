import React, { useState } from 'react';
import './Manage.css';
import { FiUsers, FiUserCheck, FiFolder } from 'react-icons/fi';

const Manage = () => {
  // Tab: 'roles' | 'users' | 'folders'
  const [activeTab, setActiveTab] = useState('roles');

  // Dữ liệu mẫu cho từng tab
  const [data, setData] = useState({
    roles: [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Editor' },
    ],
    users: [
      { id: 1, name: 'Nguyen Van A' },
      { id: 2, name: 'Tran Thi B' },
    ],
    folders: [
      { id: 1, name: 'Documents' },
      { id: 2, name: 'Images' },
    ],
  });

  // Hàm xử lý thao tác
  const handleView = (item) => alert(`Xem: ${item.name}`);
  const handleEdit = (item) => alert(`Sửa: ${item.name}`);
  const handleDelete = (item) => {
    if (window.confirm(`Xóa ${item.name} ?`)) {
      // Cập nhật dữ liệu để loại bỏ item
      setData((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((i) => i.id !== item.id),
      }));
    }
  };
  const handleCreate = () => {
    const tabName = activeTab;
    // Ví dụ: thêm phần tử dummy với id tự tăng
    setData((prev) => {
      const arr = prev[tabName];
      const newId = arr.length ? Math.max(...arr.map((a) => a.id)) + 1 : 1;
      const newItem =
        tabName === 'roles'
          ? { id: newId, name: `New Role ${newId}` }
          : tabName === 'users'
          ? { id: newId, name: `New User ${newId}` }
          : { id: newId, name: `New Folder ${newId}` };

      return {
        ...prev,
        [tabName]: [...arr, newItem],
      };
    });
  };

  // Render bảng dựa theo tab đang active
  const renderTable = () => {
    const items = data[activeTab] || [];
    return (
      <div className="table-container">
        <div className="table-header">
          <button className="create-btn" onClick={handleCreate}>+ Tạo mới</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td className="actions">
                  <button className="view" onClick={() => handleView(item)}>Xem</button>
                  <button className="edit" onClick={() => handleEdit(item)}>Sửa</button>
                  <button className="delete" onClick={() => handleDelete(item)}>Xóa</button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan="3" className="empty">Không có dữ liệu.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="manage">
      <div className="manage-sidebar">
        <div className="manage-header">Quản lý</div>
        <ul className="manage-menu">
          <li className={activeTab === 'roles' ? 'active' : ''} onClick={() => setActiveTab('roles')}>
            <FiUserCheck className="icon" />
            <span>Vai trò</span>
          </li>
          <li className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>
            <FiUsers className="icon" />
            <span>Người dùng</span>
          </li>
          <li className={activeTab === 'folders' ? 'active' : ''} onClick={() => setActiveTab('folders')}>
            <FiFolder className="icon" />
            <span>Thư mục</span>
          </li>
        </ul>
      </div>

      <div className="content">
        <h2>
          Danh sách {activeTab === 'roles' ? 'vai trò' : activeTab === 'users' ? 'người dùng' : 'thư mục'}
        </h2>
        {renderTable()}
      </div>
    </div>
  );
};

export default Manage;