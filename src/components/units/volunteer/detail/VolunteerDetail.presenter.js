import * as S from "./VolunteerDetail.styles";
import Image from "next/image";

export default function VolunteerDetailUI(props) {
  return (
    <div style={{zIndex: "1", position: "relative"}}>
      <S.Judge
        style={{ visibility: props.isJoinedClikced ? "visible" : "hidden" }}
      >
        <S.JudgeText>가입 멤버만 확인할 수 있습니다.</S.JudgeText>
      </S.Judge>
      <S.WrapperContents
        active={props.isJoinedClikced}
        onClick={props.handleOutsideMenuClick}
      >
        <S.VolunteerIntroContainer>
          <S.IntroMainImgBlock>
            <Image
              src="/images/volunteer/volunteerDetail/volunteer_main_image.svg"
              alt="volunteer_main_image"
              width={344}
              height={160}
              priority={true}
            />
          </S.IntroMainImgBlock>
          <S.IntroTitle>모임을 소개하는 한마디</S.IntroTitle>
          <S.IntroDetail>해당 모임에 어울리는 문장을 간단하게 적어주세요</S.IntroDetail>
        </S.VolunteerIntroContainer>
        <S.AnnouncementContainer>
          <S.AnnouncementTitleBlock>
            <S.AnnouncementTitle>공지사항</S.AnnouncementTitle>
            <S.RightArrowImgBlock>
              <Image
                onClick={props.navigateTo('/volunteer/detail/announcements')}
                src="/images/volunteer/volunteerDetail/right_arrow.svg"
                alt="right_arrow"
                width={44}
                height={44}
                priority={true}
              />
            </S.RightArrowImgBlock>
          </S.AnnouncementTitleBlock>
          <S.AnnouncementDetailContainer>
            {props.notices.map((notice, index) => (
              <S.AnnouncementDetailBlock
                onClick={props.navigateTo('/volunteer/detail/announcements/announcement')}
                key={notice.id}
                style={{ backgroundColor: props.clickedIndex === index ? "#FEF8F2" : "#F6F6F6" }}
                onMouseDown={() => props.handleAnnouncementClick(index)} // 마우스를 눌렀을 때만 처리
              >
                <S.AnnouncementItems>
                  <S.CheckBox
                    style={{ backgroundColor: props.clickedIndex === index ? "#FF6636" : "#D9D9D9" }}
                  >
                    <S.CheckImg>
                      <Image
                        src="/images/volunteer/volunteerDetail/check_icon.svg"
                        alt="check_icon"
                        width={27}
                        height={19}
                        priority={true}
                      />
                    </S.CheckImg>
                  </S.CheckBox>
                  <S.AnnouncementText>
                    {notice.text.length > 55 ? `${announcement.text.slice(0, 55)}...` : notice.text}
                  </S.AnnouncementText>
                </S.AnnouncementItems>
              </S.AnnouncementDetailBlock>
            ))}
          </S.AnnouncementDetailContainer>
        </S.AnnouncementContainer>
        <S.MeetingContainer>
          <S.MeetingTitleBlock>
            <S.MeetingTitle>정기모임</S.MeetingTitle>
            <S.RightArrowImgBlock>
              <Image
                onClick={props.navigateTo('/volunteer/detail/regular_meetings')}
                src="/images/volunteer/volunteerDetail/right_arrow.svg"
                alt="right_arrow"
                width={44}
                height={44}
                priority={true}
              />
            </S.RightArrowImgBlock>
          </S.MeetingTitleBlock>
          <S.WrapperMeetingDetail>
            {props.Meetings.map((infos, index) => (
              <S.MeetingDetailContainer
                key={infos.id}
              >
                <S.MeetingDetailContentsBlock>
                  <S.DetailContentsDateBox>
                    <S.DetailDate>{infos.detailDate}</S.DetailDate>
                    <S.LeftDdayBox>
                      D-<S.Day>{infos.leftDay}</S.Day>
                    </S.LeftDdayBox>
                  </S.DetailContentsDateBox>
                  <S.MeetingName>{infos.meetingName}</S.MeetingName>
                  <S.MeetingDetailInfoBox>
                    <Image
                      src="/images/volunteer/volunteerDetail/meeting_detail_main.svg"
                      alt="meeting_detail_main"
                      width={148}
                      height={92}
                      priority={true}
                    />
                    <S.MeetingDetailInfo>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_date}</S.DetailInfoName>
                        <S.DetailInfo>{infos.detail_date}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_location}</S.DetailInfoName>
                        <S.DetailInfo>{infos.detail_location}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_cost}</S.DetailInfoName>
                        <S.DetailInfo>{infos.detail_cost}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_Participated}</S.DetailInfoName>
                        <S.DetailInfo>
                          <S.ParticipatedPeople>{infos.detail_participated}</S.ParticipatedPeople>
                          /
                          <S.MaximunPeople>{infos.maximun_people}</S.MaximunPeople>
                        </S.DetailInfo>
                      </S.MeetingDetailItems>
                    </S.MeetingDetailInfo>
                  </S.MeetingDetailInfoBox>
                  <S.UsersAndParticipateBox>
                    <S.UsersItems>
                      <S.UserImg>
                        <Image
                          src="/images/volunteer/volunteerDetail/user_1.svg"
                          alt="user"
                          width={25}
                          height={30}
                          priority={true}
                        />
                      </S.UserImg>
                      <S.UserImg style={{ right: "8px" }}>
                        <Image
                          src="/images/volunteer/volunteerDetail/user_2.svg"
                          alt="user"
                          width={25}
                          height={30}
                          priority={true}
                        />
                      </S.UserImg>
                      <S.UserImg style={{ right: "16px" }}>
                        <Image
                          src="/images/volunteer/volunteerDetail/user_3.svg"
                          alt="user"
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </S.UserImg>
                    </S.UsersItems>
                    <S.ParticipateBtn
                      onClick={props.navigateTo("/volunteer/detail/regular_meetings/regular_meeting")}>
                      참가하기
                    </S.ParticipateBtn>
                  </S.UsersAndParticipateBox>
                </S.MeetingDetailContentsBlock>
              </S.MeetingDetailContainer>
            ))}
          </S.WrapperMeetingDetail>
        </S.MeetingContainer>
        <S.MemberContainer>
          <S.MemberTitleBlock>
            <S.MemberTitle>회원목록</S.MemberTitle>
          </S.MemberTitleBlock>
          {props.members.map((infos, index) => (
            <S.MemberListContainer
              key={infos.id}
            >
              <S.MemberBox
                // onClick={props.navigateTo('/volunteer/detail/regular_meetings/regular_meeting')}
              >
                <S.MemberIcon>
                  <Image
                    src="/images/volunteer/volunteerDetail/member_icon.svg"
                    alt="member_icon"
                    width={49}
                    height={49}
                    priority={true}
                  />
                </S.MemberIcon>
                <S.MemberName>{infos.name}</S.MemberName>
                <S.StatusBlock style={{visibility: infos.status == "회원" ? "hidden" : "visible"}}>
                  <S.Status style={{backgroundColor: infos.status == "관리자" ? "#FF6636" : "#240D05"}}>{infos.status}</S.Status>
                </S.StatusBlock>
              </S.MemberBox>
            </S.MemberListContainer>
          ))}
          <S.Blank />
        </S.MemberContainer>
      </S.WrapperContents>
      <S.NextButtonBlock
        style={{ backgroundColor: props.status == 'member' ? "#240D05" : "#FF6636" }}
      >
        <S.NextButtonItem onClick={props.ChangeStatus('/volunteer/detail')}>{props.status === "member" ? "채팅방 입장하기" : "가입하기"}</S.NextButtonItem>
      </S.NextButtonBlock>
    </div>
  )
}