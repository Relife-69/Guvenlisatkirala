import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: #eef1f9;
  gap: 10%;
`;
export const CardContain = styled.div`
  padding: 50px;
  max-width: 1400px;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
`;
export const Humburger = styled.div`
  font-size: 50px;
  color: white;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    position: absolute;
    top: 8px;
    left: 20px;
  }
`;

export const ContextContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 50px;
  width: 350px;
`;

export const FirstContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 25px;
  width: 350px;
  min-height: 90px;
  border-radius: 10px;
`;
export const Container = styled.div`
  background-color: white;
  flex-direction: column;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 25px;
  width: 350px;
  min-height: 200px;
  border-radius: 10px;
`;

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7b2cbf;
  width: 120px;
  height: 90px;
  border-radius: 10px;
`;
export const PictureContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f09917;
  width: 120px;
  height: 90px;
  border-radius: 10px;
`;
export const PictureContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  width: 120px;
  height: 90px;
  border-radius: 10px;
`;
export const Picture = styled.img`
  width: 50px;
  height: 50px;
`;
export const Heading = styled.h1`
  font-size: 22px;
  font-weight: 500;
`;

export const HeadingContainer = styled.div`
  width: 350px;
  align-items: center;
  justify-content: start;
  gap: 15px;
  display: flex;
  padding: 15px 0px;
  border-bottom: 1px solid silver;
`;

export const Picture1 = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;

export const Heading1 = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0%;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 350px;
`;
export const TextContainer1 = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  width: 350px;
  padding-bottom: 30px;
`;

export const TextCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TextCon1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9f9;
  border: 1px solid silver;
  padding: 10px 5px;
  border-radius: 5px;
  width: 100px;
`;
export const NumberText = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0%;
  span {
    color: #7b2cbf;
  }
`;
export const Text = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin: 0%;
  span {
    color: #7b2cbf;
  }
`;
