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
        <S.SearchContentsContainer /*검색내용의 전체 길이*/>
          <S.SearchContent className="shelters" /*보호소 검색 결과*/>
            <S.ContentTitle>보호소</S.ContentTitle>
            <S.ContentBlocks>
              <S.ContentBlock>
                <S.ImageContainer>

                </S.ImageContainer>
                <S.ContentInfos>
                  <S.ContentName>보호소 이름 적기</S.ContentName>
                  <S.ContentDetail>
                    계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는
                  </S.ContentDetail>
                </S.ContentInfos>
              </S.ContentBlock>
              <S.BorderLine />
            </S.ContentBlocks>
          </S.SearchContent>
          <S.ReqInfosBtn>더보기</S.ReqInfosBtn>
          <S.SearchContent className="community">
            <S.ContentTitle>커뮤니티</S.ContentTitle>
            <S.ContentBlocks>
              <S.ContentBlock>
                <S.ImageContainer>

                </S.ImageContainer>
                <S.ContentInfos>
                  <S.ContentName>보호소 이름 적기</S.ContentName>
                  <S.ContentDetail>
                    계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는
                  </S.ContentDetail>
                </S.ContentInfos>
              </S.ContentBlock>
              <S.BorderLine />
            </S.ContentBlocks>
          </S.SearchContent>
          <S.ReqInfosBtn>더보기</S.ReqInfosBtn>
          <S.SearchContent className="groups">
            <S.ContentTitle>모임 리스트</S.ContentTitle>
            <S.ContentBlocks>
              <S.ContentBlock>
                <S.ImageContainer>

                </S.ImageContainer>
                <S.ContentInfos>
                  <S.ContentName>보호소 이름 적기</S.ContentName>
                  <S.ContentDetail>
                    계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는
                  </S.ContentDetail>
                </S.ContentInfos>
              </S.ContentBlock>
              <S.BorderLine />
            </S.ContentBlocks>
          </S.SearchContent>
          <S.ReqInfosBtn>더보기</S.ReqInfosBtn>
        </S.SearchContentsContainer>
      </S.WrapperContents>
    </>
  )
}