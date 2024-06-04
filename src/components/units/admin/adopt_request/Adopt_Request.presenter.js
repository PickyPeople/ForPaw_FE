import * as S from "./Adopt_Request.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function AdoptRequestUI(props) {
  return(
    <>
      <S.WrapperContainer>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>입양 요청</S.Title>
            <S.UserInfoContainer>
              
            </S.UserInfoContainer>
          </S.ContentsBlock>
        </S.ContentsContainer>
      </S.WrapperContainer>
    </>
  )
}
