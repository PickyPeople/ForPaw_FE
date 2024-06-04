import React from "react";
import * as S from "./ChattingDetail.styles";
import Image from "next/image";

export default function ChattingDetailUI(props) {
  return (
    <>
      <S.CoverSideMenu></S.CoverSideMenu>
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
      <S.NoticeTextBlock>공지사항을 입력해주세요</S.NoticeTextBlock>
      <S.WrapperContents>
        {Object.entries(props.chatMsgList).map(([date, messages]) => (
          <React.Fragment key={date}>
            <S.DateTextBlock>
              {`${date.slice(0, 4)}년 
              ${parseInt(date.slice(5, 7))}월 
              ${date.slice(8, 10)}일`}
            </S.DateTextBlock>
            {messages.map((message) => (
              <S.MsgBlock key={message.messageId} isMyMsg={message.isMine}>
                <S.UserImgBlock isMyMsg={message.isMine}>
                  <Image
                    src="/images/commons/user_icon.svg"
                    alt="user_icon"
                    width={40}
                    height={40}
                  />
                </S.UserImgBlock>
                <S.UserInfoBlock isMyMsg={message.isMine}>
                  <S.UserNameText>{message.userName}</S.UserNameText>
                  <S.MsgText isMyMsg={message.isMine}>
                    {message.content}
                  </S.MsgText>
                </S.UserInfoBlock>
                <S.TimeTextBlock isMyMsg={message.isMine}>
                  {message.date.slice(11, 13) > 12
                    ? `오후 ${
                        message.date.slice(11, 13) - 12
                      }${message.date.slice(13, 16)}`
                    : `오전 ${
                        message.date.slice(11, 13) - 0
                      }${message.date.slice(13, 16)}`}
                </S.TimeTextBlock>
              </S.MsgBlock>
            ))}
          </React.Fragment>
        ))}
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
        <S.SideMenuImgContainer>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_1.svg"
              alt="chatting_img_1"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_2.svg"
              alt="chatting_img_2"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_3.svg"
              alt="chatting_img_3"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_4.svg"
              alt="chatting_img_4"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_5.svg"
              alt="chatting_img_5"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_6.svg"
              alt="chatting_img_6"
              width={74}
              height={74}
            />
          </S.ImgBlock>
        </S.SideMenuImgContainer>
        <S.SideMenuTitleBlock>
          파일
          <Image
            src="/images/chatting/chatting_right_arrow.svg"
            alt="chatting_right_arrow"
            width={22}
            height={22}
          />
        </S.SideMenuTitleBlock>
        <S.SideMenuDataContainer>
          <S.DataBlock>
            <S.DataImg></S.DataImg>
            <S.DataInfoBlock>
              <S.DataName>파일명을 입력해주세요.pdf</S.DataName>
              <S.DataSize>16.2 MB | ~2.1</S.DataSize>
            </S.DataInfoBlock>
          </S.DataBlock>
          <S.DataBlock>
            <S.DataImg></S.DataImg>
            <S.DataInfoBlock>
              <S.DataName>파일명을 입력해주세요.pdf</S.DataName>
              <S.DataSize>16.2 MB | ~2.1</S.DataSize>
            </S.DataInfoBlock>
          </S.DataBlock>
          <S.DataBlock>
            <S.DataImg></S.DataImg>
            <S.DataInfoBlock>
              <S.DataName>파일명을 입력해주세요.pdf</S.DataName>
              <S.DataSize>16.2 MB | ~2.1</S.DataSize>
            </S.DataInfoBlock>
          </S.DataBlock>
        </S.SideMenuDataContainer>
        <S.SideMenuTitleBlock>참여인원</S.SideMenuTitleBlock>
        <S.UserContainer>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
        </S.UserContainer>
      </S.SideMenuContainer>
    </>
  );
}
