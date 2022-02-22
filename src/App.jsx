import styled, { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
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
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;
const Clocks = styled.div`
  width: 150px;
  height: 180px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Node = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.active ? "#F5FF19" : !props.isDark ? "#393939" : "#ECEFF4"};
  border-radius: 50%;
  border: 2px dashed #212223;
`;

const Text = styled.div`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.isDark ? "white" : "#212223")};`;

function App() {
  const [isDark, setIsDark] = useState(true);
  const [hours, setHours] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [minutes, setMinutes] = useState([
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
  useEffect(() => {
    const interval = setInterval(() => {
      var date = new Date();
      var hours = date.getHours().toString(2);
      var minutes = date.getMinutes().toString(2);
      var seconds = date.getSeconds().toString(2);
      setHours(
        hours
          .padStart(6, "0")
          .split("")
          .map((x) => x === "1")
      );
      setMinutes(
        minutes
          .padStart(6, "0")
          .split("")
          .map((x) => x === "1")
      );
      setSeconds(
        seconds
          .padStart(6, "0")
          .split("")
          .map((x) => x === "1")
      );
      console.log(hours, minutes, seconds);
    }, 1000);
    return () => clearInterval(interval);
  });
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
          <div>
          <Clocks isDark={isDark} number={1}>
            {hours.map((hour, index) => (
              <Node key={index} isDark={isDark} active={hour}></Node>
            ))}
          </Clocks>
          <Text isDark={isDark}>Hours</Text>
          </div>
          <div>
          <Clocks isDark={isDark} number={2}>
            {minutes.map((minute, index) => (
              <Node key={index} isDark={isDark} active={minute}></Node>
            ))}
          </Clocks>
          <Text isDark={isDark}>Minutes</Text>
          </div>
          <div>
          <Clocks isDark={isDark} number={3}>
            {seconds.map((second, index) => (
              <Node key={index} isDark={isDark} active={second}></Node>
            ))}
          </Clocks>
          <Text isDark={isDark}>Seconds</Text>
          </div>
        </ClockContainer>
      </MainContainer>
    </div>
  );
}

export default App;
