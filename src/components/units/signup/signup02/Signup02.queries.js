export const CheckEmailDuplication = async (email) => {
  try {
    const response = await fetch(
      "https://your-api-endpoint.com/Signup02Email/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email
        })
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log("사용불가능한 이메일입니다.");
  }
};

export const CheckCode = async (code) => {
  try {
    const response = await fetch(
      "https://your-api-endpoint.com/Signup02Code/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code
        })
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    };

    const data = await response.json();
    return data;

  } catch (error) {
    console.log("인증번호가 일치하지 않습니다.")
  }
}

