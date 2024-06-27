import * as S from "./AdminHeader.styles";
import Image from "next/image";

export default function AdminHeaderUI(props) {

  return (
    <>
      <S.WrapperContainer
        active={props.isUserInfoClicked}
      >
        <S.HeaderContainer>
          <S.ImageBlock>
            <Image
              src="/images/header/forpaw_icon.svg"
              alt="paw_icon"
              width={48}
              height={32}
            />
          </S.ImageBlock>
          <S.HeaderTitle>관리자 페이지</S.HeaderTitle>
        </S.HeaderContainer>
      </S.WrapperContainer>
    </>
  )
}