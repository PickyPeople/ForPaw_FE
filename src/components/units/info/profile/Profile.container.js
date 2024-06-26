import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ProfileUI from "./Profile.presenter";
import useLogout from "./hooks/useLogOut";

export default function Profile() {
  const { navigateTo, navigateBack } = useNavigate();

  const paths = {
    edit: "/info/profile/edit",
    pw: "/info/profile/pw",
  };

  const { logout } = useLogout();

  return (
    <ProfileUI
      navigateTo={navigateTo}
      navigateBack={navigateBack}
      paths={paths}
      logout={logout}
    />
  );
}
