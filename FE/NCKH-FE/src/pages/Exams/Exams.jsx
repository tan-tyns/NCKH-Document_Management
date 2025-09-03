import React, { useState } from 'react';
import './Exams.css';

const allExams = [
  {
    id: 1,
    title: 'Đề thi giữa kỳ - Cấu trúc dữ liệu',
    faculty: 'CNTT',
    createdAt: '01/09/2025 10:00',
    author: 'Thầy Quang',
    questions: 30,
  },
  {
    id: 2,
    title: 'Đề cuối kỳ - Kinh tế vi mô',
    faculty: 'Kinh tế',
    createdAt: '31/08/2025 14:30',
    author: 'Cô Lan',
    questions: 40,
  },
  {
    id: 3,
    title: 'Trắc nghiệm Giải phẫu học',
    faculty: 'Y Dược',
    createdAt: '29/08/2025 09:15',
    author: 'Thầy Nam',
    questions: 25,
  },
  {
    id: 4,
    title: 'Thi cuối kỳ - Luật Hình sự',
    faculty: 'Luật',
    createdAt: '30/08/2025 16:00',
    author: 'Cô Hằng',
    questions: 35,
  },
  {
    id: 5,
    title: 'Giáo dục học - Thi giữa kỳ',
    faculty: 'Giáo dục',
    createdAt: '01/09/2025 08:30',
    author: 'Thầy Minh',
    questions: 20,
  },
];

const faculties = ['Tất cả', 'CNTT', 'Kinh tế', 'Y Dược', 'Giáo dục', 'Luật'];

const Exams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFaculty, setFilterFaculty] = useState('Tất cả');

  const filteredExams = allExams.filter(exam => {
    const matchesFaculty = filterFaculty === 'Tất cả' || exam.faculty === filterFaculty;
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFaculty && matchesSearch;
  });

  const handleCreateExam = () => {
    alert('Chuyển sang giao diện tạo bài thi từ ngân hàng câu hỏi...');
    // Có thể thay bằng navigate('/create-exam') nếu bạn dùng React Router
  };

  return (
    <div className="exams">
      <div className="exam-header">
        <h2>Danh sách bài thi</h2>
        <button className="create-btn" onClick={handleCreateExam}>
          ➕ Tạo bài thi từ ngân hàng câu hỏi
        </button>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Tìm kiếm đề thi..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={filterFaculty}
          onChange={e => setFilterFaculty(e.target.value)}
          className="category-select"
        >
          {faculties.map(fac => (
            <option key={fac} value={fac}>{fac}</option>
          ))}
        </select>
      </div>

      <div className="exam-grid">
        {filteredExams.map(exam => (
          <div key={exam.id} className="exam-card">
            <h3 className="title" title={exam.title}>{exam.title}</h3>
            <p className="meta">Khoa: <strong>{exam.faculty}</strong></p>
            <p className="created">Ngày tạo: {exam.createdAt}</p>
            <p className="author">Người tạo: {exam.author}</p>
            <p className="questions">Số câu hỏi: {exam.questions}</p>
          </div>
        ))}

        {filteredExams.length === 0 && (
          <p className="no-results">Không tìm thấy bài thi phù hợp.</p>
        )}
      </div>
    </div>
  );
};

export default Exams;
