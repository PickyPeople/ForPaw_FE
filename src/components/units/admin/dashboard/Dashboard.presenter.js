import * as S from "./Dashboard.styles";
import Image from "next/image";

export default function DashboardUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.MenuContainer>
          <S.MenuBlock>
            <S.MenuItem>
              <Image
                src="/images/admin/dashboard.svg"
                alt="dashboard_Icon"
                width={31}
                height={23}
              />
              <S.MenuTitle style={{
                paddingTop: "0.488vh",
                paddingLeft: "0.486vw"
              }}>
                대시보드
              </S.MenuTitle>
            </S.MenuItem>
            <S.MenuItem>
              <Image
                src="/images/admin/members.svg"
                alt="members"
                width={31}
                height={23}
              />
              <S.MenuTitle>구성원 관리</S.MenuTitle>
            </S.MenuItem>
            <S.MenuItem>
              <Image
                src="/images/admin/folder.svg"
                alt="members"
                width={31}
                height={23}
              />
              <S.MenuTitle>입양 요청</S.MenuTitle>
            </S.MenuItem>
            <S.MenuItem>
              <Image
                src="/images/admin/folder.svg"
                alt="members"
                width={31}
                height={23}
              />
              <S.MenuTitle>문의 내역</S.MenuTitle>
            </S.MenuItem>
            <S.MenuItem>
              <Image
                src="/images/admin/folder.svg"
                alt="members"
                width={31}
                height={23}
              />
              <S.MenuTitle>신고 내역</S.MenuTitle>
            </S.MenuItem>
          </S.MenuBlock>
        </S.MenuContainer>
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>대시 보드</S.Title>
            <S.ContentItems>
              <S.Content>
                <S.ContentTitle>활성 사용자수</S.ContentTitle>
                <S.ContentCount>5210</S.ContentCount>
                <S.ContentTitle>비활성 사용자수</S.ContentTitle>
                <S.ContentCount>45</S.ContentCount>
              </S.Content>
            </S.ContentItems>
            <S.ContentItems>
            <S.Content>
                <S.ContentTitle>입양 대기중</S.ContentTitle>
                <S.ContentCount>4410</S.ContentCount>
                <S.ContentTitle style={{paddingLeft: "15px"}}>입양 진행중</S.ContentTitle>
                <S.ContentCount>65</S.ContentCount>
              </S.Content>
              <S.Content>
                <S.ContentTitle style={{width: "140px"}}>최근에 완료된 입양</S.ContentTitle>
                <S.ContentCount>32</S.ContentCount>
                <S.ContentTitle>완료된 입양</S.ContentTitle>
                <S.ContentCount>320</S.ContentCount>
              </S.Content>
            </S.ContentItems>
            <S.GraphContainer>
              
            </S.GraphContainer>
          </S.ContentsBlock>
        </S.ContentsContainer>
      </S.WrapperContainer>
    </>
  )
}