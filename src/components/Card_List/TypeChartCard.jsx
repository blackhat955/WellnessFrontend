import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

const StatCard = styled.div`
  flex-grow: 1;
  min-width: 290px; 
  padding: 22px; 
  border: 1px solid ${({ theme }) => `${theme.textColor}33`}; // changed theme.text_primary to theme.textColor
  border-radius: 15px; 
  box-shadow: 2px 5px 18px 0px ${({ theme }) => `${theme.primaryColor}2f`}; // adjusted the shadow and color slightly
  display: flex;
  flex-direction: column;
  gap: 8px; 
  @media (max-width: 600px) {
    padding: 18px; 
  }
`;
const Heading = styled.div`
  font-weight: bold; 
  font-size: 18px; 
  color: ${({ theme }) => theme.highlightColor}; 
  @media (max-width: 600px) {
    font-size: 15px; 
  }
`;

const TypeChartCard = ({ stats }) => {
  return (
    <StatCard>
      <Heading>Calories Burned This Week</Heading> // changed text slightly
      {stats?.chartData && (
        <PieChart
          series={[
            {
              data: stats?.chartData,
              innerRadius: 28, 
              outerRadius: 118, 
              paddingAngle: 4, 
              cornerRadius: 4, 
            },
          ]}
          height={280} 
        />
      )}
    </StatCard>
  );
};

export default TypeChartCard;
