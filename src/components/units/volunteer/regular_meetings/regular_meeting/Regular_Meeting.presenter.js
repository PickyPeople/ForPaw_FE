import * as S from "./Regular_Meeting.styles";
import Image from "next/image";

export default function RegularMeetingUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.MeetingMainImg>
          <Image
            src="/images/volunteer/regular_meeting/meeting_main_img.svg"
            alt="meeting_main_img"
            width={390}
            height={201}
          />
        </S.MeetingMainImg>
        <S.WrapperMeetingInfo>
          <S.MeetingInfoContainer>
            <S.MeetingTitle>{props.example.result.name}</S.MeetingTitle>
            <S.DetailInfoContainer>
              <S.InFosBlock>
                <S.InfoName>일시</S.InfoName>
                <S.DetailInfo>2/12 (월) 오전 11:00</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>위치</S.InfoName>
                <S.DetailInfo>{props.example.result.location}</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>비용</S.InfoName>
                <S.DetailInfo>{props.example.result.cost}</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>인원</S.InfoName>
                <S.JoinInfoBlock>
                  <S.JoinedPeople>{props.example.result.participantNum}</S.JoinedPeople>/
                  <S.Maximun>{props.example.result.maxNum}</S.Maximun>
                </S.JoinInfoBlock>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>주최</S.InfoName>
                <S.DetailInfo>봉사천재 김포포</S.DetailInfo>
              </S.InFosBlock>
            </S.DetailInfoContainer>
            <S.DetailBlock>
            {props.example.result.description}
            </S.DetailBlock>
            <S.NextButtonBlock>
              <S.NextButtonItem>참여하기</S.NextButtonItem>
            </S.NextButtonBlock>
          </S.MeetingInfoContainer>
        </S.WrapperMeetingInfo>
        <S.Blank />
      </S.WrapperContents>
    </>
  )
}