import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='welcome-section'>
        <div className='welcome-text'>
          <h2>Xin chào Tín!</h2>
          <p>Quản lý tất cả tài liệu của bạn một cách hiệu quả tại đây.</p>
          <button className='upload-btn'>Tải tài liệu mới</button>
        </div>
        <div className='welcome-img'>
          {/* Hình minh họa có thể đặt tại đây */}
        </div>
      </div>

      <div className='stats-section'>
        <div className='stat-card light-blue'>
          <h3>152</h3>
          <p>Tổng tài liệu hiện có</p>
        </div>
        <div className='stat-card light-purple'>
          <h3>13</h3>
          <p>Yêu cầu tài liệu</p>
        </div>
        <div className='stat-card light-pink'>
          <h3>03</h3>
          <p>Tài liệu đang chờ</p>
        </div>
      </div>

      <div className='main-content'>
        <div className='document-section'>
          <h3 className='box-title'>📄 Tài liệu nổi bật</h3>
          <ul className='document-list'>
            <li className='card-item'>
              <span className='doc-title'>Báo cáo tài chính năm 2025</span>
              <span className='doc-date'>02 Tháng 9, 2025</span>
              <div className='doc-stats'>
                <span>6.5K lượt xem</span>
                <span>3.4K lượt tải</span>
                <span>34 bình luận</span>
              </div>
            </li>
            <li className='card-item'>
              <span className='doc-title'>Chiến lược Marketing 2025</span>
              <span className='doc-date'>28 Tháng 8, 2025</span>
              <div className='doc-stats'>
                <span>5.1K lượt xem</span>
                <span>2.8K lượt tải</span>
                <span>28 bình luận</span>
              </div>
            </li>
          </ul>
        </div>

        <div className='schedule-section'>
          <h3 className='box-title'>📅 Lịch hôm nay</h3>
          <ul className='schedule-list'>
            <li className='card-item'>
              <span className='time'>10:00</span>
              <span className='activity'>Xem lại báo cáo quý 3</span>
              <span className='assigned'>Giao bởi: Anh Tuấn</span>
            </li>
            <li className='card-item'>
              <span className='time'>14:00</span>
              <span className='activity'>Cập nhật tài liệu chính sách</span>
              <span className='assigned'>Giao bởi: Thu Hằng</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
