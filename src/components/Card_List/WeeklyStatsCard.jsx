import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";

const StatContainer = styled.div`
  flex-grow: 1;
  min-width: 285px;
  padding: 22px;
  border: 1px solid ${({ theme }) => `${theme.textColorPrimary}29`};
  border-radius: 12px;
  box-shadow: 2px 5px 18px 0px ${({ theme }) => `${theme.mainColor}1f`};
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  @media (max-width: 620px) {
    padding: 18px;
  }
`;
const Heading = styled.div`
  font-weight: 500;
  font-size: 17px;
  color: ${({ theme }) => theme.mainColor};
  @media (max-width: 620px) {
    font-size: 15px;
  }
`;

const WeeklyStatsCard = ({ stats }) => {
  return (
    <StatContainer>
      <Heading>Weekly Calories Summary</Heading>
      {stats?.weeklyCaloriesBurnt && (
        <BarChart
          xAxis={[
            { scaleType: "band", data: stats?.weeklyCaloriesBurnt?.weekLabels },
          ]}
          series={[{ data: stats?.weeklyCaloriesBurnt?.burntCalories }]}
          height={280}
        />
      )}
    </StatContainer>
  );
};

export default WeeklyStatsCard;
