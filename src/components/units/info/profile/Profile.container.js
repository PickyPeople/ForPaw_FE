import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ProfileUI from "./Profile.presenter";
import useLogOut from "./hooks/useLogOut";

export default function Profile() {
  const { navigateTo, navigateBack } = useNavigate();

  const paths = {
    edit: "/info/profile/edit",
    pw: "/info/profile/pw",
  };

  const { logOut } = useLogOut();

  return (
    <ProfileUI
      navigateTo={navigateTo}
      navigateBack={navigateBack}
      paths={paths}
      logOut={logOut}
    />
  );
}
