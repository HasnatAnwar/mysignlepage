import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from "recharts";

const data = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderPartitionLabels = (props) => {
  const {
    cx,
    cy,
    startAngle,
    endAngle,
    midAngle,
    outerRadius,
    payload,
    percent,
    index,
    data
  } = props;

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const cumulativeAngle =
    data
      .slice(0, index + 1)
      .reduce((sum, item) => sum + (item.value / total) * 180, 0) - 90; // Offset to match chart angle

  const radius = outerRadius + 12;
  const x = cx + radius * Math.cos(-cumulativeAngle * RADIAN);
  const y = cy + radius * Math.sin(-cumulativeAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={11}
      fontWeight="500"
    >
      {Math.round((data[index].value / total) * 100)}%
    </text>
  );
};

export default function SemicircleChart() {
  return (
    <div
      className="container mt-4 d-flex flex-column align-items-center p-3"
      style={{
        backgroundColor: "white",
      }}
    >
      <p className="mb-2 fw-semibold">% Booking Accepted</p>

      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={250}
              endAngle={-70}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              labelLine={false}
              label={(props) => renderPartitionLabels({ ...props, data })}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {/* Center Text */}
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="18"
              fontWeight="bold"
              fill="#000"
            >
              100%
            </text>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}



// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Product A", value: 400 },
//   { name: "Product B", value: 300 },
//   { name: "Product C", value: 300 },
//   { name: "Product D", value: 200 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// export default function SemicircleChart() {
//   return (
//     <div
//       className="container mt-4 d-flex flex-column align-items-center p-3"
//       style={{
//         // width: "400px",
//         backgroundColor: "white",
//       }}
//     >
//       <p className="mb-2 fw-semibold">% Booking Accepted</p>

//       <div style={{ width: "100%", height: 200 }}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%" // ✅ Center horizontally
//               cy="50%" // Bottom vertically (for semi circle)
//               startAngle={250}
//               endAngle={-70}
//               innerRadius={70}
//               outerRadius={100}
//               fill="#8884d8"
//               dataKey="value"
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
