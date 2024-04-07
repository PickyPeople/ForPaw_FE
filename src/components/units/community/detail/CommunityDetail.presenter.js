import Image from "next/image";
import * as S from "./CommunityDetail.styles";

export default function CommunityDetailUI(props) {
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
            <S.Title>커뮤니티</S.Title>
          </S.LeftArrowTitleContainer>
          <S.MenuContainer
            ref={props.wrapperRef}
            onClick={props.handleMenuClick}
          >
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
            />
            <S.MenuBlock active={props.isMenuClicked}>
              <S.FirstSubMenu>수정하기</S.FirstSubMenu>
              <S.SecondSubMenu>삭제하기</S.SecondSubMenu>
            </S.MenuBlock>
          </S.MenuContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperContents></S.WrapperContents>
    </>
  );
}
