import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import './Statistics.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Statistics = () => {
  const documentTypeData = {
    labels: ['Bài giảng', 'Đề cương', 'Tài liệu khác'],
    datasets: [
      {
        label: 'Số lượng',
        data: [20, 10, 5],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  const downloadStats = {
    labels: ['Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9'],
    datasets: [
      {
        label: 'Số lượt tải tài liệu',
        data: [50, 75, 120, 90],
        backgroundColor: '#4BC0C0',
      },
    ],
  };

  const usageStats = {
    labels: ['Bài giảng', 'Đề cương', 'Tài liệu khác'],
    datasets: [
      {
        label: 'Thời gian sử dụng (giờ)',
        data: [30, 15, 10],
        backgroundColor: ['#9966FF', '#FF9F40', '#FF6384'],
      },
    ],
  };

  // Một số số liệu tổng hợp
  const summaryStats = [
    { label: 'Tổng tài liệu', value: 35, icon: '📚' },
    { label: 'Tài liệu đã tải', value: 230, icon: '⬇️' },
    { label: 'Thời gian dùng (giờ)', value: 55, icon: '⏰' },
    { label: 'Người dùng', value: 120, icon: '👥' },
  ];

  return (
    <div className="statistics">
      <header className="statistics-header">
        <h1>Dashboard Quản Lý Tài Liệu</h1>
        <p>Thống kê tổng quan về tài liệu, lượt tải và thời gian sử dụng hệ thống.</p>
      </header>

      <section className="summary-cards">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className={`summary-card card-${idx + 1}`}>
            <div className="icon">{stat.icon}</div>
            <div className="details">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="charts">
        <div className="chart">
          <h3>Phân loại tài liệu</h3>
          <Pie data={documentTypeData} />
        </div>

        <div className="chart">
          <h3>Số lượt tải theo tháng</h3>
          <Bar data={downloadStats} />
        </div>

        <div className="chart">
          <h3>Thời gian sử dụng theo loại tài liệu</h3>
          <Bar data={usageStats} />
        </div>
      </section>
    </div>
  );
};

export default Statistics;
