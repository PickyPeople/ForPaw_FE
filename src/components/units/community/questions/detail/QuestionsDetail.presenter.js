import * as S from "./QuestionsDetail.styles";
import Image from "next/image";

export default function QuestionsDetailUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.UserContainer>
          <S.UserPhoto>
            <Image
              src="/images/header/profile_icon.svg"
              alt="profile_icon"
              width={44}
              height={44}
            />
          </S.UserPhoto>
          <S.UserInfoBlock>
            <S.UserNickname>닉네임입력</S.UserNickname>
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
            />
          </S.UserInfoBlock>
        </S.UserContainer>
        <S.QuestionDetailBlock>
          <S.QuestionTtile>Q. 갑자기 궁금한 게 생겨서 그런데요</S.QuestionTtile>
          <S.QuestionText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.QuestionText>
        </S.QuestionDetailBlock>
        <S.AnswerBtn>답변하기</S.AnswerBtn>
        <S.AnswerDetailBlock>
          <S.AnswerUserBlock>
            <S.AnswerProfile>
              <Image
                src="/images/community/community_questions_profile.svg"
                alt="community_questions_profile"
                width={40}
                height={40}
              />
              <S.AnswerInfoBlock>
                <S.UserNickname>닉네임입력</S.UserNickname>
                <S.UpdatedTime>3시간 전</S.UpdatedTime>
              </S.AnswerInfoBlock>
            </S.AnswerProfile>
          </S.AnswerUserBlock>
          <S.AnswerText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.AnswerText>
        </S.AnswerDetailBlock>
      </S.WrapperContents>
    </>
  );
}
