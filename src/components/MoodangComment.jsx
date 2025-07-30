import Typewriter from "typewriter-effect";
import { MoodangCommentContainer } from "./MoodangComment.styles";

const MoodangComment = (props) => {
  return (
    <MoodangCommentContainer role="banner" aria-label="무당이의 메시지">
      <Typewriter
        key={props.subScriberCount}
        onInit={(typewriter) => {
          typewriter
            .callFunction(() => props.setIsTyping(true))
            .typeString("무당이가 알려주는 가천대 공지사항")
            .pauseFor(400)
            .callFunction(() => props.setIsTyping(false))
            .pauseFor(1000)
            .deleteAll(25)
            .callFunction(() => props.setIsTyping(true))
            .typeString("핵심만 쏙쏙 요약해드려요!")
            .pauseFor(400)
            .callFunction(() => props.setIsTyping(false))
            .pauseFor(1000)
            .deleteAll(25)
            .callFunction(() => props.setIsTyping(true))
            .typeString("이메일 주소만 입력하면 끝!")
            .pauseFor(400)
            .callFunction(() => props.setIsTyping(false))
            .pauseFor(1000)
            .deleteAll(25)
            .callFunction(() => props.setIsTyping(true))
            .typeString(`${props.subScriberCount}명의 친구들이 알림을 받고 있어요!`)
            .pauseFor(400)
            .callFunction(() => props.setIsTyping(false))
            .pauseFor(1000)
            .deleteAll(25)
            .start();
        }}
        options={{
          delay: 60,
          cursor: "|",
          loop: true,
          autoStart: true,
        }}
      />
    </MoodangCommentContainer>
  );
};

export default MoodangComment;
