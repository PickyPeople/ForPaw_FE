import * as S from "./AdoptFavorites.styles";
import Image from "next/image";

export default function AdpotFavoritesUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.AdoptPetMenuBlock>
          <S.AdoptPetMenuDate>최근 날짜</S.AdoptPetMenuDate>
          <S.AdoptPetMenuDogs>개</S.AdoptPetMenuDogs>
          <S.AdoptPetMenuCats>고양이</S.AdoptPetMenuCats>
        </S.AdoptPetMenuBlock>
        {props.pets.map((pet) => (
          <S.AdoptPet key={pet.id} onClick={props.navigateTo(`/adopt/detail`)}>
            <Image
              src={pet.profileURL}
              alt={pet.name}
              width={344}
              height={344}
              priority
            />
            <S.AdoptLikeToggle>
              <Image
                src="/images/pets/like_icon_big_active.svg"
                alt="like_icon_big_active"
                width={32}
                height={32}
              />
            </S.AdoptLikeToggle>
            <S.AdoptInfoBlock>
              <S.AdoptNameGender>
                {pet.name}
                <Image
                  src={
                    pet.gender === "M"
                      ? "/images/pets/male_icon_big.svg"
                      : "/images/pets/female_icon_big.svg"
                  }
                  alt="gender_icon"
                  width={24}
                  height={24}
                />
              </S.AdoptNameGender>
              <S.AdoptText>{`${pet.specialMark} ${pet.name}`}</S.AdoptText>
              <S.AdoptBirthAddress>{`${pet.age} ${pet.region}`}</S.AdoptBirthAddress>
              <S.AdoptLikeBlock>
                <S.AdoptLike>
                  <Image
                    src="/images/pets/like_icon.svg"
                    alt="like_icon"
                    width={20}
                    height={20}
                  />
                </S.AdoptLike>
                {pet.likeNum}
              </S.AdoptLikeBlock>
              <S.AdoptViewBlock>
                <S.AdoptView>
                  <Image
                    src="/images/pets/comment_icon.svg"
                    alt="comment_icon"
                    width={16}
                    height={16}
                  />
                </S.AdoptView>
                {pet.inquiryNum}
              </S.AdoptViewBlock>
            </S.AdoptInfoBlock>
          </S.AdoptPet>
        ))}
      </S.WrapperContents>
    </>
  );
}
