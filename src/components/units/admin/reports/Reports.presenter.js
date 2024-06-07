import * as S from "./Reports.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function ReportsUI() {
  return (
    <>
      <S.WrapperContainer>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>신고 내역</S.Title>
            <S.UserInfoContainer>
              <S.UserInfoTitleBlock>
                <S.RequestNum>요청 번호</S.RequestNum>
                <S.RequestDate>요청 날짜</S.RequestDate>
                <S.ContentKind>컨턴츠 종류</S.ContentKind>
                <S.Kind>종류</S.Kind>
                <S.Reason>사유</S.Reason>
                <S.State>상태</S.State>
              </S.UserInfoTitleBlock>
              <S.UserInfoBlock>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.ContentKindNameBlock>
                      <S.ContentKindName>게시글</S.ContentKindName>
                    </S.ContentKindNameBlock>
                    <S.Kind>게시판 성격에 부적절함</S.Kind>
                    <S.Reason>잘못된 카테고리</S.Reason>
                    <S.State>완료</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.ContentKindNameBlock>
                      <S.ContentKindName>게시글</S.ContentKindName>
                    </S.ContentKindNameBlock>
                    <S.Kind>게시판 성격에 부적절함</S.Kind>
                    <S.Reason>잘못된 카테고리</S.Reason>
                    <S.State>완료</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.ContentKindNameBlock>
                      <S.ContentKindName>게시글</S.ContentKindName>
                    </S.ContentKindNameBlock>
                    <S.Kind>게시판 성격에 부적절함</S.Kind>
                    <S.Reason>잘못된 카테고리</S.Reason>
                    <S.State>완료</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.ContentKindNameBlock>
                      <S.ContentKindName>댓글</S.ContentKindName>
                    </S.ContentKindNameBlock>
                    <S.Kind>게시판 성격에 부적절함</S.Kind>
                    <S.Reason>잘못된 카테고리</S.Reason>
                    <S.State>완료</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.ContentKindNameBlock>
                      <S.ContentKindName>게시글</S.ContentKindName>
                    </S.ContentKindNameBlock>
                    <S.Kind>게시판 성격에 부적절함</S.Kind>
                    <S.Reason>잘못된 카테고리</S.Reason>
                    <S.State>완료</S.State>
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