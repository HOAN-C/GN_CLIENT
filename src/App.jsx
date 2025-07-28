import { useState, useEffect } from "react";
import EmailSubscribeForm from "./components/EmailSubscribeForm";
import Typewriter from "typewriter-effect";
import {
  AppContainer,
  Header,
  MooDangHouse,
  MooDang,
  Main,
  MooDangComment,
} from "./styles/AppStyles";
import 무당이 from "./images/무당이.png";
import 무당이2 from "./images/무당이_speaking.png";

function App() {
  const [isTyping, setIsTyping] = useState(false);
  const [currentImage, setCurrentImage] = useState(무당이);

  useEffect(() => {
    let interval;
    if (isTyping) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev === 무당이 ? 무당이2 : 무당이));
      }, 200);
    } else {
      setCurrentImage(무당이);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTyping]);

  return (
    <AppContainer>
      <Header>
        <MooDangHouse>
          <MooDang src={currentImage} alt="무당이" />
        </MooDangHouse>
      </Header>
      <Main>
        <MooDangComment>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => setIsTyping(true))
                .typeString("무당이가 알려주는 가천대 공지사항")
                .pauseFor(400)
                .callFunction(() => setIsTyping(false))
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => setIsTyping(true))
                .typeString("핵심만 쏙쏙 요약해드려요!")
                .pauseFor(400)
                .callFunction(() => setIsTyping(false))
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => setIsTyping(true))
                .typeString("이메일 주소만 입력하면 끝!")
                .pauseFor(400)
                .callFunction(() => setIsTyping(false))
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              delay: 60,
              cursor: "|",
              loop: true,
              autoStart: true,
            }}
          />
        </MooDangComment>

        <EmailSubscribeForm />
      </Main>
    </AppContainer>
  );
}

export default App;
