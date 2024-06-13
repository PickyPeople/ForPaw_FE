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
                {props.requestInfos.map((infos, indwx) => (
                  <S.UserInfoItems>
                    <S.UserInfoItem>
                      <S.RequestNum>{infos.applyId}</S.RequestNum>
                      <S.RequestDate>{infos.applyDate}</S.RequestDate>
                      <S.AnimaiId>{infos.animalId}</S.AnimaiId>
                      <S.Breed>{infos.kind}</S.Breed>
                      <S.Sex>{infos.gender}</S.Sex>
                      <S.Age>{infos.age}</S.Age>
                      <S.ApplicantName>{infos.userName}</S.ApplicantName>
                      <S.State>{infos.status === "PROCESSING" ? "진행중" : "완료"}</S.State>
                    </S.UserInfoItem>
                    <S.ChangeBtnBlock>
                      <S.ChangeBtn>처리</S.ChangeBtn>
                    </S.ChangeBtnBlock>
                  </S.UserInfoItems>
                ))}
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
  );
}
