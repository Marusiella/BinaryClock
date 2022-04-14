import styled, { createGlobalStyle, css } from "styled-components";
import React, { useEffect, useState } from "react";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.isDark ? "#212223" : "#ECEFF4")};
    transition: background-color 0.2s ease;
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
    props.active ? "#419D78" : !props.isDark ? "#3D4D52" : "#DBD9DB"};
  border-radius: 50%;
  /* border: 2px solid ${(props) => (!props.isDark ? "#DBD9DB" : "#212223")}; */
  margin: 2px;
  ${(props) => props.active == true && css`-webkit-box-shadow: 0px 0px 54px 0px rgba(65, 157, 120, 1);
-moz-box-shadow: 0px 0px 54px 0px rgba(65, 157, 120, 1);
box-shadow: 0px 0px 54px 0px rgba(65, 157, 120, 1);`}
transition: all 0.15s ease-in-out;
`;

const Text = styled.div`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: bold;
  transition: all 0.15s ease-in-out;
  color: ${(props) => (props.isDark ? "white" : "#3D4D52")};
`;

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
      const date = new Date();
      const hoursBits = date.getHours().toString(2);
      const minutesBits = date.getMinutes().toString(2);
      const secondsBits = date.getSeconds().toString(2);
      setHours(
        hoursBits
          .padStart(6, "0")
          .split("")
          .map((x) => x === "1")
      );
      setMinutes(
        minutesBits
          .padStart(6, "0")
          .split("")
          .map((x) => x === "1")
      );
      setSeconds(
        secondsBits
          .padStart(6, "0")
          .split("")
          .map((x) => x === "1")
      );
      // console.log(hoursBits, minutesBits, secondsBits);
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
              // console.log(isDark);
            }}
          >
            {!isDark ? "☾" : "☼"}
          </Sun>
        </Navbar>
        <ClockContainer isDark={isDark}>
          <div>
            <Clocks isDark={isDark} number={1}>
              {hours.map((hour) => (
                <Node isDark={isDark} active={hour} />
              ))}
            </Clocks>
            <Text isDark={isDark}>Hours</Text>
          </div>
          <div>
            <Clocks isDark={isDark} number={2}>
              {minutes.map((minute) => (
                <Node isDark={isDark} active={minute} />
              ))}
            </Clocks>
            <Text isDark={isDark}>Minutes</Text>
          </div>
          <div>
            <Clocks isDark={isDark} number={3}>
              {seconds.map((second) => (
                <Node isDark={isDark} active={second} />
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
