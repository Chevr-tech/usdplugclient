import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineCharts = ({ sparkLine, percentagePriceChange }) => {
  return (
    <>
      <Line
        data={{
          labels: sparkLine,
          datasets: [
            {
              label: "",
              fill: true,
              backgroundColor:
                percentagePriceChange >= 0 ? "#76e7763d" : "#ff634723",
              data: sparkLine,
              borderColor: percentagePriceChange >= 0 ? "green" : "tomato",
              radius: 0,
              borderWidth: 1,
              pointBorderWidth: 0,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: false,
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </>
  );
};

export default LineCharts;
