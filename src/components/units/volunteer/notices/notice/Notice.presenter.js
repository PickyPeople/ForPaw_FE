import * as S from "./Notice.styles";
import Image from "next/image";

export default function NoticeUI(props) {
  return (
    <>
      <S.WrapperContents
        active={
          props.isClickedReply ||
          props.isClickedEdit ||
          props.isClickedReplyEdit
        }
      >
        <S.AnnouncementContainer>
          <S.AnnouncementTitle>
            공지사항 타이틀을 입력해주세요 최대 두줄 정도로 넘으면..처리
          </S.AnnouncementTitle>
          <S.AnnouncementImg>
            <Image
              src="/images/volunteer/announcement/announcement_img.svg"
              alt="announcement_img"
              width={390}
              height={201}
              priority={true}
            />
          </S.AnnouncementImg>
          <S.AnnouncementText>
            소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸<br />
            이라는 걸 알 수 있었다. 그런데, 어제까지는 개울 기슭에서 하더니,
            오늘은 징검다리 한가운데 앉아서 하고 있다.
            <br />
            소녀는 소년이 개울둑에 앉아 있는 걸 아는지 모르는지
          </S.AnnouncementText>
        </S.AnnouncementContainer>
        <S.Boundary />
        <S.CommentContainer>
          {props.comments.map((comment, index) => (
            <S.Comments key={comment.id}>
              <S.CommentBlock>
                <S.UserInfoItems>
                  <S.UserImgbox>
                    <Image
                      src="/images/volunteer/announcement/user_icon.svg"
                      alt="member_icon"
                      width={40}
                      height={40}
                      priority={true}
                    />
                  </S.UserImgbox>
                  <S.CommentUser>
                    <S.UserName>{comment.name}</S.UserName>
                    <S.CommentTime>
                      {comment.region} {comment.hours}
                    </S.CommentTime>
                  </S.CommentUser>
                </S.UserInfoItems>
                <S.CommentText>
                  <S.Comment>{comment.text}</S.Comment>
                  <S.CommentMenuImg
                    onClick={() => props.handleMenuClick(comment.id, null)}
                  >
                    <Image
                      src="/images/header/menu_icon.svg"
                      alt="menu_icon"
                      width={30}
                      height={30}
                      priority={true}
                    />
                    {props.isCommentMenuClicked &&
                      props.clickedCommentID === comment.id && (
                        <S.MenuBlock ref={props.wrapperRef}>
                          <S.Edit
                            onClick={() =>
                              props.activeCommentEdit(comment.text)
                            }
                          >
                            수정하기
                          </S.Edit>
                          <S.Delete
                            onClick={() => props.handleDelete(comment.id, null)}
                          >
                            삭제하기
                          </S.Delete>
                        </S.MenuBlock>
                      )}
                  </S.CommentMenuImg>
                </S.CommentText>
                <S.LikeBlock>
                  <props.LikeImage
                    initialSrc="/images/volunteer/announcement/comment_like_icon.svg"
                    alt="comment_like_icon"
                  />
                  <S.LikeText>좋아요</S.LikeText>
                  <S.AddReplyText
                    onClick={() => {
                      props.activeReply(comment.id, comment.name);
                    }}
                  >
                    답글 달기
                  </S.AddReplyText>
                </S.LikeBlock>
              </S.CommentBlock>
              {comment.replies.map((reply, replyIndex) => (
                <S.ReplyBlock key={reply.id}>
                  <S.UserInfoItems>
                    <S.UserImgbox>
                      <Image
                        src="/images/volunteer/announcement/user_icon.svg"
                        alt="member_icon"
                        width={40}
                        height={40}
                        priority={true}
                      />
                    </S.UserImgbox>
                    <S.ReplyUser>
                      <S.UserName>{reply.name}</S.UserName>
                      <S.CommentTime>
                        {reply.region} {reply.hours}
                      </S.CommentTime>
                    </S.ReplyUser>
                  </S.UserInfoItems>
                  <S.CommentText>
                    <S.Reply>{reply.text}</S.Reply>
                    <S.ReplyMenuImg
                      onClick={() =>
                        props.handleMenuClick(comment.id, reply.id)
                      }
                    >
                      <Image
                        src="/images/header/menu_icon.svg"
                        alt="menu_icon"
                        width={30}
                        height={30}
                      />
                      {props.isReplyMenuClicked &&
                        props.clickedReplyID === reply.id &&
                        props.clickedCommentID === comment.id && (
                          <S.MenuBlock ref={props.wrapperRef}>
                            <S.Edit
                              onClick={() => props.activeReplyEdit(reply.text)}
                            >
                              수정하기
                            </S.Edit>
                            <S.Delete
                              onClick={() =>
                                props.handleDelete(comment.id, reply.id)
                              }
                            >
                              삭제하기
                            </S.Delete>
                          </S.MenuBlock>
                        )}
                    </S.ReplyMenuImg>
                  </S.CommentText>
                  <S.LikeBlock>
                    <props.LikeImage
                      initialSrc="/images/volunteer/announcement/comment_like_icon.svg"
                      alt="comment_like_icon"
                    />
                    <S.LikeText>좋아요</S.LikeText>
                  </S.LikeBlock>
                </S.ReplyBlock>
              ))}
            </S.Comments>
          ))}
        </S.CommentContainer>
      </S.WrapperContents>
      {props.isClickedReply ||
        props.isClickedEdit ||
        props.isClickedReplyEdit ? (
        <S.ToReplyBlock>
          {props.isClickedReply && <S.ToReply>댓글 다는중..</S.ToReply>}
          {props.isClickedEdit && <S.ToReply>댓글 수정중..</S.ToReply>}
          {props.isClickedReplyEdit && <S.ToReply>답글 수정중..</S.ToReply>}
          <S.ToReplyClose onClick={props.handleJudegeXClick}>X</S.ToReplyClose>
        </S.ToReplyBlock>
      ) : null}
      <S.AddCommentContainer>
        <S.AddCommentBlock>
          <S.OpenMenu>
            <Image
              src="/images/volunteer/announcement/open_menu.svg"
              alt="open_menu"
              width={20}
              height={20}
              priority={true}
            />
          </S.OpenMenu>
          <S.CommentInput
            autoFocus
            ref={props.focus}
            placeholder={
              props.isActiveComment === true
                ? "댓글을 입력해주세요"
                : props.isClickedReply
                  ? "답글을 입력해주세요"
                  : props.isClickedEdit
                    ? "댓글을 수정해주세요"
                    : props.isClickedReplyEdit
                      ? "답글을 수정해주세요"
                      : ""
            }
            type="text"
            value={
              props.isActiveComment === true
                ? props.newComment
                : props.isClickedReply
                  ? props.newComment
                  : props.isClickedEdit
                    ? props.newComment
                    : props.isClickedReplyEdit
                      ? props.newComment
                      : ""
            }
            onKeyDown={(e) => {
              {
                props.isActiveComment === true
                  ? props.handleCommentSubmit(e)
                  : props.isClickedReply
                    ? props.handleCommentSubmit(e)
                    : props.isClickedEdit
                      ? props.handleCommentSubmit(e)
                      : props.isClickedReplyEdit
                        ? props.handleCommentSubmit(e)
                        : "";
              }
            }}
            onChange={(e) => {
              {
                props.isActiveComment === true
                  ? props.handleCommentValue(e)
                  : props.isClickedReply
                    ? props.handleCommentValue(e)
                    : props.isClickedEdit
                      ? props.handleCommentValue(e)
                      : props.isClickedReplyEdit
                        ? props.handleCommentValue(e)
                        : "";
              }
            }}
          />
          <S.AddComment onClick={props.handleCommentSubmit}>
            <S.ArrowLine />
            <S.ArrowBlock />
          </S.AddComment>
        </S.AddCommentBlock>
      </S.AddCommentContainer>
    </>
  );
}
