import styled from "styled-components";

const MainContainer = styled.div`
  padding: 20px;
  background-color: #eef1f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 30px;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ProjectsHeading = styled.h1`
  font-weight: 600;
  size: 28px;
  color: #7b2cbf;
`;
const NOProjects = styled.p`
  font-weight: 500;
  size: 16px;
`;

export { MainContainer, TextContainer, ProjectsHeading, NOProjects };
