import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 100px 0px;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  /* gap: 60px; */
  background-color: #eef1f9;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap-reverse;
`;
export const InputfieldContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  max-width: 400px;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const SelectionContainer = styled.div`
  max-width: 970px;
  padding: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  border-radius: 8px;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Selection = styled.div`
  width: 380px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  background-color: white;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Select = styled.select`
  padding: 10px;
  width: 330px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 14.63px;
  margin: 0%;
  appearance: none;
  gap: 10px;
  border-radius: 6px;
  border: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Option = styled.option`
  display: flex;
  /* height: 24px; */
  padding: 10px;
  align-items: center;
  justify-content: center;
  height: 44px;
`;
export const Drag = styled.div`
  right: 0%;
  width: 50px;
  position: absolute;
  height: 50px;
  border-radius: 0px 5px 5px 0px;
  color: white;
  background-color: #7b2cbf;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;
export const Label = styled.label`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  color: black;
  background-color: white;
  border: 2px solid silver;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #7b2cbf;
    border: 2px solid #7b2cbf;
    color: white;
  }
  &:focus {
    background-color: #7b2cbf;
    border: 2px solid #7b2cbf;
    color: white;
  }
  &:active {
    background-color: #7b2cbf;
    border: 2px solid #7b2cbf;
    color: white;
  }
`;
export const ButtonIcon = styled.p`
  font-size: 20px;
  margin: 0%;
`;
export const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  margin: 0%;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 50px;
  background-color: white;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const CitySearchBar = styled.input`
  border: none;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 330px;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const SearchIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #7b2cbf;
  border: none;
  border-radius: 0px 7px 7px 0px;
  color: white;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchResultContainer = styled.div`
  width: 380px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 8px #ddd;
  max-height: 300px;
  overflow-y: scroll;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Search = styled.div`
  display: flex;
  min-height: 50px;
  flex-direction: column;
  gap: 10px;
`;

export const SearchResult = styled.div`
  padding: 10px 20px;
  &:hover {
    background-color: #7b2cbf;
    color: white;
  }
`;

export const SubmitButton = styled.button`
  width: 380px;
  height: 50px;
  border-radius: 7px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  background-color: #7b2cbf;
  border: none;
  color: white;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #7b2cbf;
    border: 2px solid #7b2cbf;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const OutputContainer = styled.div`
  width: 531px;
  min-height: 850px;
  border-radius: 15px;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 18px;
  padding: 30px;
  margin: 50px 0px;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const InputContainerPicture = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  flex-wrap: wrap;
  width: 420px;
  flex-direction: row;
  gap: 10px;
`;
export const InputPictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 460px;
  min-height: 214px;
  border-radius: 6px;
  border: 2px solid black;
  cursor: pointer;
  padding: 30px 0px;
  background-color: #d9d9d9;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const InputPicture = styled.input``;
export const InputIcon = styled.div`
  font-size: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InputPictures = styled.div``;
export const InputImage = styled.img`
  width: 200px;
  height: 150px;
  display: flex;
`;
export const InputText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
export const OuterContainerHeading = styled.h1`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: start;
  justify-content: start;
  margin: 0%;
`;
export const UpperContainer = styled.div`
  width: 460px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const DisplayContainer = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0%;
`;
export const PictureEdit = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin: 0%;
  max-width: 460px;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const PictureTitle = styled.span``;
export const Picturedeleat = styled.p`
  font-size: 16px;
  margin: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PriceContrainer = styled.div`
  width: 460px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Price = styled.input`
  width: 90px;
  font-size: 18px;
  font-weight: 500;
  margin: 0%;
  border-radius: 8px;
  padding-left: 8px;
  background-color: #d9d9d9;
  appearance: none;
  border: none;
  &:active {
    outline: none;
    border: none;
    appearance: none;
  }
  &:focus {
    outline: none;
    border: none;
    appearance: none;
  }
`;
export const Type = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0%;
`;
export const BuildingComponetsContainer = styled.div`
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const BuildingComponet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const ComponentsIcon = styled.img`
  width: 16px;
  height: 13px;
`;
export const ComponentsText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0%;
`;
export const ProperityTitle = styled.h1`
  width: 460px;
  font-size: 16px;
  font-weight: 400;
  margin: 0%;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const TitleDisplay = styled.textarea`
  width: 420px;
  min-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0%;
  padding: 10px 20px;
  border-radius: 12px;
  background-color: #d9d9d9;
  appearance: none;
  border: none;
  &:active {
    outline: none;
    border: none;
    appearance: none;
  }
  &:focus {
    outline: none;
    border: none;
    appearance: none;
  }
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Title = styled.h1`
  width: 460px;
  font-size: 18px;
  font-weight: 500;
  margin: 0%;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Description = styled.h1`
  width: 460px;
  font-size: 12px;
  font-weight: 400;
  margin: 0%;

  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Shadule = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Time = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: start;
`;
export const HeadingTime = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 0%;
`;
export const DescriptionTime = styled.h1`
  font-size: 12px;
  font-weight: 400;
  margin: 0%;
`;
export const FeatureContainer = styled.div`
  width: 460px;
  min-height: 100px;
  border-radius: 6px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Feature = styled.div`
  width: 113px;
  min-height: 70px;
  background-color: #eef1f9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const FeatureIcon = styled.div`
  font-size: 45px;
`;
export const FeatureText = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0%;
`;
export const InputfieldContainer2 = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  max-width: 580px;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 600px) {
    width: 390px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const HeadingInput2 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #7b2cbf;
`;

export const OptionDiv = styled.div`
  width: 580px;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: start;
  background-color: white;
  @media (max-width: 600px) {
    width: 390px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const InputOption = styled.input`
  padding: 0px 70px 0px 40px;
  width: 530px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 14.63px;
  margin: 0%;
  appearance: none;
  gap: 10px;
  border-radius: 6px;
  border: none;
  outline: none;
  @media (max-width: 600px) {
    width: 390px;
  }
  @media (max-width: 400px) {
    width: 240px;
    padding: 0px 0px 0px 10px;
  }
`;
export const OptionDrag = styled.div`
  right: 0%;
  width: 50px;
  position: absolute;
  height: 50px;
  border-radius: 0px 5px 5px 0px;
  color: white;
  background-color: #7b2cbf;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  width: 560px;
  min-height: 85px;
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  gap: 20px;
  flex-wrap: wrap;
  background-color: white;
  color: black;
  padding: 10px;
  justify-content: start;
  align-items: center;
  @media (max-width: 600px) {
    width: 390px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const OptionLabel = styled.label`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionInput = styled.input``;

export const OptionHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 580px;
  min-height: 50px;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 600px) {
    width: 390px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const Pricetag = styled.button`
  width: 46px;
  height: 30px;
  border-radius: 2px;
  background-color: red;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0%;
`;
export const PriceShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;
export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const InputCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
