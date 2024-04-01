export const checkLoginAvailability = async (email, password) => {
  try {
    const response = await fetch(
      "https://your-api-endpoint.com/Login/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("아이디 혹은 비밀번호가 잘못 되었습니다.", error);
  }
}