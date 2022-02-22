import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => (props.isDark ? "#212223" : "#ECEFF4")};
  }`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Navbar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const Sun = styled.button`
  color: ${props => (props.isDark ? "#ECEFF4" : "#212223")};
  font-size: 50px;
  margin-right: ${props => props.isDark ? "10px" : "17px"};
  border: none;
  background-color: transparent;
`;
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <Global isDark={isDark}/>
      <MainContainer>
        <Navbar>
          <Sun isDark={isDark} onClick={()=>{setIsDark(!isDark);console.log(isDark)}}>{!isDark?"☾":"☼"}</Sun>
        </Navbar>
      </MainContainer>
    </div>
  );
}

export default App;
