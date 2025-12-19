import SignUpIntroPage from "@/pages/auth/SignUpIntroPage";
import SignUpStoreForm from "@/pages/auth/SignUpStoreForm";
import SignUpUserForm from "@/pages/auth/SignUpUserForm";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "intro";

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      alert('🔔 계정이 로그인 되어 있어 "/stores" 페이지로 리다이렉트 됩니다.');
      navigate("/stores", { replace: true });
    }
  }, [navigate]);

  if (type === "intro") {
    return <SignUpIntroPage />;
  } else if (type === "user") {
    return <SignUpUserForm />;
  } else if (type === "store") {
    return <SignUpStoreForm />;
  }
};

export default SignUpPage;
