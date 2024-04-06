import * as S from "./notices.styles";
import Image from "next/image";

export default function NoticesUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.Container>
          {props.notices.map((notice, index) => (
            <S.AnnouncementBlock
              onClick={props.navigateTo('/volunteer/detail/notices/notice')}
              key={notice.id}
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
                  {notice.text.length > 39 ? `${notice.text.slice(0, 39)}...` : notice.text}
                </S.AnnouncementText>
                <S.WritersBlock>
                  <S.Writer>{notice.writer}</S.Writer>
                  <S.Time>{notice.time}</S.Time>
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