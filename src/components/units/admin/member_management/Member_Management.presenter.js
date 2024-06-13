import * as S from "./Member_Management.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";


export default function MemberManagementUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>구성원 관리</S.Title>
            <S.UserInfoContainer>
              <S.UserInfoTitleBlock>
                <S.Nickname>닉네임</S.Nickname>
                <S.Email>이메일</S.Email>
                <S.SignDay>가입일</S.SignDay>
                <S.CurrentLogin>최근 로그인</S.CurrentLogin>
                <S.Status>권한</S.Status>
                <S.Adopting>입양 진행중</S.Adopting>
                <S.Adopted>입양 완료</S.Adopted>
                <S.Active>활성화</S.Active>
              </S.UserInfoTitleBlock>
              <S.UserInfoBlock>
                {props.memberInfos.map((infos, index) => (
                  <S.UserInfoItems>
                    <S.UserInfoItem>
                      <S.Nickname>{infos.nickName}</S.Nickname>
                      <S.Email>{infos.email}</S.Email>
                      <S.SignDay>{infos.signUpDate}</S.SignDay>
                      <S.CurrentLogin>{infos.lastLogin}</S.CurrentLogin>
                      <S.Status>{infos.role}</S.Status>
                      <S.Adopting>{infos.applicationsSubmitted}</S.Adopting>
                      <S.Adopted>{infos.applicationsCompleted}</S.Adopted>
                      <S.Active>{infos.isActive ? "O" : "X"}</S.Active>
                    </S.UserInfoItem>
                    <S.ChangeBtnBlock>
                      <S.ChangeBtn onClick={props.changeStatus}>변경</S.ChangeBtn>
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
  )
}