import { useSearchParams } from "react-router-dom";
import SignUpIntroPage from "./SignUpIntroPage";
import SignUpUserForm from "./SignUpUserForm";
import SignUpStoreForm from "./SignUpStoreForm";

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
