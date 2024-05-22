import * as S from "./AdoptHandler.styles";

export default function AdoptHandlerUI(props) {
  return (
    <S.WrapperAdoptHandler>
      <S.AdoptTextContainer>
        <S.AdoptText>당신의 따뜻한 관심을 기다리고 있어요-</S.AdoptText>
      </S.AdoptTextContainer>
      <S.AdoptMenuContainer>
        <S.AdoptMenu
          onClick={() => props.navigateTo(props.paths.pets)}
          active={props.isActive(props.paths.pets)}
        >
          보호동물
        </S.AdoptMenu>
        <S.AdoptMenu
          onClick={() => props.navigateTo(props.paths.shelters)}
          active={props.isActive(props.paths.shelters)}
        >
          보호소
        </S.AdoptMenu>
        <S.AdoptMenu
          onClick={() => props.handleFavClick(props.paths.favorites)}
          active={props.isActive(props.paths.favorites)}
        >
          관심동물
        </S.AdoptMenu>
      </S.AdoptMenuContainer>
    </S.WrapperAdoptHandler>
  );
}
