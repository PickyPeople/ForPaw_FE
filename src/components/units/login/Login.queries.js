const example = {
  success: true,
  code: 200,
  message: "OK",
  result: {
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5ZzA0MDc2QG5hdmVyLmNvbSIsInJvbGUiOjAsImlkIjo0LCJleHAiOjE3MDkxODczOTJ9.eNbI0c27wbdawElfKeCwgj0celLmJYyueb-XAaK7ZiS1kMQOwc4oW1HXs7GKFrX5CG4rx4ovbP_hEdaudACI2Q",
  },
};

export const requestLoginToken = async (email, password) => {
  try {
    // const response = await fetch("https://your-api-endpoint.com/Login/check", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // });

    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }

    // const data = await response.json();
    return example.result;
  } catch (error) {
    console.log("아이디 혹은 비밀번호가 잘못 되었습니다.", error);
  }
};
