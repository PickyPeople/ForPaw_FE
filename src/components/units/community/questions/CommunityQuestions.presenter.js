import * as S from "./CommunityQuestions.styles";
import Image from "next/image";

export default function CommunityQuestionsUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.CommunityQuestionBlock style={{ backgroundColor: "#fff0eb" }}>
          <S.QuestionInfoBlock>
            <S.QuestionProfile>
              <Image
                src="/images/community/community_questions_profile.svg"
                alt="community_questions_profile"
                width={40}
                height={40}
              />
              닉네임
            </S.QuestionProfile>
            <S.QuestionDate>24.02.16</S.QuestionDate>
          </S.QuestionInfoBlock>
          <S.QuestionTtile>갑자기 궁금한 게 생겨서 그런데요</S.QuestionTtile>
          <S.QuestionText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.QuestionText>
          <S.NumberOfAnswers>답변 2</S.NumberOfAnswers>
        </S.CommunityQuestionBlock>
        <S.CommunityQuestionBlock>
          <S.QuestionInfoBlock>
            <S.QuestionProfile>
              <Image
                src="/images/community/community_questions_profile.svg"
                alt="community_questions_profile"
                width={40}
                height={40}
              />
              닉네임
            </S.QuestionProfile>
            <S.QuestionDate>24.02.16</S.QuestionDate>
          </S.QuestionInfoBlock>
          <S.QuestionTtile>갑자기 궁금한 게 생겨서 그런데요</S.QuestionTtile>
          <S.QuestionText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.QuestionText>
          <S.NumberOfAnswers>답변 2</S.NumberOfAnswers>
        </S.CommunityQuestionBlock>
        <S.CommunityQuestionBlock>
          <S.QuestionInfoBlock>
            <S.QuestionProfile>
              <Image
                src="/images/community/community_questions_profile.svg"
                alt="community_questions_profile"
                width={40}
                height={40}
              />
              닉네임
            </S.QuestionProfile>
            <S.QuestionDate>24.02.16</S.QuestionDate>
          </S.QuestionInfoBlock>
          <S.QuestionTtile>갑자기 궁금한 게 생겨서 그런데요</S.QuestionTtile>
          <S.QuestionText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.QuestionText>
          <S.NumberOfAnswers>답변 2</S.NumberOfAnswers>
        </S.CommunityQuestionBlock>
        <S.CommunityQuestionBlock>
          <S.QuestionInfoBlock>
            <S.QuestionProfile>
              <Image
                src="/images/community/community_questions_profile.svg"
                alt="community_questions_profile"
                width={40}
                height={40}
              />
              닉네임
            </S.QuestionProfile>
            <S.QuestionDate>24.02.16</S.QuestionDate>
          </S.QuestionInfoBlock>
          <S.QuestionTtile>갑자기 궁금한 게 생겨서 그런데요</S.QuestionTtile>
          <S.QuestionText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.QuestionText>
          <S.NumberOfAnswers>답변 2</S.NumberOfAnswers>
        </S.CommunityQuestionBlock>
        <S.CommunityQuestionBlock>
          <S.QuestionInfoBlock>
            <S.QuestionProfile>
              <Image
                src="/images/community/community_questions_profile.svg"
                alt="community_questions_profile"
                width={40}
                height={40}
              />
              닉네임
            </S.QuestionProfile>
            <S.QuestionDate>24.02.16</S.QuestionDate>
          </S.QuestionInfoBlock>
          <S.QuestionTtile>갑자기 궁금한 게 생겨서 그런데요</S.QuestionTtile>
          <S.QuestionText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.QuestionText>
          <S.NumberOfAnswers>답변 2</S.NumberOfAnswers>
        </S.CommunityQuestionBlock>
        <S.CommunityQuestionBlock>
          <S.QuestionInfoBlock>
            <S.QuestionProfile>
              <Image
                src="/images/community/community_questions_profile.svg"
                alt="community_questions_profile"
                width={40}
                height={40}
              />
              닉네임
            </S.QuestionProfile>
            <S.QuestionDate>24.02.16</S.QuestionDate>
          </S.QuestionInfoBlock>
          <S.QuestionTtile>갑자기 궁금한 게 생겨서 그런데요</S.QuestionTtile>
          <S.QuestionText>
            질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리 나라 만세
          </S.QuestionText>
          <S.NumberOfAnswers>답변 2</S.NumberOfAnswers>
        </S.CommunityQuestionBlock>
        <S.CommunityAddIcon
          onClick={() =>
            props.handleAddIconClick("/community/write?type=questions")
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
