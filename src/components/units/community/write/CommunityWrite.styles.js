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

export const WrapperWrite = styled.div`
  width: 390px;
  height: calc(100vh - 195px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  flex-shrink: 0;
  overflow-y: auto;

  /* Chrome, Safari 등 */
  &::-webkit-scrollbar {
    display: none; /* 스크롤바를 숨깁니다 */
  }

  /* Firefox */
  scrollbar-width: none; /* Firefox에서 스크롤바를 숨깁니다 */
`;

export const CategoryInput = styled.input`
  width: 342px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 15px;
  color: #bea597;
  flex-shrink: 0;

  ::placeholder {
    color: #bea597;
  }
`;

export const TitleInput = styled.input`
  width: 342px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 15px;
  color: #bea597;
  flex-shrink: 0;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const TextInput = styled.textarea`
  width: 342px;
  height: 160px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px 0px 10px 12px;
  margin-top: 15px;
  color: #bea597;
  overflow-y: auto;
  resize: none;
  flex-shrink: 0;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }

  /* Chrome, Safari 등 */
  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0); /* 스크롤바 뒷 배경을 투명 처리한다 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bea597; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 처리 */
    border: 3px solid #fef8f2; /* 스크롤바 외곽선(선택사항) */
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* Firefox */
  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: #bea597 rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const PhotoWrapper = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
`;

export const PhotoTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px; /* 사진 간의 간격 */

  & > div {
    flex: 1 0 30%; /* flex-basis를 30%로 설정하여 가로로 3개씩 나열 */
    max-width: 104px; /* PhotoAddBox와 동일한 너비 설정 */
  }
`;

export const PhotoAddBox = styled.div`
  width: 104px;
  height: 104px;
  background-color: #fef8f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const AddedPhotoBlock = styled.div`
  width: 104px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const PhotoBox = styled.div`
  width: 104px;
  height: 104px;
  background-color: #fef8f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const PhotoDeleteButton = styled.button`
  width: 63px;
  height: 29px;
  line-height: 29px;
  border: 1px solid #ff5353;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  color: #ff5353;
  background-color: #ffffff;
`;

export const SubmitButtonWrapper = styled.div`
  width: 390px;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SubmitButton = styled.button`
  color: #ffffff;
  background-color: #ff6636;
`;
