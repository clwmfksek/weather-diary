import useWeather from "../hooks/useWeather";
import styled from "styled-components";
import spinner from "../assets/spinner.gif";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import * as st from "../utils/storage";

export default function Loading() {
  const weatherData = useWeather().weather;
  const navigate = useNavigate();
  useEffect(() => {
    if (weatherData !== "") {
      st.saveTemp(weatherData);
      navigate("/home");
    }
  }, [weatherData, navigate]);

  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src={spinner} alt="로딩중" width="5%" />
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
`;
