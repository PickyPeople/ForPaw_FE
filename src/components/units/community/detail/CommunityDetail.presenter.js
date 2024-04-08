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
      <S.WrapperContents>
        <S.UserContainer>
          <S.UserPhoto>
            <Image
              src="/images/header/profile_icon.svg"
              alt="profile_icon"
              width={44}
              height={44}
            />
          </S.UserPhoto>
          <S.UserInfoBlock>
            <S.UserNickname>닉네임입력</S.UserNickname>
            <S.UpdatedTime>3시간 전</S.UpdatedTime>
          </S.UserInfoBlock>
        </S.UserContainer>
        <S.BoardContainer>
          <S.BoardTitle>게시글 제목 입력해주세요</S.BoardTitle>
          <S.BoardText>
            소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸이라는 걸 알 수
            있었다. 그런데, 어제까지는 개울 기슭에서 하더니, 오늘은 징검다리 한
            가운데 앉아서
          </S.BoardText>
          <S.BoardImgBlock>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
              />
            </S.BoardImg>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
              />
            </S.BoardImg>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
              />
            </S.BoardImg>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
              />
            </S.BoardImg>
          </S.BoardImgBlock>
          <S.BoardInfoBlock>
            <S.BoardLikes>
              <Image
                src="/images/community/board_like_active.svg"
                alt="like_icon_active"
                width={24}
                height={20}
              />
              24
            </S.BoardLikes>
            <S.BoardComments>
              <Image
                src="/images/community/comments.svg"
                alt="comments"
                width={20}
                height={20}
              />
              12
            </S.BoardComments>
            <S.BoardShare>
              <Image
                src="/images/community/share.svg"
                alt="share"
                width={20}
                height={20}
              />
              0
            </S.BoardShare>
          </S.BoardInfoBlock>
          <S.BoardAdBanner>
            <Image
              src="/images/community/ad_banner.svg"
              alt="ad_banner"
              width={390}
              height={60}
            />
          </S.BoardAdBanner>
        </S.BoardContainer>
      </S.WrapperContents>
    </>
  );
}