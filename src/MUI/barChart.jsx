import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function BarChartMUI() {
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: "Fev",
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: "Apr",
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: "May",
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: "June",
    },
  ];

  return (
    <BarChart
      //   colors={["#FF0000", "#00FF00", "#0000FF"]}
      xAxis={[
        {
          scaleType: "band",
          id: "axis1",
          categoryGapRatio: 0.2,
          barGapRatio: 0.2,
          dataKey: "month",
          label: "xlabel",
          //   tickPlacement: "middle",
          //   tickLabelPlacement: "tick",
        },
      ]}
      dataset={dataset}
      yAxis={[{ label: "ylabel" }]}
      series={[
        {
          id: "series-1",
          dataKey: "london",
          label: "London",
          highlightScope: {
            highlighted: "item",
          },
        },
        {
          id: "series-2",
          dataKey: "paris",
          label: "Paris",
          highlightScope: {
            highlighted: "item",
          },
        },
        {
          id: "series-3",
          dataKey: "newYork",
          label: "New York",
          highlightScope: {
            highlighted: "item",
          },
        },
        {
          id: "series-4",
          dataKey: "seoul",
          label: "Seoul",
          highlightScope: {
            highlighted: "item",
          },
        },
      ]}
      height={400}
      sx={{
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          // transform: "translate(-20px, 0)",
        },
      }}
    />
  );
}
