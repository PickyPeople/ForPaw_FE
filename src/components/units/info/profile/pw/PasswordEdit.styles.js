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
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  /* opacity: 0; */
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px 4px;
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

export const WrapperPasswordEdit = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  overflow-y: auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const PasswordEditContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const EditTextBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const EditTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
`;

export const PasswordInput = styled.input`
  width: 342px;
  height: 60px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 10px;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const ConfrimMessageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ConfirmMessage = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #9ac8ff;
  margin-top: 5px;
  margin-left: 5px;
`;

export const PasswordEditButton = styled.button`
  background-color: #ff6636;
  color: white;
  margin-top: 300px;
`;