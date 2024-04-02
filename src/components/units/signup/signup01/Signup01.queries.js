export const sendUserName = async (name) => {
  try {
    const response = await fetch(
      "https://your-api-endpoint.com/Signup01/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name
        })
      }
    );
    
    if(!response.ok){
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("이름을 확인하여 주십시오");
  }
}