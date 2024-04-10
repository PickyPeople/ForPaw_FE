import * as S from "./CommunityWrite.styles";
import Image from "next/image";

export default function CommunityWriteUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>{props.title}</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperWrite>
        <S.CategoryInput
          type="text"
          placeholder={props.category}
          disabled
        ></S.CategoryInput>
        <S.TitleInput type="text" placeholder="제목을 작성해주세요." />
        <S.TextInput type="text" placeholder="내용을 작성해주세요." />
        <S.PhotoWrapper>
          <S.PhotoTitle>사진 첨부</S.PhotoTitle>
          <S.PhotoContainer>
            {props.photos.map((photo, index) => (
              <S.AddedPhotoBlock>
                <S.PhotoBox key={index}>
                  <span>{photo}</span>
                </S.PhotoBox>
                <S.PhotoDeleteButton onClick={() => props.deletePhoto(index)}>
                  삭제
                </S.PhotoDeleteButton>
              </S.AddedPhotoBlock>
            ))}
            {!props.isPhotoLimitReached && ( // 사진 개수 제한에 도달하지 않았을 때만 PhotoAddBox 렌더링
              <S.PhotoAddBox onClick={props.addPhoto}>
                <Image
                  src="/images/community/photo_add.svg"
                  alt="photo_add"
                  width={29.12}
                  height={29.12}
                />
              </S.PhotoAddBox>
            )}
          </S.PhotoContainer>
        </S.PhotoWrapper>
      </S.WrapperWrite>
      <S.SubmitButtonWrapper>
        <S.SubmitButton>게시글 등록</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </>
  );
}
