import {
  HappyMoodangContainer,
  HappyMoodangTitle,
  Button,
} from "./HappyMoodang.styles";

const HappyMoodang = (props) => {
  return (
    <HappyMoodangContainer>
      <HappyMoodangTitle>🎉 친구가 되어줘서 고마워요! 🎉</HappyMoodangTitle>
      <Button onClick={props.onClose}>돌아가기</Button>
    </HappyMoodangContainer>
  );
};

export default HappyMoodang;
