import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  height: 912px;
  background-color: white;
`;

export const ProgressBarBlock = styled.div`
  width: 100%;
  height: 3px;
  background-color: #DBDBDB;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
    width: 100%;
    height: 3px;
    appearance: none;
    
    &::-webkit-progress-bar {
      background-color: #DBDBDB; 
    }

    &::-webkit-progress-value {
      background-color: #FF6636; 
    }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 719px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoBlock = styled.div`
  width: 344px;
  height: 652px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InfoTitleItem = styled.div`
  width: 100%;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const InfoContentProfileContainer = styled.div`
  width: 344px;
  height: 132px;
  margin-top: 24px;
`;

export const InfoTitleProfile = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600;
`;

export const SetProfileBlock = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 8px;
  cursor: pointer;
`;

export const SetProfileItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: #FEF8F2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoNickNameContainer = styled.div`
  width: 342px;
  height: 90px;
  margin-top: 24px;
`;

export const InfoTitleNickName = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600; 
`;

export const SetNickName = styled.input`
  width: 342px;
  height: 60px;
  border-radius: 10px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-left: 15px;
  margin-top: 8px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

export const CheckNickNameBlock = styled.div`
  width: 344px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const AvailableNickName = styled.p`
  width: 167px;
  height: 17px;
  font-size: 12px;
  color: #C6C6C6;
`;

export const CheckNickNameBtn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
`;

export const InfoActiveLocationContainer = styled.div`
  width: 344px;
  height: 160px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  position: relative;
`; 

export const InfoTitleActiveLocation = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600; 
`;

export const BigSelectWrap = styled.div`
  width: 344px;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  position: relative;
  margin-top: 8px;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  color: #BEA597;
  cursor: pointer;
  position: absolute;

  z-index: 1;
  

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }

  option {
    background-color: #FEF8F2;
    color: black;
  }

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const SelectArrow = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 305px;
  top: 18px;

  position: absolute;
  z-index: 0;
`;

export const SelectRegionBlock = styled.div`
  margin-top: 8px;
  width: 344px;
  height: 60px;
  
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const SmallSelectBlock = styled.div`
  width: 164px;
  height: 60px;

  background-color: #FEF8F2;
  border-radius: 10px;
  position: relative;

  z-index: 1;
`;

export const Arrow2Img = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 125px;
  top: 19px;
  
  z-index: 0;
`;
/*버튼 css */
export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
