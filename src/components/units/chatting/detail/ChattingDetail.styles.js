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
  width: 93px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 3px;
`;

export const MenuIcon = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  img {
    cursor: pointer;
  }
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

export const NoticeTextBlock = styled.div`
  width: 390px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  background-color: #f3f3f3;
  font-size: 20px;
  font-weight: 400;
  padding-left: 20px;
`;

export const ChatInputWrapper = styled.div`
  width: 390px;
  height: 84px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  padding: 7px 15px 0 15px;
  border-top: 1px solid #dbdbdb;
  background-color: white;
  position: relative;
  z-index: 10;
`;

export const ChatDataAdd = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ff6636;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ChatInputBlock = styled.input`
  width: 232px;
  height: 44px;
  background-color: #f6f6f6;
  border: 2px solid transparent;
  outline: none;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 300;
  padding-left: 18px;

  ::placeholder {
    color: #888;
  }

  :focus {
    border: 2px solid black;
    color: #888;
  }
`;

export const ChatInputButton = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #272727;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
