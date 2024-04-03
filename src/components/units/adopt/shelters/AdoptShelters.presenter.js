import * as S from "./AdoptShelters.styles";
import Image from "next/image";

export default function AdpotSheltersUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.AddressInput type="text" placeholder="부산광역시 금정구 장전동" />
        <S.AdoptShelterMenuBlock>
          <S.ShelterDistance>가까운 거리순</S.ShelterDistance>
          <S.ShelterOpen>영업중</S.ShelterOpen>
          <S.ShelterCategory>카테고리명</S.ShelterCategory>
        </S.AdoptShelterMenuBlock>
        <S.MapDisplay>
          <Image
            src="/images/shelter/map_1.svg"
            alt="map_1"
            width={390}
            height={563}
          />
        </S.MapDisplay>
        <S.MapCurrentPositionIcon style={{ top: props.topIconPosition }}>
          <Image
            src="/images/shelter/position_icon.svg"
            alt="position_icon"
            width={60}
            height={60}
          />
        </S.MapCurrentPositionIcon>
        <S.MapInfoContainer style={{ top: props.topPosition }}>
          <S.MapInfoDragBlock id="map-info-drag-block">
            <S.MapInfoDragIcon></S.MapInfoDragIcon>
          </S.MapInfoDragBlock>
          {props.shelters?.map((shelter) => (
            <S.MapInfoItem
              key={shelter.key}
              onClick={props.navigateTo("/adopt/shelters/detail")}
            >
              <S.MapInfoImg>
                <Image
                  src="/images/shelter/shelter_1.svg"
                  alt="shelter_1"
                  width={74}
                  height={74}
                />
              </S.MapInfoImg>
              <S.MapInfoDetailBlock>
                <S.ShelterName>{shelter.name}</S.ShelterName>
                <S.ShelterPlace>위치, 상세특징 서술해주세요</S.ShelterPlace>
                <S.ShelterStatus>영업중</S.ShelterStatus>
              </S.MapInfoDetailBlock>
            </S.MapInfoItem>
          ))}
        </S.MapInfoContainer>
      </S.WrapperContents>
    </>
  );
}
