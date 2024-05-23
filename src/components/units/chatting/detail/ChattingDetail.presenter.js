import * as S from "./ChattingDetail.styles";
import Image from "next/image";

export default function ChattingDetailUI(props) {
  return (
    <>
      <S.WrapperSideMenu></S.WrapperSideMenu>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={
                props.isSearchOpen ? props.toggleSearch : props.navigateBack
              }
            />
            <S.Title>단톡방 이름</S.Title>
          </S.LeftArrowTitleContainer>
          <S.MenuContainer>
            <S.MenuIcon
              onClick={props.toggleSearch}
              isSearchOpen={props.isSearchOpen}
            >
              <Image
                src="/images/header/search_icon.svg"
                alt="search_icon"
                width={44}
                height={44}
              />
            </S.MenuIcon>
            <S.SearchInput
              isSearchOpen={props.isSearchOpen}
              placeholder="검색어를 입력해주세요"
            />
            <S.MenuIcon onClick={props.toggleSideMenu}>
              <Image
                src="/images/header/bar_menu_icon.svg"
                alt="bar_menu_icon"
                width={44}
                height={44}
              />
            </S.MenuIcon>
          </S.MenuContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperContents>
        <S.NoticeTextBlock>공지사항을 입력해주세요</S.NoticeTextBlock>
      </S.WrapperContents>
      <S.ChatInputWrapper>
        <S.ChatDataAdd>
          <Image
            src="/images/chatting/chatting_add_icon.svg"
            alt="chatting_add_icon"
            width={20}
            height={20}
          />
        </S.ChatDataAdd>
        <S.ChatInputBlock placeholder="채팅 내용을 입력해주세요." />
        <S.ChatInputButton>
          <Image
            src="/images/chatting/chatting_input_arrow.svg"
            alt="chatting_input_arrow"
            width={17}
            height={17}
          />
        </S.ChatInputButton>
      </S.ChatInputWrapper>

      <S.Overlay
        isSideMenuOpen={props.isSideMenuOpen}
        onClick={props.toggleSideMenu}
      />

      <S.SideMenuContainer className={props.isSideMenuOpen ? "open" : ""}>
        <S.SideMenuTitleBlock>
          사진
          <Image
            src="/images/chatting/chatting_right_arrow.svg"
            alt="chatting_right_arrow"
            width={22}
            height={22}
          />
        </S.SideMenuTitleBlock>
      </S.SideMenuContainer>
    </>
  );
}
