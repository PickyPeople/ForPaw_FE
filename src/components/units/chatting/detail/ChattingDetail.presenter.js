import Image from "next/image";
import * as S from "./ChattingDetail.styles";

export default function ChattingDetailUI(props) {
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
            <S.Title>단톡방 이름</S.Title>
          </S.LeftArrowTitleContainer>
          <S.MenuContainer>
            <S.MenuIcon>
              <Image
                src="/images/header/search_icon.svg"
                alt="search_icon"
                width={44}
                height={44}
              />
            </S.MenuIcon>
            <S.MenuIcon>
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
    </>
  );
}
