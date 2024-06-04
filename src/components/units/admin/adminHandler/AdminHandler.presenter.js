import * as S from "./AdminHandler.styles"
import Image from "next/image";

export default function AdminHandlerUI(props) {
  return (
    <>
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
    </>
  )
}