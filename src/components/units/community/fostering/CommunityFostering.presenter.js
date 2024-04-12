import * as S from "./CommunityFostering.styles";
import Image from "next/image";

export default function CommunityAdoptionUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.CommunityMenuBlock>
          <S.CommunityMenuPopularity>인기순</S.CommunityMenuPopularity>
          <S.CommunityMenuNewest>최신순</S.CommunityMenuNewest>
        </S.CommunityMenuBlock>
        <S.CommunityBlock onClick={() => props.navigateTo("/community/detail")}>
          <S.CommunityImg>
            <Image
              src="/images/community/community_1.svg"
              alt="community_1"
              width={115}
              height={117}
            />
          </S.CommunityImg>
          <S.CommunityInfoBlock>
            <S.CommunityTitle>커뮤니티 제목</S.CommunityTitle>
            <S.CommunityText>
              소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀
            </S.CommunityText>
            <S.CommunityCategory>닉네임을 입력</S.CommunityCategory>
            <S.CommunityLikeBlock>
              <S.CommunityLike>
                <Image
                  src="/images/community/like_icon_active.svg"
                  alt="active_icon"
                  width={20}
                  height={20}
                />
              </S.CommunityLike>
              12
            </S.CommunityLikeBlock>
            <S.CommunityViewBlock>
              <S.CommunityView>
                <Image
                  src="/images/community/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.CommunityView>
              25
            </S.CommunityViewBlock>
          </S.CommunityInfoBlock>
        </S.CommunityBlock>
        <S.CommunityBlock onClick={() => props.navigateTo("/community/detail")}>
          <S.CommunityImg>
            <Image
              src="/images/community/community_1.svg"
              alt="community_1"
              width={115}
              height={117}
            />
          </S.CommunityImg>
          <S.CommunityInfoBlock>
            <S.CommunityTitle>커뮤니티 제목</S.CommunityTitle>
            <S.CommunityText>
              소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀
            </S.CommunityText>
            <S.CommunityCategory>닉네임을 입력</S.CommunityCategory>
            <S.CommunityLikeBlock>
              <S.CommunityLike>
                <Image
                  src="/images/community/like_icon_active.svg"
                  alt="active_icon"
                  width={20}
                  height={20}
                />
              </S.CommunityLike>
              12
            </S.CommunityLikeBlock>
            <S.CommunityViewBlock>
              <S.CommunityView>
                <Image
                  src="/images/community/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.CommunityView>
              25
            </S.CommunityViewBlock>
          </S.CommunityInfoBlock>
        </S.CommunityBlock>
        <S.CommunityBlock onClick={() => props.navigateTo("/community/detail")}>
          <S.CommunityImg>
            <Image
              src="/images/community/community_1.svg"
              alt="community_1"
              width={115}
              height={117}
            />
          </S.CommunityImg>
          <S.CommunityInfoBlock>
            <S.CommunityTitle>커뮤니티 제목</S.CommunityTitle>
            <S.CommunityText>
              소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀
            </S.CommunityText>
            <S.CommunityCategory>닉네임을 입력</S.CommunityCategory>
            <S.CommunityLikeBlock>
              <S.CommunityLike>
                <Image
                  src="/images/community/like_icon_active.svg"
                  alt="active_icon"
                  width={20}
                  height={20}
                />
              </S.CommunityLike>
              12
            </S.CommunityLikeBlock>
            <S.CommunityViewBlock>
              <S.CommunityView>
                <Image
                  src="/images/community/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.CommunityView>
              25
            </S.CommunityViewBlock>
          </S.CommunityInfoBlock>
        </S.CommunityBlock>
        <S.CommunityBlock onClick={() => props.navigateTo("/community/detail")}>
          <S.CommunityImg>
            <Image
              src="/images/community/community_1.svg"
              alt="community_1"
              width={115}
              height={117}
            />
          </S.CommunityImg>
          <S.CommunityInfoBlock>
            <S.CommunityTitle>커뮤니티 제목</S.CommunityTitle>
            <S.CommunityText>
              소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀
            </S.CommunityText>
            <S.CommunityCategory>닉네임을 입력</S.CommunityCategory>
            <S.CommunityLikeBlock>
              <S.CommunityLike>
                <Image
                  src="/images/community/like_icon_active.svg"
                  alt="active_icon"
                  width={20}
                  height={20}
                />
              </S.CommunityLike>
              12
            </S.CommunityLikeBlock>
            <S.CommunityViewBlock>
              <S.CommunityView>
                <Image
                  src="/images/community/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.CommunityView>
              25
            </S.CommunityViewBlock>
          </S.CommunityInfoBlock>
        </S.CommunityBlock>
        <S.CommunityBlock onClick={() => props.navigateTo("/community/detail")}>
          <S.CommunityImg>
            <Image
              src="/images/community/community_1.svg"
              alt="community_1"
              width={115}
              height={117}
            />
          </S.CommunityImg>
          <S.CommunityInfoBlock>
            <S.CommunityTitle>커뮤니티 제목</S.CommunityTitle>
            <S.CommunityText>
              소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀
            </S.CommunityText>
            <S.CommunityCategory>닉네임을 입력</S.CommunityCategory>
            <S.CommunityLikeBlock>
              <S.CommunityLike>
                <Image
                  src="/images/community/like_icon_active.svg"
                  alt="active_icon"
                  width={20}
                  height={20}
                />
              </S.CommunityLike>
              12
            </S.CommunityLikeBlock>
            <S.CommunityViewBlock>
              <S.CommunityView>
                <Image
                  src="/images/community/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.CommunityView>
              25
            </S.CommunityViewBlock>
          </S.CommunityInfoBlock>
        </S.CommunityBlock>
        <S.CommunityAddIcon
          onClick={() =>
            props.handleAddIconClick("/community/write?type=fostering")
          }
        >
          <Image
            src="/images/community/community_add_icon.svg"
            alt="community_add_icon"
            width={28}
            height={28}
          />
        </S.CommunityAddIcon>
      </S.WrapperContents>
    </>
  );
}
