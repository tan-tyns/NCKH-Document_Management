import React, { useState } from 'react';
import './Courses.css';

const allCourses = [
  {
    id: 1,
    title: 'TỪ VỰNG - VOCABULARY',
    category: 'Khác',
    updatedAt: '30/08/2025 18:06',
    author: 'ros xoan',
    downloads: 0,
    type: 'word',
  },
  {
    id: 2,
    title: 'Chuyên đề toán 11',
    category: 'CNTT',
    updatedAt: '30/08/2025 18:05',
    author: 'Nghia',
    downloads: 0,
    type: 'video',
  },
  {
    id: 3,
    title: 'Khảo sát hàm phân thức',
    category: 'CNTT',
    updatedAt: '30/08/2025 18:07',
    author: 'Nghia',
    downloads: 0,
    type: 'video',
  },
  {
    id: 4,
    title: 'Ngữ Văn 4',
    category: 'Marketing',
    updatedAt: '30/08/2025 18:08',
    author: 'Hong Dao',
    downloads: 0,
    type: 'ppt',
  },
  {
    id: 5,
    title: 'Luyện tập chương 1',
    category: 'CNTT',
    updatedAt: '30/08/2025 18:09',
    author: 'Thầy Quang',
    downloads: 0,
    type: 'video',
  },
  {
    id: 6,
    title: 'CÂU HỎI THEO BÀI',
    category: 'QTKD',
    updatedAt: '30/08/2025 18:06',
    author: 'Ha Yran',
    downloads: 0,
    type: 'word',
  },
  {
    id: 7,
    title: 'Bài 1. Tình yêu.',
    category: 'QTKD',
    updatedAt: '30/08/2025 18:05',
    author: 'Ha Yran',
    downloads: 1,
    type: 'word',
  },
  {
    id: 8,
    title: 'tn_toan9_kntt_1_bai_1',
    category: 'Marketing',
    updatedAt: '30/08/2025 18:05',
    author: 'Trần Quốc Chung',
    downloads: 2,
    type: 'file',
  },
];

const icons = {
  word: '📄',
  video: '🎥',
  ppt: '📊',
  file: '📁',
};

const categories = ['Tất cả', 'CNTT', 'QTKD', 'Marketing', 'Khác'];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Tất cả');

  // Lọc khóa học dựa trên searchTerm và filterCategory
  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = filterCategory === 'Tất cả' || course.category === filterCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="courses">
      <h2>Tài liệu mới nhất</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Tìm kiếm khóa học..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          className="category-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="course-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="icon">{icons[course.type]}</div>
            <h3 className="title" title={course.title}>{course.title}</h3>
            <p className="category">{course.category}</p>
            <p className="updatedAt">Ngày cập nhật: {course.updatedAt}</p>
            <p className="author">Người soạn: <strong>{course.author}</strong></p>
            <p className="downloads">Số lượt tải: {course.downloads}</p>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <p className="no-results">Không tìm thấy khóa học phù hợp.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
