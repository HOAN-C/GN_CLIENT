import { useState } from "react";
import axios from "axios";
import { getApiUrl, API_ENDPOINTS } from "../config/api";
import {
  FormContainer,
  EmailInput,
  Message,
  SubscribeButton,
  Title,
} from "./FormStyles";

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
      const res = await axios.post(`${apiUrl}${API_ENDPOINTS.unsubscribe}`, {
        email,
      });
      setMsg(
        res.data.success
          ? "구독이 취소되었습니다..🥺 다음에 만나요!"
          : res.data.error
      );
      if (res.data.success) {
        setEmail("");
        setTimeout(() => setMsg(""), 3000);
      }
    } catch (error) {
      console.error("API 호출 오류:", error);
      setMsg(error.response.data.error);
    }
    setLoading(false);
  };

  return (
    <FormContainer role="form" aria-label="이메일 구독 취소 폼">
      <Title id="form-title">
        <span style={{ color: "rgb(251, 77, 77)" }}>구독 취소</span>할
        이메일을 입력하세요
      </Title>
      <EmailInput
        type="email"
        placeholder="📧 이메일 주소 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-labelledby="form-title"
        aria-describedby={msg ? "form-message" : undefined}
        aria-required="true"
      />
      {msg && (
        <Message
          id="form-message"
          $success={msg.includes("성공")}
          role="alert"
          aria-live="polite"
        >
          {msg}
        </Message>
      )}
      <SubscribeButton
        onClick={submit}
        disabled={loading || email.length === 0}
        aria-describedby={loading ? "loading-status" : undefined}
      >
        {loading ? "취소 중..." : "구독 취소"}
      </SubscribeButton>
    </FormContainer>
  );
}
