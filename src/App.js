import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 3],
  ["Commute", 3],
  ["Watch TV", 0.5],
  ["Sleep", 5], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};
function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default App;
