import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colors } from "../../shared/colors";

const Chart = ({aspect }) => {
  const data = [
    {
      name: "Jan",
      This_Year: 1,
      Last_Year: 2,
    },
    {
      name: "Feb",
      This_Year: 10,
      Last_Year: 0,
    },
    {
      name: "Mar",
      This_Year: 30,
      Last_Year: 10,
    },
    {
      name: "Apr",
      This_Year: 5,
      Last_Year: 20,
    },
    {
      name: "May",
      This_Year: 60,
      Last_Year: 40,
    },
    {
      name: "jun",
      This_Year: 20,
      Last_Year: 30,
    },
    {
      name: "Jul",
      This_Year: 40,
      Last_Year: 20,
    },
    {
      name: "Aug",
      This_Year: 15,
      Last_Year: 10,
    },
  ];
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="This_Year" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="This_Year" stroke="#0093DB" />
          <Line type="monotone" dataKey="Last_Year" stroke="#858585" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
const ChartContainer = styled.section`
  width: 100%;
  background-color: ${colors.lightgray};
  margin-top: 10px;

  ${"" /* -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47); */}
  ${"" /* box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47); */}
   
    border-radius: 10px;
`;
