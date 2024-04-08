import * as S from "./VolunteerDetailHeader.styles";
import Image from "next/image";

export default function VolunteerDetailHeaderUI(props) {
  return (
    <>
      <S.WrapperHeader
        active={props.isJoinedClikced}
      >
        <S.Blank/>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <S.LeftArrowImg onClick={props.PrevPage}>
              <Image
                src="/images/header/arrow_left_icon.svg"
                alt="left_arrow_icon"
                width={15}
                height={25}
              />
            </S.LeftArrowImg>
            <S.Title>{props.title}</S.Title>
          </S.LeftArrowTitleContainer>
          <S.MenuContainer
            onClick={props.handleMenuClick}
          >
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
            />
          </S.MenuContainer>
        </S.Header>
        <S.MenuBlock
          ref={props.wrapperRef}
          active={props.isMenuClicked}
        >
          <S.Menu>URL 공유하기</S.Menu>
          <S.Report>신고하기</S.Report>
        </S.MenuBlock>
      </S.WrapperHeader>
    </>
  )
}