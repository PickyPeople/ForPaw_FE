import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 231px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow-y: auto;
  background-color: white;
  border-left: 1px solid black;
  border-right: 1px solid black;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const VolunteerRegionMenuBlock = styled.div`
  width: 240px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 15px;
  margin-right: 100px;
`;

export const VolunteerRegionMenu = styled.select`
  width: 115px;
  height: 44px;
  border-radius: 22px;
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  padding-left: 15px;
  position: relative;

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const VolunteerRegionMenuSub = styled.select`
  width: 115px;
  height: 44px;
  border-radius: 22px;
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  padding-left: 15px;

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const MenuArrowBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 70px;
`;

export const MenuSubArrowBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 195px;
`;

export const VolunteerNewTitle = styled.div`
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 10px;
`;

export const VolunteerNewBlock = styled.div`
  width: 390px;
  height: 233px;
  /* max-width: 390px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  padding: 0 20px;
  overflow-x: auto;
  flex-shrink: 0;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const VolunteerNew = styled.div`
  width: 224px;
  height: 226px;
  border-radius: 20px;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  flex-shrink: 0;
  position: relative;
`;

export const VolunteerNewImg = styled.div`
  width: 208px;
  height: 120px;
  border-radius: 20px;
  margin-top: 8px;
`;

export const VolunteerNewName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
  margin-right: 55px;
`;

export const VolunteerNewInfoBlock = styled.div`
  width: 194px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-right: 13px;
`;

export const VolunteerNewCategory = styled.div`
  width: 105px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #240d05;
  border-radius: 15px;
`;

export const VolunteerNewRegion = styled.div`
  width: 85px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #240d05;
  border-radius: 15px;
`;

export const VolunteerNewAlarmBlock = styled.div`
  width: 162px;
  height: 44px;
  line-height: 44px;
  border: 2px solid #ff6636;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-shrink: 0;
`;

export const VolunteerNewAlarmIcon = styled.div`
  width: 22px;
  height: 16px;
  margin-bottom: 26px;
`;

export const VolunteerRegionTitle = styled.div`
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  margin-top: 40px;
  margin-left: 10px;
`;

export const VolunteerBlock = styled.div`
  width: 344px;
  height: 354px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  flex-shrink: 0;
`;

export const VolunteerImg = styled.div`
  width: 324px;
  height: 183px;
  border-radius: 10px;
  margin-top: 8px;
  position: relative;
`;

export const VolunteerLikeBlock = styled.div`
  width: 66px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  gap: 4px;
  top: 145px;
  left: 8px;
`;

export const VolunteerTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-right: 145px;
  margin-top: 15px;
`;

export const VolunteerText = styled.div`
  width: 310px;
  height: 34px;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  margin-right: 10px;
`;

export const VolunteerInfoBlock = styled.div`
  width: 288px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-right: 35px;
`;

export const VolunteerNumberOfMember = styled.div`
  width: 88px;
  height: 30px;
  line-height: 30px;
  background-color: #ff6636;
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

export const VolunteerCategory = styled.div`
  width: 106px;
  height: 30px;
  line-height: 30px;
  background-color: #e4e4e4;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
`;

export const VolunteerRegion = styled.div`
  width: 86px;
  height: 30px;
  line-height: 30px;
  background-color: #e4e4e4;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
`;

export const VolunteerAddIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6636;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 12%;
  right: calc(50% - 172px);
`;
