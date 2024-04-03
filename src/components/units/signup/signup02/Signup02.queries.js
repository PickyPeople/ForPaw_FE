export const CheckEmailDuplication = async (email, code) => {
  try {
    const response = await fetch(
      "https://your-api-endpoint.com/Signup02EmailAndCode/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code : code
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

