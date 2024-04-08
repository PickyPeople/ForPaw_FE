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

export const MenuContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  position: relative;
  cursor: pointer;
`;

export const MenuBlock = styled.ul`
  width: 127px;
  height: 87px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 42px;
  right: 0;

  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstSubMenu = styled.li`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #dbdbdb;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondSubMenu = styled.li`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const UserContainer = styled.div`
  width: 87%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
`;

export const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 7px;
`;

export const UserNickname = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export const UpdatedTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  margin-top: 3px;
`;

export const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BoardTitle = styled.div`
  width: 90%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 22px;
  margin-left: 25px;
`;

export const BoardText = styled.div`
  width: 80%;
  margin-top: 12px;
  margin-left: 25px;
  font-size: 16px;
  font-weight: 400;
`;

export const BoardImgBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  margin-top: 20px;
  margin-left: 25px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const BoardImg = styled.div`
  width: 224px;
  height: 197px;
  border-radius: 20px;
  margin-right: 20px;
  flex-shrink: 0;
`;

export const BoardInfoBlock = styled.div`
  width: 200px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: 25px;
  gap: 12px;
`;

export const BoardLikes = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const BoardComments = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const BoardShare = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const BoardAdBanner = styled.div`
  width: 390px;
  height: 60px;
  margin-top: 40px;
`;
