import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  background-color: white;
  margin: 0 auto;
  filter: ${(props) => (props.active ? "brightness(0.8)" : "brightness(1.0)")};
`;

export const Blank = styled.div`
  width: 390px;
  height: 45px;
`;

export const Header = styled.div`
  width: 344px;
  height: 50px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 
`;

export const LeftArrowTitleContainer = styled.div`
  width: 298px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const LeftArrowImg = styled.div`
  width: 23px;
  height: 29px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  width: 126px;
  height: 29px;
  font-size: 24px;
  margin-left: 3px;
  letter-spacing: -1.3px;
`;

export const MenuContainer = styled.div`
  width: 44px;
  height: 44px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuBlock = styled.ul`
  width: 164px;
  height: 112px;
  border-radius: 10px;
  background-color: white;
  position: relative;
  left: 204px;
  
  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.10);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.li`
  width: 100%;
  height: 56px;
  font-size: 20px;
  font-weight: 500;
  color: black;
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Report = styled.li`
  width: 100%;
  height: 56px;
  font-size: 20px;
  font-weight: 500;
  color: #FF6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;