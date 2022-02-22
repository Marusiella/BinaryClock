import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.isDark ? "#212223" : "#ECEFF4")};
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
  color: ${(props) => (props.isDark ? "#ECEFF4" : "#212223")};
  font-size: 50px;
  margin-right: ${(props) => (props.isDark ? "10px" : "17px")};
  border: none;
  background-color: transparent;
`;
const ClockContainer = styled.div`
  width: 70%;
  height: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Clocks = styled.div`
  width: calc(100% / 3);
  height: 180px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
const Node = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.active ? "#2F3C7E" : !props.isDark ? "#212223" : "#ECEFF4"};
  border-radius: 50%;
  border: 2px dashed ${(props) => (!props.isDark ? "#ECEFF4" : "#212223")};
`;
function App() {
  const [isDark, setIsDark] = useState(false);
  const [minutes, setMinutes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [hours, setHours] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [seconds, setSeconds] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div>
      <Global isDark={isDark} />
      <MainContainer>
        <Navbar>
          <Sun
            isDark={isDark}
            onClick={() => {
              setIsDark(!isDark);
              console.log(isDark);
            }}
          >
            {!isDark ? "☾" : "☼"}
          </Sun>
        </Navbar>
        <ClockContainer isDark={isDark}>
          <Clocks isDark={isDark}>
            {hours.map((hour, index) => (
              <Node key={index} isDark={isDark} active={hour}></Node>
            ))}
          </Clocks>
          <Clocks isDark={isDark}>
            {minutes.map((minute, index) => (
              <Node key={index} isDark={isDark} active={minute}></Node>
            ))}
          </Clocks>
          <Clocks isDark={isDark}>
            {seconds.map((second, index) => (
              <Node key={index} isDark={isDark} active={second}></Node>
            ))}
          </Clocks>
        </ClockContainer>
      </MainContainer>
    </div>
  );
}

export default App;
