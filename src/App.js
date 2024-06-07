import React from "react";
import BarChartMUI from "./MUI/barChart";
import BarClickNoSnap from "./MUI/barAdvanced";
import LineChartMUI from "./MUI/line";
import BasicPie from "./MUI/pie";
import PieAdvanced from "./MUI/pieAdvanced";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold  text-center">MUI Library Testing</h1>
      <div className="flex flex-col">
        <div className="flex my-10">
          <div className="w-[50%] border-4 border-r-0">
            <BarChartMUI />
          </div>
          <div className="border-4 flex-grow">
            <BarClickNoSnap />
          </div>
        </div>
        <div className="mb-10 border-4 py-4">
          <LineChartMUI />
        </div>
        <div className="flex mb-10">
          <div className="border-4 border-r-0 flex-grow">
            <BasicPie />
          </div>
          <div className="border-4 flex-grow">
            <PieAdvanced />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
