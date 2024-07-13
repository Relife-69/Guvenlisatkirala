import styled from "styled-components";

 export const HeartButton = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: ${({ liked }) => (liked ? 'red' : 'none')};
    stroke: ${({ liked }) => (liked ? 'red' : 'currentColor')};
    transition: fill 0.3s ease;
  }
`;