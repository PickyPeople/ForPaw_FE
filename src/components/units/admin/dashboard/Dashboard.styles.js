import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const MenuContainer = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuBlock = styled.div`
  width: 12vw;
  height: 21.484vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.488vh;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 3.906vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #F4F4F5;
  }

  padding-left: 15px;
`;

export const MenuImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuTitle = styled.p`
  width: 6.25vw;
  height: 100%;
  font-size: 1.111vw;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 0.347vw;
`;

export const ContentsContainer = styled.div`
  width: 85vw;
  height: 100vh;
  background-color: white;
`;

export const ContentsBlock = styled.div`
  width: 77.986vw;
  height: 63.086vh;
  background-color: beige;
`;

export const Title = styled.div`
  width: 899px;
  height: 68px;
  font-size: 26px;
  font-weight: bold;

  border-bottom: 1px solid #E9ECEF;
`;

export const ContentItems = styled.div`
  width: 899px;
  height: 52px;

  display: flex;
  flex-direction: row;

  border-bottom: 1px solid #E9ECEF;
`;

export const Content = styled.div`
  width: 390px;
  height: 50px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  margin-left: 20px;
`;

export const ContentTitle = styled.div`
  width: 115px;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentCount = styled.div`
  width: 35px;
  height: 100%;
  font-size: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const  GraphContainer = styled.div`
  width: 100%;
  height: 380px;
  border-bottom: 1px solid #E9ECEF;
`;


