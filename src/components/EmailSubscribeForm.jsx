import { useState } from "react";
import axios from "axios";
import { getApiUrl, API_ENDPOINTS } from "../config/api";
import {
  FormContainer,
  EmailInput,
  Message,
  SubscribeButton,
  Title,
} from "../styles/FormStyles";

export default function EmailSubscribeForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email.trim()) {
      setMsg("이메일을 입력해주세요.");
      return;
    }
    setLoading(true);
    try {
      const apiUrl = getApiUrl();
      const res = await axios.post(`${apiUrl}${API_ENDPOINTS.subscribe}`, {
        email,
      });
      setMsg(
        res.data.success
          ? "구독이 성공적으로 등록되었습니다! 🎉"
          : res.data.error
      );
      if (res.data.success) {
        setEmail("");
        setTimeout(() => setMsg(""), 3000);
      }
    } catch (error) {
      console.error("API 호출 오류:", error);
      setMsg("서버 연결에 실패했습니다.");
    }
    setLoading(false);
  };

  return (
    <FormContainer>
      <Title>이메일 알려주기</Title>
      <EmailInput
        type="email"
        placeholder="이메일 주소를 알려주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {msg && <Message success={msg.includes("성공")}>{msg}</Message>}
      <SubscribeButton onClick={submit} disabled={loading}>
        {loading ? "구독 중..." : "구독 신청"}
      </SubscribeButton>
    </FormContainer>
  );
}
