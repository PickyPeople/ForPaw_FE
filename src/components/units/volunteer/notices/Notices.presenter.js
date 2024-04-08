import * as S from "./Announcements.styles";
import Image from "next/image";

export default function AnnouncementsUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.Container>
          {props.Announcements.map((announcement, index) => (
            <S.AnnouncementBlock
              onClick={props.navigateTo('/volunteer/detail/announcements/announcement')}
              key={announcement.id}
              style={{ backgroundColor: props.clickedIndex === index ? "#FFF0EB" : "#F6F6F6" }}
              onMouseDown={() => props.handleAnnouncementClick(index)}
            >
              <S.AnnouncementItem>
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
                  {announcement.text.length > 39 ? `${announcement.text.slice(0, 39)}...` : announcement.text}
                </S.AnnouncementText>
                <S.WritersBlock>
                  <S.Writer>{announcement.writer}</S.Writer>
                  <S.Time>{announcement.time}</S.Time>
                </S.WritersBlock>
              </S.AnnouncementItem>
            </S.AnnouncementBlock>
          ))}
          <S.AddAnnouncement style={{visibility: props.status == 'member' ? "hidden" : "visible"}}>
            <Image
              src="/images/volunteer/volunteer_add_icon.svg"
              alt="volunteer_add_icon"
              width={28}
              height={28}
              priority={true}
            />
          </S.AddAnnouncement>
        </S.Container>
      </S.WrapperContents>
    </>
  )
};