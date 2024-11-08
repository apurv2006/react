import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const SkillChart = () => {
  const data = {
    labels: ['Java', 'Python', 'React', 'CSS', 'HTML', 'Algorithm Problem-Solving'],
    datasets: [
      {
        label: 'Skill Level',
        data: [4, 2, 3, 3, 4, 5],
        backgroundColor: [
          '#FF6384', // Soft red
          '#36A2EB', // Bright blue
          '#FFCE56', // Golden yellow
          '#4BC0C0', // Aqua green
          '#9966FF', // Lavender purple
          '#FF9F40'  // Orange
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        color: '#FFD700',
      },
      title: {
        display: true,
        text: 'Skill Levels',
        color: '#FFD700',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#FFD700', // Dark blue-gray color for x-axis labels
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#FFD700', // Matching dark blue-gray color for y-axis labels
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SkillChart;
