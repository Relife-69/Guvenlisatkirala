import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/advertisements/"
        );
        const data = response.data;

        const labels = data.map((item) => item.id);
        const values = data.map((item) => item.id);

        // Ensure chartRef is available and destroy any existing chart instance
        if (chartRef && chartRef.current && chartRef.current.chartInstance) {
          chartRef.current.chartInstance.destroy();
        }

        // Render new chart
        chartRef.current = new Doughnut(chartRef.current, {
          data: {
            labels: labels,
            datasets: [
              {
                label: "Sample Data",
                data: values,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              position: "top",
            },
            animation: {
              animateScale: true,
              animateRotate: true,
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean up the chart on component unmount
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs only once

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
