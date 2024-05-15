import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 163px);
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

export const WrapperSearch = styled.div`
  width: 390px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const SearchContainer = styled.div`
  width: 390px;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

export const SearchWindow = styled.input`
  width: 253px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 50px;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const SearchImageContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 37px;
  top: 30px;
`;

export const CancelButton = styled.button`
  width: 73px;
  height: 44px;
  line-height: 44px;
  background-color: #240d05;
  border: none;
  border-radius: 22px;
  font-size: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

export const SearchContentsContainer = styled.div`
  width: 390px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const SearchContent = styled.div`
  width: 342px;
  height: 374px;
  background-color: aquamarine;
  flex-shrink: 0;
  margin-top: 24px;
`;

export const ContentTitle = styled.p`
  width: 100%;
  height: 36px;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const ContentInfos = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
`;

export const ContentImageBlock = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 10px;
  background-color: #D9D9D9;
`;