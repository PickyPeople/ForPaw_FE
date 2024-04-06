import LikeImage from './component/LikeImage';
import NoticeUI from './notice.presenter';
import VolunteerDetailHeader from '../../detail/volunteerDetailHeader/VolunteerDetailHeader.container';
import { useRef, useState, useEffect } from 'react';

export default function Notice() {
  const [isCommentMenuClicked, setIsCommentMenuClicked] = useState(false);
  const [clickedCommentID, setClickedCommentID] = useState(null); // 클릭된 댓글의 ID를 관리합니다.
  const [isReplyMenuClicked, setIsReplyMenuClicked] = useState(false);
  const [selectedCommentID, setSelectedCommentID] = useState(null); // 클릭된 댓글의 ID를 관리합니다.
  const [clickedReplyID, setClickedReplyID] = useState(null); // 클릭된 답글의 ID를 관리한다. 메뉴보이게끔 하는 용도

  const wrapperRef = useRef(null);

  // 코멘트 메뉴 클릭 시 보이게끔 true로 설정
  const handleCommentMenuClick = (commentID ,replyID) => {
    if (replyID == null) {
      setIsCommentMenuClicked(true);
      setIsReplyMenuClicked(false);
      setClickedCommentID(commentID); // 클릭된 댓글의 ID를 설정합니다.
      setSelectedCommentID(commentID);
    } else {
      setIsCommentMenuClicked(false);
      setIsReplyMenuClicked(true);
      setClickedReplyID(replyID);
      setSelectedCommentID(commentID);
    }
  };

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // 메뉴창 닫기
        setIsCommentMenuClicked(false);
        setIsReplyMenuClicked(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  /////////////////////////////////////////////////////////////////

  const [comments, setComments] = useState([]); //input에서 입력한 값을 배열로서 받을 것이고 presenter에서 map 함수를 이용하여 사용할 것이다.
  const [newComment, setNewComment] = useState(''); //input안의 내용을 onChange로 받아줄 함수이다.
  const [newReply, setNewReply] = useState('');
  const [targetCommentID, setTargetCommentID] = useState(null); // 내가 클릭한 답글의 id번호를 취득하는  변수
  const [name, setName] = useState(''); //답글달기를 클릭한 유저닉네임을 가져오는 변수

  const [isClickedReply, setIsClickedReply] = useState(false); //답글달기를 눌렀는가 판단하는 변수
  const [isClickedEdit, setIsClickedEidt] = useState(false); //댓글의 수정하기 메뉴를 눌렀을 경우
  const [editCommentText, setEditCommentText] = useState(''); //댓글 수정내용을 받아오는 change함수에 들어가는 값
  const [isClickedReplyEdit, setIsClickedReplyEdit] = useState(false); //답글의 수정하기 메뉴를 눌렀을 경우
  const [editReplyText, setEditReplyText] = useState(''); //답글 수정내용을 받아오는 cchange함수에 들어가는 값

  //Comment input값을 받아오는 기능
  const handleCommentValue = (e) => {
    setNewComment(e.target.value)
  };

  //Reply Input을 받아오는 기능
  const handleReplyValue = (e) => {
    setNewReply(e.target.value);
  };

  const handleChangeCommentEdit = (e) => { //수정값을 받아오는 기능
    setEditCommentText(e.target.value);
  };

  const handleChangeReplyEdit = (e) => { //답글 수정값을 받아오는 기능
    setEditReplyText(e.target.value);
  };

  //답글달기모드 활성화
  const activeReply = (commentID, userName) => {
    setIsClickedReply(true);
    setIsReplyMenuClicked(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    setNewComment('');
    setNewReply('');
    setTargetCommentID(commentID);
    setName(userName);
  };

  //댓글 수정모드를 활성화 밑의 text는 수정하기를 눌렀을 때 댓글의 텍스트를 받아오기 위해서
  const activeCommentEdit = (text) => {
    setIsClickedEidt(true);
    setIsClickedReply(false);
    setIsClickedReplyEdit(false);
    setNewComment('');
    setNewReply('');
    setEditReplyText('');
    setEditCommentText(text);
  };
  //답글 수정모드 활성화
  const activeReplyEdit = (text) => {
    setIsClickedReplyEdit(true);
    setIsClickedReply(false);
    setIsClickedEidt(false);
    setNewComment('');
    setNewReply('');
    setEditCommentText('');
    setEditReplyText(text);
  }

  //댓글 or 답글을 다는 기능
  const handleCommentSubmit = (e) => {
    if (e.key === 'Enter' && newComment.trim() !== "") {
      const newCommentObject = { //배열에 추가되는 정보들
        id: comments.length + 1,
        name: `닉네임${comments.length + 1}`,
        region: '지역',
        hours: '몇 시간전',
        text: newComment,
        replies: []
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
      setIsCommentMenuClicked(false);
    } else if (e.key === 'Enter' && newReply.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === targetCommentID) { // 이부분을 확실히 해줘야함
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1,
                name: `답글 닉네임${comment.replies.length + 1}`,
                region: '지역',
                hours: '몇 시간전',
                text: newReply
              }
            ]
          };
        } else {
          return comment;
        }
      });
      setComments(updatedComments);
      setNewReply('');
      setIsClickedReply(false); // 답글이 제출되면 isClickedReply를 false로 설정
    }
    //댓글 혹은 답글을 수정하는 기능
    if (e.key === 'Enter' && editCommentText.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === clickedCommentID) {
          return { ...comment, text: editCommentText };
        }
        return comment;
      });
      setComments(updatedComments);
      setIsClickedEidt(false);
      setEditCommentText('');
    } else if (e.key === 'Enter' && editReplyText.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === selectedCommentID) {
          const updatedReplies = comment.replies.map(reply => {
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
      setIsClickedReplyEdit(false);
      setEditReplyText('');
    } else if (e.key === 'Enter' && editReplyText.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === selectedCommentID) {
          const updatedReplies = comment.replies.map(reply => {
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
      setIsClickedReplyEdit(false);
      setEditReplyText('');
    }
  };

  //답글달기 혹은 수정하기를 누르고 나오는 X div의 영역을 누르는지 판단
  const handleJudegeXClick = () => {
    setIsClickedReply(false);
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    setEditCommentText('');
    setEditReplyText('');
  };

  //버튼을 눌렸을 때 댓글을 달수 있도록 해주는 함수
  const activeBtn = () => {
    if (isClickedReply == false && newComment.trim() !== "") {
      const newCommentObject = { //배열에 추가되는 정보들
        id: comments.length + 1,
        name: `닉네임${comments.length + 1}`,
        region: '지역',
        hours: '몇 시간전',
        text: newComment,
        replies: []
      };

      setComments([...comments, newCommentObject]);
      setNewComment('');
    } else if (isClickedReply && newReply.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === targetCommentID) { // 이부분을 확실히 해줘야함
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1,
                name: `답글 닉네임${comment.replies.length + 1}`,
                region: '지역',
                hours: '몇 시간전',
                text: newReply
              }
            ]
          };
        } else {
          return comment;
        }
      });
      setComments(updatedComments);
      setNewReply('');
      setIsClickedReply(false); // 답글이 제출되면 isClickedReply를 false로 설정
    } else if (isClickedEdit && editCommentText.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === clickedCommentID) {
          return { ...comment, text: editCommentText };
        }
        return comment;
      });
      setComments(updatedComments);
      setIsClickedEidt(false);
      setEditCommentText('');
    } else if (isClickedReplyEdit && editReplyText.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === selectedCommentID) {
          const updatedReplies = comment.replies.map(reply => {
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
      setIsClickedReplyEdit(false);
      setEditReplyText('');
    }
  };

  return (
    <>
      <VolunteerDetailHeader />
      <NoticeUI
        LikeImage={LikeImage} //좋아요 버튼을 위한 컴포넌트
        wrapperRef={wrapperRef} //메뉴창 내/외부 판단

        comments={comments}
        newComment={newComment}
        newReply={newReply}

        handleCommentValue={handleCommentValue} //댓글 텍스트를 받아오는 값
        handleReplyValue={handleReplyValue} //답글 텍스트를 받아오는 값
        handleCommentSubmit={handleCommentSubmit} //댓글을 등록하기 위한 기능

        isClickedReply={isClickedReply} //답글 달기를 눌렀는지를 판단하는 변수
        activeReply={activeReply} // 

        activeBtn={activeBtn} //댓글이나 답글을 보내는 버튼

        isCommentMenuClicked={isCommentMenuClicked}
        handleCommentMenuClick={handleCommentMenuClick}
        clickedCommentID={clickedCommentID}

        isReplyMenuClicked={isReplyMenuClicked}
        clickedReplyID={clickedReplyID}

        selectedCommentID={selectedCommentID}

        name={name} //답글달기를 클릭하였을 때 유저 닉네임을 가져오기 위한 변수
        handleJudegeXClick={handleJudegeXClick}

        handleDelete={handleDelete} //댓글 삭제 기능

        isClickedEdit={isClickedEdit} //수정하기를 클릭하였는지 판단
        editCommentText={editCommentText}
        handleChangeCommentEdit={handleChangeCommentEdit}//onChange함수에 넣어줄 기능
        activeCommentEdit={activeCommentEdit}

        isClickedReplyEdit={isClickedReplyEdit} //답글 수정하기를 눌렀는가 판단
        editReplyText={editReplyText}

        handleChangeReplyEdit={handleChangeReplyEdit} //답글의 수정내용 전달 기능
        activeReplyEdit={activeReplyEdit}
      />
    </>
  );
}