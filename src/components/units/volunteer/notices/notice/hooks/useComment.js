import { useRef, useState, useEffect } from "react";
import { useClickMenu } from "./useClickMenu";

export const useComment = () => {
  const {
    isCommentMenuClicked,
    setIsCommentMenuClicked,
    isReplyMenuClicked,
    setIsReplyMenuClicked,
    clickedCommentID,
    setClickedCommentID,
    clickedReplyID,
    wrapperRef,
    handleMenuClick,
  } = useClickMenu();

  const [comments, setComments] = useState([]); //input에서 입력한 값을 배열로서 받을 것이고 presenter에서 map 함수를 이용하여 사용할 것이다.
  const [content, setContent] = useState(""); //input안의 내용을 onChange로 받아줄 변수이다.
  const [isActiveComment, setIsActiveComment] = useState(true);
  const [isClickedReply, setIsClickedReply] = useState(false); //답글달기를 눌렀는가 판단하는 변수
  const [isClickedEdit, setIsClickedEidt] = useState(false); //댓글의 수정하기 메뉴를 눌렀을 경우
  const [isClickedReplyEdit, setIsClickedReplyEdit] = useState(false); //답글의 수정하기 메뉴를 눌렀을 경우
  const [commentIdNum, setCommentIdNum] = useState(0); // 삭제하기를 누르고 난 뒤 댓글id 값을 올려주기 위한 변수
  const [name, setName] = useState(""); //답글 달기에 이름을 주기 위해서
  const nameLength = name.length;
  //const [actionTypeReply, setActionTypeReply] = useState(true);

  const focus = useRef(null); //input태그에 포커스를 주기 위해

  //input태그에 focus주기
  const nameFoucs = () => {
    if (focus.current !== null) {
      focus.current.focus();
    }
  };

  //Comment input값을 받아오는 기능
  const handleContentValue = (e) => {
    setContent(e.target.value);
  };

  //답글달기모드 활성화
  const activeReply = (e, commentID, name) => {
    setIsClickedReply(true);
    setIsActiveComment(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
    setContent("@" + name + " ");
    setName(name);
    setClickedCommentID(commentID);
    nameFoucs();
  };

  //댓글 수정모드를 활성화
  const activeCommentEdit = (content) => {
    setIsClickedEidt(true);
    setIsActiveComment(false);
    setIsClickedReply(false);
    setIsClickedReplyEdit(false);
    setContent(content);
    nameFoucs();
  };

  //답글 수정모드 활성화
  const activeReplyEdit = (content) => {
    setIsClickedReplyEdit(true);
    setIsActiveComment(false);
    setIsClickedReply(false);
    setIsClickedEidt(false);
    setContent(content);
    nameFoucs();
  };

  const handleContentSubmit = (e) => { //post통신으로 가게끔 만들어줄 필요가 있어보인다.
    if (
      (e.type === "click" && content.trim() !== "" && isActiveComment == true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isActiveComment == true)
    ) {
      const newCommentObject = {
        //배열에 추가되는 정보들
        id: comments.length + 1 + commentIdNum,
        name: `닉네임${comments.length + 1 + commentIdNum}`,
        location: "지역",
        date: "몇 시간전",
        content: content,
        replies: [],
        num: 0,
      };
      setComments([...comments, newCommentObject]);
      setContent("");
    } else if (
      (e.type === "click" && content.trim() !== "" && isClickedReply === true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isClickedReply === true)
    ) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === clickedCommentID) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1 + comment.num,
                name: `답글 닉네임${comment.replies.length + 1 + comment.num}`,
                location: "지역",
                date: "몇 시간전",
                content: name + content.substring(nameLength + 1, content.length),
              },
            ],
          };
        } else {
          return comment;
        }
      });
      setComments(updatedComments);
      setIsActiveComment(true);
      setContent("");
      setIsClickedReply(false); // 답글이 제출되면 isClickedReply를 false로 설정
    } else if (
      (e.type === "click" && content.trim() !== "" && isClickedEdit === true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isClickedEdit === true)
    ) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === clickedCommentID) {
          return { ...comment, content: content };
        }
        return comment;
      });
      setIsActiveComment(true);
      setComments(updatedComments);
      setIsCommentMenuClicked(false);
      setIsClickedEidt(false);
      setContent("");
    } else if (
      (e.type === "click" &&
        content.trim() !== "" &&
        isClickedReplyEdit === true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isClickedReplyEdit === true)
    ) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === clickedCommentID) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === clickedReplyID) {
              return { ...reply, content: content };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      setIsActiveComment(true);
      setComments(updatedComments);
      setIsReplyMenuClicked(false);
      setIsClickedReplyEdit(false);
      setContent("");
    }
  };

  // 댓글 삭제기능
  const handleDelete = (commentID, replyID) => {
    if (replyID === null) {
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentID
      );
      setComments(updatedComments);
      setCommentIdNum(commentIdNum + 1); //삭제하기를 클릭하여 id값을 눌려주기 위해
    } else {
      // 답글 삭제
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentID) {
          // 현재 댓글의 replies 배열에서 해당 답글 제외
          const updatedReplies = comment.replies.filter(
            (reply) => reply.id !== replyID
          );
          return { ...comment, replies: updatedReplies, num: comment.num + 1 };
        }
        return comment;
      });
      setComments(updatedComments);
    }
    setIsClickedReply(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
  };

  //답글달기 혹은 수정하기를 누르고 나오는 div의 영역의 X버튼을 누르는지 판단
  const handleJudegeXClick = () => {
    setIsActiveComment(true);
    setIsClickedReply(false);
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    setContent("");
    nameFoucs();
  };

  return {
    isCommentMenuClicked,
    clickedCommentID,
    isReplyMenuClicked,
    clickedReplyID,
    wrapperRef,
    handleMenuClick,
    focus,
    comments,
    content,
    isActiveComment,
    handleContentValue,
    name,
    isClickedReply,
    activeReply,
    isClickedEdit,
    activeCommentEdit,
    isClickedReplyEdit,
    activeReplyEdit,
    handleContentSubmit,
    handleJudegeXClick,
    handleDelete,
  };
};
