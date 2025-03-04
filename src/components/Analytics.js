import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Users per Month",
      data: [5, 10, 15, 20, 25],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const Analytics = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Analytics Placeholder</h2>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;
