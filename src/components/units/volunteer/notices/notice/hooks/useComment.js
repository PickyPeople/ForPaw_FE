import { useRef, useState, useEffect } from "react";
import { useClickMenu } from "./useClickMenu";

export const useComment = () => {
  const {
    setIsCommentMenuClicked,
    clickedCommentID,
    setClickedCommentID,
    setIsReplyMenuClicked,
    clickedReplyID,
  } = useClickMenu();

  const [comments, setComments] = useState([]); //input에서 입력한 값을 배열로서 받을 것이고 presenter에서 map 함수를 이용하여 사용할 것이다.

  const [newComment, setNewComment] = useState(""); //input안의 내용을 onChange로 받아줄 변수이다.
  const [newReply, setNewReply] = useState(""); //답글의 텍스트를 onChange로 받아줄 변수
  const [editCommentText, setEditCommentText] = useState(""); //댓글 수정내용을 받아오는 change함수에 들어가는 값
  const [editReplyText, setEditReplyText] = useState(""); //답글 수정내용을 받아오는 cchange함수에 들어가는 값

  const [isClickedReply, setIsClickedReply] = useState(false); //답글달기를 눌렀는가 판단하는 변수
  const [isClickedEdit, setIsClickedEidt] = useState(false); //댓글의 수정하기 메뉴를 눌렀을 경우
  const [isClickedReplyEdit, setIsClickedReplyEdit] = useState(false); //답글의 수정하기 메뉴를 눌렀을 경우

  const [commentIdNum, setCommentIdNum] = useState(0); // 삭제하기를 누르고 난 뒤 댓글id 값을 올려주기 위한 변수

  const focus = useRef(null); //input태그에 포커스를 주기 위해

  //input태그에 focus주기
  const nameFoucs = () => {
    if (focus.current !== null) {
      focus.current.focus();
    }
  };

  const handleCommentValue = (e) => {
    //Comment input값을 받아오는 기능
    setNewComment(e.target.value);
  };

  const handleReplyValue = (e) => {
    //Reply Input을 받아오는 기능
    setNewReply(e.target.value);
  };

  const handleChangeCommentEdit = (e) => {
    //수정값을 받아오는 기능
    setEditCommentText(e.target.value);
  };

  const handleChangeReplyEdit = (e) => {
    //답글 수정값을 받아오는 기능
    setEditReplyText(e.target.value);
  };

  //답글달기모드 활성화
  const activeReply = (commentID, userName) => {
    setIsClickedReply(true);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    setIsCommentMenuClicked(false);
    setNewComment("");
    setNewReply("");
    setClickedCommentID(commentID);
    // setName(userName);
    nameFoucs();
  };

  //댓글 수정모드를 활성화 밑의 text는 수정하기를 눌렀을 때 댓글의 텍스트를 받아오기 위해서
  const activeCommentEdit = (text) => {
    setIsClickedEidt(true);
    setIsClickedReply(false);
    setIsClickedReplyEdit(false);
    setNewComment("");
    setNewReply("");
    setEditReplyText("");
    setEditCommentText(text);
    nameFoucs();
  };

  //답글 수정모드 활성화
  const activeReplyEdit = (text) => {
    setIsClickedReplyEdit(true);
    setIsClickedReply(false);
    setIsClickedEidt(false);
    setNewComment("");
    setNewReply("");
    setEditCommentText("");
    setEditReplyText(text);
    nameFoucs();
  };

  const handleCommentSubmit = (e) => {
    if (
      (e.type === "click" && newComment.trim() !== "") ||
      (e.type === "keydown" && e.key === "Enter" && newComment.trim() !== "")
    ) {
      const newCommentObject = {
        //배열에 추가되는 정보들
        id: comments.length + 1 + commentIdNum,
        name: `닉네임${comments.length + 1 + commentIdNum}`,
        region: "지역",
        hours: "몇 시간전",
        text: newComment,
        replies: [],
        num: 0,
      };
      setComments([...comments, newCommentObject]);
      setNewComment("");
    } else if (
      (e.type === "click" && newReply.trim() !== "") ||
      (e.type === "keydown" && e.key === "Enter" && newReply.trim() !== "")
    ) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === clickedCommentID) {
          // 이부분을 확실히 해줘야함
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1 + comment.num,
                name: `답글 닉네임${comment.replies.length + 1 + comment.num}`,
                region: "지역",
                hours: "몇 시간전",
                text: newReply,
              },
            ],
          };
        } else {
          return comment;
        }
      });
      setComments(updatedComments);
      setNewReply("");
      setIsClickedReply(false); // 답글이 제출되면 isClickedReply를 false로 설정
    } else if (
      (e.type === "click" && editCommentText.trim() !== "") ||
      (e.type === "keydown" &&
        e.key === "Enter" &&
        editCommentText.trim() !== "")
    ) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === clickedCommentID) {
          return { ...comment, text: editCommentText };
        }
        return comment;
      });
      setComments(updatedComments);
      setIsCommentMenuClicked(false);
      setIsClickedEidt(false);
      setEditCommentText("");
    } else if (
      (e.type === "click" && editReplyText.trim() !== "") ||
      (e.type === "keydown" && e.key === "Enter" && editReplyText.trim() !== "")
    ) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === clickedCommentID) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === clickedReplyID) {
              return { ...reply, text: editReplyText };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      setComments(updatedComments);
      setIsReplyMenuClicked(false);
      setIsClickedReplyEdit(false);
      setEditReplyText("");
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
    setEditCommentText("");
    setEditReplyText("");
  };

  //답글달기 혹은 수정하기를 누르고 나오는 div의 영역의 X버튼을 누르는지 판단
  const handleJudegeXClick = () => {
    setIsClickedReply(false);
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    nameFoucs();
  };

  return {
    focus,
    comments,
    newComment,
    newReply,
    handleCommentValue,
    handleReplyValue,
    handleCommentSubmit,
    isClickedReply,
    activeReply,
    isClickedEdit,
    editCommentText,
    handleChangeCommentEdit,
    activeCommentEdit,
    isClickedReplyEdit,
    editReplyText,
    handleChangeReplyEdit,
    activeReplyEdit,
    handleJudegeXClick,
    handleDelete,
  };
};
