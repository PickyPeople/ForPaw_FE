import styled from "@emotion/styled";

export const CoverSideMenu = styled.div`
  width: 300px;
  height: 100%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: calc(50% + 195px);
  z-index: 102;
`;

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
  cursor: pointer;
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
  cursor: pointer;
`;

export const Overlay = styled.div`
  display: ${({ isSideMenuOpen }) => (isSideMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: opacity 0.6s ease-in-out;
`;

export const SearchInput = styled.input`
  height: 50px;
  background-color: #fff;
  border: 2px solid transparent;
  outline: none;
  font-size: 20px;
  font-weight: 300;
  position: absolute;
  top: -5px;
  right: 50px;

  ::placeholder {
    color: #888;
  }

  :focus {
    color: #888;
  }

  width: ${({ isSearchOpen }) => (isSearchOpen ? "270px" : "0px")};
  transition: width 0.4s ease;
`;

export const SideMenuContainer = styled.div`
  z-index: 101;
  border-radius: 20px 0 0 20px;
  background-color: #fff;
  height: 100%;
  width: 293px;
  top: 0;
  right: calc(50% - 195px);
  transform: translateX(293px);
  position: fixed;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;

  &.open {
    transform: translateX(0);
  }
`;

export const SideMenuTitleBlock = styled.div`
  width: 255px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-left: 5px;
`;

export const SideMenuImgContainer = styled.div`
  width: 255px;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImgBlock = styled.div`
  width: 74px;
  height: 74px;
`;

export const SideMenuDataContainer = styled.div`
  width: 254px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DataBlock = styled.div`
  width: 254px;
  height: 53px;
  border-radius: 15px;
  background-color: #f6f6f6;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DataImg = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 12px;
  background-color: #747474;
  margin-right: 18px;
`;

export const DataInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DataName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const DataSize = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #7b7b7b;
`;

export const UserContainer = styled.div`
  width: 255px;
  height: calc(100% - 580px);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* 하단 그라데이션 추가 */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to top, white, rgba(255, 255, 255, 0));
    pointer-events: none; /* 가상 요소가 클릭 등의 이벤트를 방해하지 않도록 설정 */
    border-bottom-left-radius: 20px;
  }
`;

export const UserBlock = styled.div`
  width: 255px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 8px;
`;

export const UserImg = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 7px 0 5px;
`;

export const UserName = styled.div`
  font-size: 12px;
  font-weight: 700;
`;
