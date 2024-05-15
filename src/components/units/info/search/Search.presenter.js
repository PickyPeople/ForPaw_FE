import * as S from "./Search.styles";
import Image from "next/image";

export default function SearchUI(props) {
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
            <S.Title>검색하기</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperSearch>
        <S.SearchContainer>
          <S.SearchWindow type="text" placeholder="검색어를 입력해주세요" />
          <S.SearchImageContainer>
            <Image
              src="/images/info/search_icon_info.svg"
              alt="search_icon"
              width={31.36}
              height={31.36}
            />
          </S.SearchImageContainer>
          <S.CancelButton>취소</S.CancelButton>
        </S.SearchContainer>
      </S.WrapperSearch>
      <S.WrapperContents>
        <S.SearchContentsContainer>
          <S.SearchContent className="shelters">
            <S.ContentTitle>보호소</S.ContentTitle>
            <S.ContentInfos>
              <S.ContentImageBlock></S.ContentImageBlock>
            </S.ContentInfos>
          </S.SearchContent>
          
          <S.SearchContent className="community"> 

          </S.SearchContent>
          
          <S.SearchContent className="groups">

          </S.SearchContent>
        </S.SearchContentsContainer>
      </S.WrapperContents>
    </>
  )
}