import * as S from "./Inquiries.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function InquiriesUI() {
  return (
    <>
      <S.WrapperContainer>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>문의 내역</S.Title>
            <S.UserInfoContainer>
              <S.UserInfoTitleBlock>
                <S.RequestNum>요청 번호</S.RequestNum>
                <S.RequestDate>요청 날짜</S.RequestDate>
                <S.Nickname>닉네임</S.Nickname>
                <S.Kind>종류</S.Kind>
                <S.InquiriesTitle>제목</S.InquiriesTitle>
                <S.State>상태</S.State>
              </S.UserInfoTitleBlock>
              <S.UserInfoBlock>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.Nickname>user 12</S.Nickname>
                    <S.Kind>시스템 오류</S.Kind>
                    <S.InquiriesTitle>최근에 입양을 신청했는데..</S.InquiriesTitle>
                    <S.State>완료</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>24</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.Nickname>user 13</S.Nickname>
                    <S.Kind>기타</S.Kind>
                    <S.InquiriesTitle>삭제한 게시글 복구 가능할..</S.InquiriesTitle>
                    <S.State>진행중</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>24</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.Nickname>user 13</S.Nickname>
                    <S.Kind>기타</S.Kind>
                    <S.InquiriesTitle>삭제한 게시글 복구 가능할..</S.InquiriesTitle>
                    <S.State>진행중</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>24</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.Nickname>user 13</S.Nickname>
                    <S.Kind>기타</S.Kind>
                    <S.InquiriesTitle>삭제한 게시글 복구 가능할..</S.InquiriesTitle>
                    <S.State>진행중</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>24</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.Nickname>user 13</S.Nickname>
                    <S.Kind>기타</S.Kind>
                    <S.InquiriesTitle>삭제한 게시글 복구 가능할..</S.InquiriesTitle>
                    <S.State>진행중</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
              </S.UserInfoBlock>
              <S.PageBlock>
                <S.PageItem>
                  <S.Page>1</S.Page>
                  <S.Page>2</S.Page>
                  <S.Page>3</S.Page>
                  <S.Page>4</S.Page>
                </S.PageItem>
              </S.PageBlock>
            </S.UserInfoContainer>
          </S.ContentsBlock>
        </S.ContentsContainer>
      </S.WrapperContainer>
    </>
  )
}