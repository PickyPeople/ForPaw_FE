import * as S from "./AdoptPetDetail.styles";
import Image from "next/image";

export default function AdoptPetDetailUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>보호동물</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperPetDetail>
        <S.PetImgBlock>
          <Image
            src="/images/pets/dog_1_detail.svg"
            alt="dog_1_detail"
            width={390}
            height={381}
          />
          <S.AdoptLikeToggle>
            <Image
              src={
                props.petDetail?.isLike
                  ? "/images/pets/like_icon_big_active.svg"
                  : "/images/pets/like_icon_big.svg"
              }
              alt="like_icon_big"
              width={32}
              height={32}
            />
          </S.AdoptLikeToggle>
        </S.PetImgBlock>
        <S.PetInfoBlock>
          <S.PetNameGender>
            {props.petDetail?.name}
            <S.PetGenderIcon>
              <Image
                src={
                  props.petDetail?.gender === "M"
                    ? "/images/pets/male_icon_detail.svg"
                    : "/images/pets/female_icon_detail.svg"
                }
                alt="male_icon_detail"
                width={30}
                height={30}
              />
            </S.PetGenderIcon>
          </S.PetNameGender>
          <S.PetRegionAge>
            {props.petDetail?.region.split(" ")[0]}
            {", "}
            {props.petDetail?.region.split(" ")[1]} •{" "}
            {props.petDetail?.age.substring(0, 4)}년생
          </S.PetRegionAge>
        </S.PetInfoBlock>
        <S.PetInfoIconBlock>
          <S.PetPersonalityIcon>
            {props.petDetail?.specialMark}
          </S.PetPersonalityIcon>
          <S.PetNeuterIcon netuer={props.petDetail?.neuter}>
            중성화{props.petDetail?.neuter === "Y" ? "" : " X"}
          </S.PetNeuterIcon>
          <S.PetBreedIcon>
            {props.petDetail?.kind.split("]")[1].trim()}
          </S.PetBreedIcon>
          <S.PetWeightIcon>
            {props.petDetail?.weight.substring(0, 2)}kg
          </S.PetWeightIcon>
        </S.PetInfoIconBlock>
        <S.PetContentTitle>
          사람을 좋아하는 사교성, 친화력 최고 인절미
        </S.PetContentTitle>
        <S.PetContentText>
          보호자분의 개인사정으로 인해 보호하게 된 포리를 소개합니다! 포리를
          따뜻한 사랑으로 보듬어 줄 수 있는 새로운 가족을 찾습니다. 포리를
          가족으로 맞이하고 싶으신 분은 입양 문의하기를 눌러 포리를 직접
          만나보세요. <br />
          보호자분의 개인사정으로 인해 보호하게 된 포리를 소개합니다! 포리를
          따뜻한 사랑으로 보듬어 줄 수 있는 새로운 가족을 찾습니다. 포리를
          가족으로 맞이하고 싶으신 분은 입양 문의하기를 눌러 포리를 직접
          만나보세요. 보호자분의 개인사정으로 인해 보호하게 된 포리를
          소개합니다! 포리를 따뜻한 사랑으로 보듬어 줄 수 있는 새로운 가족을
          찾습니다. 포리를 가족으로 맞이하고 싶으신 분은 입양 문의하기를 눌러
          포리를 직접 만나보세요.
        </S.PetContentText>
        <S.PetAdoptionPeriod>
          {props.petDetail?.noticeSdt.substring(0, 4)}.
          {props.petDetail?.noticeSdt.substring(4, 6)}.
          {props.petDetail?.noticeSdt.substring(6)}-
          {props.petDetail?.noticeEdt.substring(0, 4)}.
          {props.petDetail?.noticeEdt.substring(4, 6)}.
          {props.petDetail?.noticeEdt.substring(6)}
        </S.PetAdoptionPeriod>
        <S.PetAdoptionButton
          onClick={props.navigateTo("/adopt/detail/inquire")}
        >
          입양 문의하기
        </S.PetAdoptionButton>
      </S.WrapperPetDetail>
    </>
  );
}
