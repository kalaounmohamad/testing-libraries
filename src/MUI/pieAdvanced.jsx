import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function PieAdvanced() {
  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];
  return (
    <PieChart
      series={[
        {
          data,
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: 0,
          endAngle: 360,
          //   cx: 150,
          //   cy: 150,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
        },
      }}
      width={400}
      height={200}
    />
  );
}
