import * as S from "./Member_Management.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function MemberManagementUI(props) {
  return (
    <>
      {props.isUserInfoClicked ? (
        <S.UserInfoDetailContainer>
          <S.CloseBtnBlock>
            <S.CloseBtn onClick={props.closeUserInfo}>
              <Image src="/images/admin/x.svg" alt="x" width={24} height={24} />
            </S.CloseBtn>
          </S.CloseBtnBlock>
          <S.BigTitle>
            닉네임 - <S.UserInfo>user1</S.UserInfo>
          </S.BigTitle>
          <S.UserInfoDetailBlock>
            <S.UserItem>
              <S.UserStatus>권한</S.UserStatus>
              <S.CurrentStatus>USER</S.CurrentStatus>
              <S.StatusChgBtn>변경</S.StatusChgBtn>
            </S.UserItem>
            <S.ReasonTitle>정지 사유</S.ReasonTitle>
            <S.ReasonTable contentEditable="true"></S.ReasonTable>
            <S.UserItem>
              <S.ReasonTitle>정지 기한</S.ReasonTitle>
              <S.StopDays>90일</S.StopDays>
            </S.UserItem>
          </S.UserInfoDetailBlock>
          <S.UserInfoDetailBtnContainer>
            <S.UserInfoDetailBtnBlock>
              <S.StopAccount>계정 정지</S.StopAccount>
              <S.DeleteAccount>계정 삭제</S.DeleteAccount>
            </S.UserInfoDetailBtnBlock>
          </S.UserInfoDetailBtnContainer>
        </S.UserInfoDetailContainer>
      ) : null}
      <S.WrapperContainer active={props.isUserInfoClicked}>
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
                  <S.UserInfoItems key={infos.id}>
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
                      <S.ChangeBtn onClick={props.openUserInfo}>
                        변경
                      </S.ChangeBtn>
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
