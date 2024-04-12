import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const ExerciseCardWrapper = styled.section`
  flex-grow: 1;
  min-width: 260px;
  max-width: 410px;
  padding: 20px 22px;
  border: 1px solid ${({ theme }) => theme.textHighlight + 25};
  border-radius: 16px;
  box-shadow: 2px 7px 22px 0px ${({ theme }) => theme.backgroundHighlight + 20};
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  @media (max-width: 620px) {
    padding: 15px 18px;
  }
`;

const ActivityLabel = styled.span`
  width: auto;
  font-size: 15px;
  color: ${({ theme }) => theme.backgroundHighlight};
  font-weight: 500;
  background-color: ${({ theme }) => theme.backgroundHighlight + 25};
  padding: 6px 12px;
  border-radius: 10px;
`;

const ExerciseTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.textHighlight};
  font-weight: 700;
`;

const Repetitions = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;
  display: flex;
  gap: 8px;
`;

const RowFlex = styled.div`
  display: flex;
  gap: 18px;
`;

const ExerciseDetails = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textHighlight};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WorkoutCard = ({ workout }) => {
  return (
    <ExerciseCardWrapper>
      <ActivityLabel>#{workout?.category}</ActivityLabel>
      <ExerciseTitle>{workout?.workoutName}</ExerciseTitle>
      <Repetitions>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </Repetitions>
      <RowFlex>
        <ExerciseDetails>
          <FitnessCenterRounded sx={{ fontSize: "21px" }} />
          {workout?.weight} kg
        </ExerciseDetails>
        <ExerciseDetails>
          <TimelapseRounded sx={{ fontSize: "21px" }} />
          {workout?.duration} mins
        </ExerciseDetails>
      </RowFlex>
    </ExerciseCardWrapper>
  );
};

export default WorkoutCard;