import { useRef, useState } from "react";
import { useClickMenu } from "./useClickMenu";
import {
  sendComment,
  sendCommentEdit,
  sendDelete,
  sendReply,
  sendReplyEdit,
} from "../Notice.quries";

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

  const [content, setContent] = useState(""); //input안의 내용을 onChange로 받아줄 변수이다.
  const [isActiveComment, setIsActiveComment] = useState(true);
  const [isClickedReply, setIsClickedReply] = useState(false); //답글달기를 눌렀는가 판단하는 변수
  const [isClickedEdit, setIsClickedEidt] = useState(false); //댓글의 수정하기 메뉴를 눌렀을 경우
  const [isClickedReplyEdit, setIsClickedReplyEdit] = useState(false); //답글의 수정하기 메뉴를 눌렀을 경우
  const [name, setName] = useState(""); //답글 달기에 이름을 주기 위해서
  const nameLength = name.length;

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

  const handleContentSubmit = async (e) => {
    //post통신으로 가게끔 만들어줄 필요가 있어보인다.
    if (
      //댓글을 보내기 위한 조건들
      (e.type === "click" &&
        content.trim() !== "" &&
        isActiveComment == true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isActiveComment == true)
    ) {
      //댓글을 보내는 코드들 api문서에 보내는 것이기 때문에 내가 보낼 것은 content만 취득하면 된다.
      try {
        const data = await sendComment(content);
        console.log(`댓글: ${data}`);
      } catch (error) {
        console.log("댓글을 달 수 없습니다.");
      }
      setContent("");
    } else if (
      //답글을 보내기 위한 조건들
      (e.type === "click" &&
        content.trim() !== "" &&
        isClickedReply === true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isClickedReply === true)
    ) {
      //답글의 내용을 api문서에 보내기 위한 코드
      try {
        const data = await sendReply(
          name + content.substring(nameLength + 1, content.length)
        );
        console.log(`답글: ${data}`);
      } catch (error) {
        console.log("답글을 보낼 수 없습니다.");
      }
      setIsActiveComment(true);
      setContent("");
      setIsClickedReply(false);
    } else if (
      //댓글 수정을 하기 위한 조건들
      (e.type === "click" && content.trim() !== "" && isClickedEdit === true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isClickedEdit === true)
    ) {
      try {
        const data = await sendCommentEdit(content);
        console.log(`댓글 수정내용: ${data}`);
      } catch (error) {
        console.log("댓글 수정 실패");
      }
      setIsActiveComment(true);
      setIsCommentMenuClicked(false);
      setIsClickedEidt(false);
      setContent("");
    } else if (
      //답글을 수정하기 위한 조건들
      (e.type === "click" &&
        content.trim() !== "" &&
        isClickedReplyEdit === true) ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        content.trim() !== "" &&
        isClickedReplyEdit === true)
    ) {
      try {
        const data = await sendReplyEdit(content);
        console.log(`답글 수정: ${data}`);
      } catch (error) {
        console.log("답글 수정 실해");
      }
      setIsActiveComment(true);
      setIsReplyMenuClicked(false);
      setIsClickedReplyEdit(false);
      setContent("");
    }
  };

  // 댓글 삭제기능
  const handleDelete = async (commentID, replyID) => {
    if (replyID === null) {
      try {
        const data = await sendDelete();
        console.log("댓글 삭제 완료");
      } catch (error) {
        console.log("댓글 삭제 실패");
      }
    } else {
      // 답글 삭제
      try {
        const data = await sendDelete();
        console.log("답글 삭제 완료");
      } catch (error) {
        console.log("답글 삭제 실패");
      }
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
