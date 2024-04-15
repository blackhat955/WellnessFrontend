import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { counts } from "../assets/utils/data";
import ActivityCard from "../components/Card_List/ActivityCard";
import WeeklyStatsCard from "../components/Card_List/WeeklyStatsCard";
import TypeChartCard from "../components/Card_List/TypeChartCard";
import AddExercise_j from "../components/AddExercise_j";
import ExerciseCard from "../components/Card_List/ExerciseCard";
import { addExerciseRoutine, fetchDashboardStats, fetchExerciseSessions } from "../test_api/index";

const dashboardContainer = styled.div`
  flex-grow: 1;
  fullHeight: 100%;
  display: flex;
  alignItems: center;
  paddingVertical: 24px;
  overflowY: auto;
`;
const dashboardWrapper = styled.div`
  flex: 1;
  maxWidth: 1420px;
  display: flex;
  flexDirection: 'column';
  gap: 24px;
  @media (max-width: 620px) {
    gap: 14px;
  }
`;
const sectionTitle = styled.div`
  paddingHorizontal: 18px;
  fontSize: 24px;
  color: ${({ theme }) => theme.text};
  fontWeight: 500;
`;
const flexibleWrapper = styled.div`
  display: flex;
  flexWrap: 'wrap';
  justifyContent: 'space-between';
  gap: 24px;
  paddingHorizontal: 18px;
  @media (max-width: 620px) {
    gap: 14px;
  }
`;
const sectionContainer = styled.div`
  display: flex;
  flexDirection: 'column';
  paddingHorizontal: 18px;
  gap: 24px;
  @media (max-width: 620px) {
    gap: 14px;
  }
`;
const cardsContainer = styled.div`
  display: flex;
  flexWrap: 'wrap';
  justifyContent: 'center';
  gap: 22px;
  marginBottom: 102px;
  @media (max-width: 620px) {
    gap: 14px;
  }
`;

const ProfessionalDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState();
  const [isAdding, setIsAdding] = useState(false);
  const [todaySessions, setTodaySessions] = useState([]);
  const [exerciseDetails, setExerciseDetails] = useState(`#Arms
-Tricep Dips
-6 setsX12 reps
-35 kg
-12 min`);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    const userToken = localStorage.getItem("user-token");
    await fetchDashboardStats(userToken).then((res) => {
      setDashboardData(res.data);
      console.log(res.data);
      setIsLoading(false);
    });
  };
  const retrieveTodaySessions = async () => {
    setIsLoading(true);
    const userToken = localStorage.getItem("user-token");
    await fetchExerciseSessions(userToken, "").then((res) => {
      setTodaySessions(res?.data?.todaySessions);
      console.log(res.data);
      setIsLoading(false);
    });
  };

  const handleAddExercise = async () => {
    setIsAdding(true);
    const userToken = localStorage.getItem("user-token");
    await addExerciseRoutine(userToken, { exerciseString: exerciseDetails })
      .then((res) => {
        fetchDashboardData();
        retrieveTodaySessions();
        setIsAdding(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetchDashboardData();
    retrieveTodaySessions();
  }, []);
  return (
    <dashboardContainer>
      <dashboardWrapper>
        <sectionTitle>Main Dashboard</sectionTitle>
        <flexibleWrapper>
          {counts.map((stat) => (
            <ActivityCard stat={stat} dashboardData={dashboardData} />
          ))}
        </flexibleWrapper>

        <flexibleWrapper>
          <WeeklyStatsCard dashboardData={dashboardData} />
          <TypeChartCard dashboardData={dashboardData} />
          <AddExercise_j
            exerciseDetails={exerciseDetails}
            setExerciseDetails={setExerciseDetails}
            handleAddExercise={handleAddExercise}
            isAdding={isAdding}
          />
        </flexibleWrapper>

        <sectionContainer>
          <sectionTitle>Today's Exercise Routines</sectionTitle>
          <cardsContainer>
            {todaySessions.map((session) => (
              <ExerciseCard session={session} />
            ))}
          </cardsContainer>
        </sectionContainer>
      </dashboardWrapper>
    </dashboardContainer>
  );
};

export default ProfessionalDashboard;

