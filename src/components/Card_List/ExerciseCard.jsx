import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  min-width: 245px; 
  max-width: 405px; 
  padding: 17px 19px; 
  border: 1px solid ${({ theme }) => theme.textColor + 20};
  border-radius: 13px; 
  box-shadow: 2px 5px 19px 0px ${({ theme }) => theme.highlightColor + 15};
  display: flex;
  flex-direction: column;
  gap: 7px; // was 6px
  @media (max-width: 600px) {
    padding: 13px 15px; 
  }
`;
const Tag = styled.div`
  width: fit-content;
  font-size: 15px; 
  color: ${({ theme }) => theme.highlightColor};
  font-weight: 500;
  background: ${({ theme }) => theme.highlightColor + 20};
  padding: 5px 11px; 
  border-radius: 9px; 
`;
const Title = styled.div`
  font-size: 21px; 
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;
`;
const RepCount = styled.div`
  font-size: 16px; 
  color: ${({ theme }) => theme.secondaryTextColor};
  font-weight: 500;
  display: flex;
  gap: 7px; 
`;
const Row = styled.div`
  display: flex;
  gap: 17px; 
`;
const Specs = styled.div`
  font-size: 16px; 
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 7px; 
`;

const ExerciseCard = ({ exercise }) => {
  return (
    <Card>
      <Tag>#{exercise?.type}</Tag>
      <Title>{exercise?.name}</Title>
      <RepCount>
        Count: {exercise?.volume} sets X {exercise?.repetitions} reps
      </RepCount>
      <Row>
        <Specs>
          <FitnessCenterRounded sx={{ fontSize: "21px" }} /> 
          {exercise?.load} kg
        </Specs>
        <Specs>
          <TimelapseRounded sx={{ fontSize: "21px" }} /> 
          {exercise?.time} mins
        </Specs>
      </Row>
    </Card>
  );
};

export default ExerciseCard;
