import { useRouter } from "next/router";
import VolunteerHandlerUI from "./VolunteerHandler.presenter";
import { useLoginStatusCheck } from "../../commons/hooks/useLoginStatusCheck";
import useModalStore from "../../../store/useModalStore";

export default function VolunteerHandler() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();

  const isActive = (path) => {
    return router.pathname === path;
  };

  const navigateTo = (path) => () => router.push(path);

  const paths = {
    recommend: "/volunteer/recommend",
    region: "/volunteer/region",
    joined: "/volunteer/joined",
  };

  const handleFavClick = (path) => {
    if (!isLoggedIn) {
      openModal();
    } else {
      router.push(path);
    }
  }

  return (
    <>
      <VolunteerHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        handleFavClick={handleFavClick}
        paths={paths}
      />
    </>
  );
}
