import { useState, useEffect } from "react";
import EmailSubscribeForm from "./components/EmailSubscribeForm";
import EmailUnsubscribeForm from "./components/EmailUnsubscribeForm";
import MoodangComment from "./components/MoodangComment";

import axios from "axios";
import { getApiUrl, API_ENDPOINTS } from "./config/api";
import {
  AppContainer,
  Header,
  MooDangHouse,
  MooDang,
  Main,
  MooDangComment,
} from "./AppStyles";
import 무당이 from "./images/무당이.png";
import 무당이2 from "./images/무당이_speaking.png";
import Footer from "./components/Footer";
import HappyMoodang from "./components/HappyMoodang";

function App() {
  const [isTyping, setIsTyping] = useState(false);
  const [currentImage, setCurrentImage] = useState(무당이);
  const [showUnsubscribeForm, setShowUnsubscribeForm] = useState(false);
  const [subScriberCount, setSubScriberCount] = useState(0);
  const [MoodangIsHappy, setMoodangIsHappy] = useState(false);

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      const apiUrl = getApiUrl();
      const res = await axios.get(`${apiUrl}${API_ENDPOINTS.subscriberCount}`);
      setSubScriberCount(res.data.count);
    };
    fetchSubscriberCount();
  }, []);

  useEffect(() => {
    if (MoodangIsHappy) {
      setShowUnsubscribeForm(false);
    }
  }, [MoodangIsHappy]);

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
        <h1 style={{ display: "none" }}>가천대 공지 알리미</h1>
        <MooDangHouse $isHappy={MoodangIsHappy}>
          <MooDang
            src={currentImage}
            alt="무당이 캐릭터 - 가천대 공지 알리미 마스코트"
          />
        </MooDangHouse>
      </Header>
      <Main>
        {MoodangIsHappy ? (
          <HappyMoodang
            count={subScriberCount}
            onClose={() => setMoodangIsHappy(false)}
          />
        ) : (
          <>
            <MoodangComment
              subScriberCount={subScriberCount}
              setIsTyping={setIsTyping}
            />

            {showUnsubscribeForm ? (
              <EmailUnsubscribeForm />
            ) : (
              <EmailSubscribeForm onSuccess={() => setMoodangIsHappy(true)} />
            )}

            {showUnsubscribeForm ? (
              <button
                style={{ marginTop: "10px", color: "rgb(59, 60, 70)" }}
                onClick={() => setShowUnsubscribeForm(false)}
              >
                구독 신청
              </button>
            ) : (
              <button
                style={{ marginTop: "10px", color: "rgb(59, 60, 70)" }}
                onClick={() => setShowUnsubscribeForm(true)}
              >
                구독 취소
              </button>
            )}
          </>
        )}

        <Footer />
      </Main>
    </AppContainer>
  );
}

export default App;
