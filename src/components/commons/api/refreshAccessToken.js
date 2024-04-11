const refreshAccessToken = async () => {
  try {
    const response = await fetch("/api/refresh_token", {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("AccessToken 갱신 실패:", error);
  }
};

export default refreshAccessToken;
