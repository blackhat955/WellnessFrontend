import React from "react";
import styled from "styled-components";

const InfoCard = styled.div`
  flex-grow: 1;
  min-width: 210px; 
  padding: 20px; 
  border: 1px solid ${({ theme }) => theme.textHighlight + 22}; 
  border-radius: 16px; 
  display: flex;
  gap: 8px; 
  box-shadow: 2px 4px 18px 0px ${({ theme }) => theme.primary + 18}; 
`;
const InfoSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 14px; 
  @media (max-width: 600px) {
    gap: 8px; 
  }
`;
const Heading = styled.div`
  font-weight: 600;
  font-size: 18px; 
  color: ${({ theme }) => theme.primaryColor}; 
  @media (max-width: 600px) {
    font-size: 15px; 
  }
`;
const Number = styled.div`
  font-weight: 600;
  font-size: 30px; 
  display: flex;
  align-items: end;
  gap: 10px; 
  color: ${({ theme }) => theme.textHighlight}; 
  @media (max-width: 600px) {
    font-size: 24px; 
  }
`;
const Measurement = styled.div`
  font-size: 15px; 
  margin-bottom: 6px; 
`;
const Percentage = styled.div`
  margin-bottom: 6px; 
  font-weight: 500;
  font-size: 17px; 
  @media (max-width: 600px) {
    font-size: 13px; 
  }

  ${({ isPositive, theme }) =>
    isPositive
      ? `
  color: ${theme.successColor};` 
      : `
  color: ${theme.errorColor};`} 
`;
const Symbol = styled.div`
  height: fit-content;
  padding: 6px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px; 
  ${({ textColor, backgroundColor }) => `
  background: ${backgroundColor};
  color: ${textColor};
  `}
`;

const Description = styled.div`
  font-size: 13px; 
  color: ${({ theme }) => theme.textSecondary + 88}; 
  margin-bottom: 4px; 
  @media (max-width: 600px) {
    font-size: 11px; 
  }
`;

const ActivityCard = ({ metric, info }) => {
  return (
    <InfoCard>
      <InfoSection>
        <Heading>{metric.label}</Heading>
        <Number>
          {info && info[metric.ident].toFixed(2)}
          <Measurement>{metric.measure}</Measurement>
          <Percentage isPositive>(+9%)</Percentage> 
        </Number>
        <Description>{metric.description}</Description>
      </InfoSection>
      <Symbol textColor={metric.colorCode} backgroundColor={metric.bgColor}>
        {metric.symbol}
      </Symbol>
    </InfoCard>
  );
};

export default ActivityCard;
