import * as S from "./Member_Management.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";


export default function MemberManagementUI() {
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
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.Nickname>hoyoi</S.Nickname>
                    <S.Email>jjyjjh33@gmail.com</S.Email>
                    <S.SignDay>2024-01-10</S.SignDay>
                    <S.CurrentLogin>2024-04-25 14:35</S.CurrentLogin>
                    <S.Status>Admin</S.Status>
                    <S.Adopting>2</S.Adopting>
                    <S.Adopted>1</S.Adopted>
                    <S.Active>O</S.Active>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>변경</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.Nickname>hoyoi</S.Nickname>
                    <S.Email>jjyjjh33@gmail.com</S.Email>
                    <S.SignDay>2024-01-10</S.SignDay>
                    <S.CurrentLogin>2024-04-25 14:35</S.CurrentLogin>
                    <S.Status>Admin</S.Status>
                    <S.Adopting>2</S.Adopting>
                    <S.Adopted>1</S.Adopted>
                    <S.Active>O</S.Active>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>변경</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.Nickname>hoyoi</S.Nickname>
                    <S.Email>jjyjjh33@gmail.com</S.Email>
                    <S.SignDay>2024-01-10</S.SignDay>
                    <S.CurrentLogin>2024-04-25 14:35</S.CurrentLogin>
                    <S.Status>Admin</S.Status>
                    <S.Adopting>2</S.Adopting>
                    <S.Adopted>1</S.Adopted>
                    <S.Active>O</S.Active>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>변경</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.Nickname>hoyoi</S.Nickname>
                    <S.Email>jjyjjh33@gmail.com</S.Email>
                    <S.SignDay>2024-01-10</S.SignDay>
                    <S.CurrentLogin>2024-04-25 14:35</S.CurrentLogin>
                    <S.Status>Admin</S.Status>
                    <S.Adopting>2</S.Adopting>
                    <S.Adopted>1</S.Adopted>
                    <S.Active>O</S.Active>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>변경</S.ChangeBtn>
                  </S.ChangeBtnBlock>
                </S.UserInfoItems>
                <S.UserInfoItems>
                  <S.UserInfoItem>
                    <S.Nickname>hoyoi</S.Nickname>
                    <S.Email>jjyjjh33@gmail.com</S.Email>
                    <S.SignDay>2024-01-10</S.SignDay>
                    <S.CurrentLogin>2024-04-25 14:35</S.CurrentLogin>
                    <S.Status>Admin</S.Status>
                    <S.Adopting>2</S.Adopting>
                    <S.Adopted>1</S.Adopted>
                    <S.Active>O</S.Active>
                  </S.UserInfoItem>
                  <S.ChangeBtnBlock>
                    <S.ChangeBtn>변경</S.ChangeBtn>
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