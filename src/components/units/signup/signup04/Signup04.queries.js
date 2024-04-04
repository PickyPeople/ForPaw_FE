export const fetchUserInfo = async () => {
  try {
    const response = await fetch("https://your-api-endpoint.com/user/info", {
      method: "GET",
      headers: {
        Authorization: "Bearer your-token-here", // 필요한 경우 인증 헤더 추가
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }
    const data = await response.json();
    return data; // 응답 데이터 반환
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error; // 에러를 호출한 측으로 전파
  }
};

export const checkNickNameDuplication = async (nickName) => {
  try {
    const response = await fetch(
      "https://your-api-endpoint.com/nickname/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname: nickName }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // 서버 응답 반환
  } catch (error) {
    console.error("닉네임 체크 중 오류 발생:", error);
    throw error; // 에러 처리를 호출한 곳으로 전파
  }
};

export const sendUserInfo = async (userinfo) => {
  try {
    const response = await fetch("https://your-api-endpoint.com/user/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userinfo)
    });
    if(!response.ok) {
      throw new Error("Failed to send user info")
    }
  }catch(error) {
    console.error("Error sending user info:", error);
    throw error
  }
}