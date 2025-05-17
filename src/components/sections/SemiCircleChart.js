import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SemicircleChart() {
  return (
    <div
      className="container mt-4 d-flex flex-column align-items-center p-3"
      style={{
        // width: "400px",
        backgroundColor: "white",
      }}
    >
      <p className="mb-2 fw-semibold">% Booking Accepted</p>

      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%" // ✅ Center horizontally
              cy="50%" // Bottom vertically (for semi circle)
              startAngle={250}
              endAngle={-70}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
