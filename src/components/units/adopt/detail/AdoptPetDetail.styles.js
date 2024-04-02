import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
  /* opacity: 0; */
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 23px;
  padding-bottom: 1px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const WrapperPetDetail = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const PetImgBlock = styled.div`
  width: 390px;
  height: 381px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  flex-shrink: 0;
`;

export const AdoptLikeToggle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  /* backdrop-filter: blur(10px); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 318px;
  left: 323px;
`;

export const PetInfoBlock = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  flex-shrink: 0;
`;

export const PetNameGender = styled.div`
  font-size: 28px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 5px;
`;

export const PetGenderIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-bottom: 2px;
`;

export const PetRegionAge = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #707070;
  margin-left: 25px;
`;

export const PetInfoIconBlock = styled.div`
  width: 390px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  flex-shrink: 0;
`;

export const PetPersonalityIcon = styled.div`
  /* width: 63px; */
  height: 30px;
  background-color: #ffd645;
  border-radius: 15px;
  padding: 0 16px;
  margin-left: 20px;
  margin-right: 5px;
`;

export const PetNeuterIcon = styled.div`
  /* width: 63px; */
  height: 30px;
  background-color: ${(props) => (props.neuter == "Y" ? "#ffda93" : "#eeeeee")};
  border-radius: 15px;
  padding: 0 16px;
  margin-right: 5px;
`;

export const PetBreedIcon = styled.div`
  /* width: 73px; */
  height: 30px;
  background-color: #aafff0;
  border-radius: 15px;
  padding: 0 16px;
  margin-right: 5px;
`;

export const PetWeightIcon = styled.div`
  /* width: 59px; */
  height: 30px;
  background-color: #d3ffa7;
  border-radius: 15px;
  padding: 0 16px;
`;

export const PetContentTitle = styled.div`
  width: 350px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 35px;
`;

export const PetContentText = styled.div`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 12px;
`;

export const PetAdoptionPeriod = styled.div`
  width: 350px;
  font-size: 12px;
  font-weight: 300;
  color: #707070;
  margin-top: 20px;
`;

export const PetAdoptionButton = styled.button`
  background-color: #ff6636;
  color: white;
  margin-top: 20px;

  :hover {
    cursor: pointer;
  }
`;
