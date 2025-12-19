import SignUpIntroPage from "@/pages/auth/SignUpIntroPage";
import SignUpStoreForm from "@/pages/auth/SignUpStoreForm";
import SignUpUserForm from "@/pages/auth/SignUpUserForm";
import { useSearchParams } from "react-router-dom";

const SignUpPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "intro";

  if (type === "intro") {
    return <SignUpIntroPage />;
  } else if (type === "user") {
    return <SignUpUserForm />;
  } else if (type === "store") {
    return <SignUpStoreForm />;
  }
};

export default SignUpPage;
