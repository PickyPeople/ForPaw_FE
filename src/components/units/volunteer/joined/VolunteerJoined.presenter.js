import * as S from "./VolunteerJoined.styles";
import Image from "next/image";

export default function VolunteerRecommendUI(props) {
  return (
    <>
      <S.WrapperContents>
        {props.volunteerJoinedInfos.map((infos, index) => (
          <S.VolunteerBlock
            key={infos.id}
            onClick={props.navigateTo("/volunteer/detail")}
          >
            <S.VolunteerImg>
              <Image
                src={infos.profileURL}
                alt="volunteer_1"
                width={324}
                height={183}
              />
              <S.VolunteerLikeBlock>
                <Image
                  src="/images/volunteer/volunteer_like_icon.svg"
                  alt="volunteer_like_icon"
                  width={17}
                  height={14}
                />
                {infos.likeNum}
              </S.VolunteerLikeBlock>
            </S.VolunteerImg>
            <S.VolunteerTitleBlock>
              <S.VolunteerTitle>{infos.name}</S.VolunteerTitle>
            </S.VolunteerTitleBlock>
            <S.VolunteerText>
              {infos.description.length > 63
                ? `${infos.description.slice(0, 63)}...`
                : infos.description}
            </S.VolunteerText>
            <S.VolunteerInfoBlock>
              <S.VolunteerNumberOfMember>
                {infos.participation}명 참여중
              </S.VolunteerNumberOfMember>
              <S.VolunteerCategoryBlock>
                <S.VolunteerCategory>{infos.category}</S.VolunteerCategory>
              </S.VolunteerCategoryBlock>
              <S.VolunteerRegionBlock>
                <S.VolunteerRegion>
                  {infos.region + " "}
                  {infos.subRegion}
                </S.VolunteerRegion>
              </S.VolunteerRegionBlock>
            </S.VolunteerInfoBlock>
          </S.VolunteerBlock>
        ))}
        <S.MoreBtn onClick={props.loadUpdatedVolunteerJoinedData}>더보기</S.MoreBtn>
        <S.VolunteerAddIcon
          onClick={props.navigateTo("/volunteer/create_volunteer")}
        >
          <Image
            src="/images/volunteer/volunteer_add_icon.svg"
            alt="volunteer_add_icon"
            width={28}
            height={28}
          />
        </S.VolunteerAddIcon>
      </S.WrapperContents>
    </>
  );
}
