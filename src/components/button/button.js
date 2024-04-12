import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
//jkb2


const StyledInteractiveArea = styled.div`
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: auto;
  padding: 14px 24px;
  box-shadow: 2px 18px 30px -5px ${({ theme }) => `${theme.mainColor}66`};
  border: 2px solid ${({ theme }) => theme.mainColor};
  @media (max-width: 768px) {
    padding: 10px 16px;
  }

  ${({ variant, theme }) =>
    variant === 'alternative' &&
    `
      background-color: ${theme.alternativeColor};
      border-color: ${theme.alternativeColor};
    `}
  
  ${({ variant, theme }) =>
    variant !== 'alternative' &&
    `
      background-color: ${theme.mainColor};
    `}
  
  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
    `}

  ${({ grow }) =>
    grow &&
    `
      flex-grow: 1;
    `}
  
  ${({ compact }) =>
    compact &&
    `
      padding: 8px 20px;
    `}

  ${({ noOutline, theme }) =>
    noOutline &&
    `
      background-color: transparent;
      color: ${theme.mainColor};
      box-shadow: none;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
      width: 100%;
    `}
`;

const InteractiveButton = ({
  label,
  loading,
  disabled,
  endIcon,
  startIcon,
  variant,
  handlePress,
  grow,
  compact,
  noOutline,
  fullWidth,
}) => {
  return (
    <StyledInteractiveArea
      onClick={() => !disabled && !loading && handlePress()}
      disabled={disabled}
      variant={variant}
      loading={loading}
      grow={grow}
      compact={compact}
      noOutline={noOutline}
      fullWidth={fullWidth}
    >
      {loading && <CircularProgress size="20px" sx={{ color: 'inherit' }} />}
      {startIcon && startIcon}
      {label}
      {loading && <span>...</span>}
      {endIcon && endIcon}
    </StyledInteractiveArea>
  );
};

export default InteractiveButton;
