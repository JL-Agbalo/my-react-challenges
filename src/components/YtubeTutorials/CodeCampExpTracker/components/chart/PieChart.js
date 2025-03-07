import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function PieChart({ expense = 0, income = 0 }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    const option = {
      title: {
        text: "Pie Chart Example",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Financial Data",
          type: "pie",
          radius: "50%",
          data: [
            { value: expense, name: "Expense" },
            { value: income, name: "Income" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [expense, income]);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: "100%", minHeight: "500px" }}
    ></div>
  );
}

export default PieChart;
