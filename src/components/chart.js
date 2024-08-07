import React, { useState } from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,2000,2001,2002,2003,2004,2005]
    }
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91,49,78,80,65,87,48,78]
    }
  ]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            height="245"
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;