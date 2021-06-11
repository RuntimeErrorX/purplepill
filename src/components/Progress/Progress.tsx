import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import ProgressMoonWrapper from "./ProgressMoonWrapper";
import { ProgressMoon } from "../Svg";
import { ProgressProps } from "./types";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({
  primaryStep = 0,
  secondaryStep = null,
  showProgressMoon = false,
}) => {
  return (
    <StyledProgress>
      {showProgressMoon && (
        <ProgressMoonWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
          <ProgressMoon />
        </ProgressMoonWrapper>
      )}
      <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
      {secondaryStep ? (
        <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} />
      ) : null}
    </StyledProgress>
  );
};

export default Progress;
