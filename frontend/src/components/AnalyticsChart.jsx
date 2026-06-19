import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

function AnalyticsChart({ data }) {
  const colors = ["#3b82f6", "#8b5cf6"];

  return (
    <div
      style={{
        height: 340,
        background: "#1e293b",
        borderRadius: "20px",
        padding: "20px",
        border: "1px solid #334155",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          style={{
            background: "transparent",
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
            opacity={0.3}
          />

          <XAxis
            dataKey="name"
            stroke="#cbd5e1"
            tick={{ fill: "#cbd5e1" }}
          />

          <YAxis
            stroke="#cbd5e1"
            tick={{ fill: "#cbd5e1" }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
            labelStyle={{
              color: "#ffffff",
              fontWeight: "bold",
            }}
            itemStyle={{
              color: "#ffffff",
              fontWeight: "600",
            }}
          />

          <Bar
            dataKey="value"
            radius={[12, 12, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;