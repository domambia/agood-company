import React from "react";
import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

const SkeletonWrapper = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
}>`
  display: inline-block;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1em"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  animation: ${shimmerAnimation} 1.5s infinite ease-in-out;
`;

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius }) => {
  return (
    <SkeletonWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default Skeleton;
