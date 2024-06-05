import * as S from "./Adopt_Request.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function AdoptRequestUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>입양 요청</S.Title>
            <S.UserInfoContainer>
              <S.UserInfoTitleBlock>
                <S.RequestNum>요청 번호</S.RequestNum>
                <S.RequestDate>요청 날짜</S.RequestDate>
                <S.AnimaiId>동물 ID</S.AnimaiId>
                <S.Breed>품종</S.Breed>
                <S.Sex>성별</S.Sex>
                <S.Age>나이</S.Age>
                <S.ApplicantName>지원자 이름</S.ApplicantName>
                <S.State>상태</S.State>
              </S.UserInfoTitleBlock>
              <S.UserInfoBlock>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.AnimaiId>124</S.AnimaiId>
                    <S.Breed>진도</S.Breed>
                    <S.Sex>M</S.Sex>
                    <S.Age>2024(60일미만)(년생)</S.Age>
                    <S.ApplicantName>탁호용</S.ApplicantName>
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
                    <S.AnimaiId>124</S.AnimaiId>
                    <S.Breed>진도</S.Breed>
                    <S.Sex>M</S.Sex>
                    <S.Age>2024(60일미만)(년생)</S.Age>
                    <S.ApplicantName>탁호용</S.ApplicantName>
                    <S.State>진행중</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.AnimaiId>124</S.AnimaiId>
                    <S.Breed>진도</S.Breed>
                    <S.Sex>M</S.Sex>
                    <S.Age>2024(60일미만)(년생)</S.Age>
                    <S.ApplicantName>탁호용</S.ApplicantName>
                    <S.State>진행중</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.AnimaiId>124</S.AnimaiId>
                    <S.Breed>진도</S.Breed>
                    <S.Sex>M</S.Sex>
                    <S.Age>2024(60일미만)(년생)</S.Age>
                    <S.ApplicantName>탁호용</S.ApplicantName>
                    <S.State>진행중</S.State>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>처리</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.RequestNum>23</S.RequestNum>
                    <S.RequestDate>2024-04-25 14:35</S.RequestDate>
                    <S.AnimaiId>124</S.AnimaiId>
                    <S.Breed>진도</S.Breed>
                    <S.Sex>M</S.Sex>
                    <S.Age>2024(60일미만)(년생)</S.Age>
                    <S.ApplicantName>탁호용</S.ApplicantName>
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
