import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  z-index: 10;
  padding-bottom: 10px;
  position: relative;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const AdoptPetMenuBlock = styled.div`
  width: 305px;
  height: 43px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 18px;
  margin-right: 40px;
  margin-bottom: 3px;
`;

export const AdoptPetMenuDate = styled.div`
  width: 91px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "date" ? "#ff6636" : "#eeeeee"};
  border-radius: 22px;
  color: ${(props) => (props.sort === "date" ? "#ffffff" : "#000000")};
  cursor: pointer;
`;

export const AdoptPetMenuDogs = styled.div`
  width: 53px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "dogs" ? "#ff6636" : "#eeeeee"};
  color: ${(props) => (props.sort === "dogs" ? "#ffffff" : "#000000")};
  border-radius: 22px;
  cursor: pointer;
`;

export const AdoptPetMenuCats = styled.div`
  width: 76px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "cats" ? "#ff6636" : "#eeeeee"};
  color: ${(props) => (props.sort === "cats" ? "#ffffff" : "#000000")};
  border-radius: 22px;
  cursor: pointer;
`;

export const AdoptPetMenuOthers = styled.div`
  width: 65px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "others" ? "#ff6636" : "#eeeeee"};
  color: ${(props) => (props.sort === "others" ? "#ffffff" : "#000000")};
  border-radius: 22px;
  cursor: pointer;
`;

export const AdoptPet = styled.div`
  width: 344px;
  height: 344px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-shrink: 0;
  position: relative;
  margin-top: 12px;

  :hover {
    cursor: pointer;
  }
`;

export const AdoptLikeToggle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 288px;
`;

export const AdoptInfoBlock = styled.div`
  width: 320px;
  height: 107px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  position: absolute;
  margin-bottom: 12px;
`;

export const AdoptNameGender = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 13px;
  left: 10px;
`;

export const AdoptText = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 48px;
  left: 10px;
`;

export const AdoptBirthAddress = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 77px;
  left: 10px;
`;

export const AdoptLikeBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1px;
  top: 74px;
  left: 235px;
`;

export const AdoptLike = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AdoptViewBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 74px;
  left: 275px;
`;

export const AdoptView = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
