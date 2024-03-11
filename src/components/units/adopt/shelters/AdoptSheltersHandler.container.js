import { useRouter } from "next/router";
import AdoptSheltersHandlerUI from "./AdoptSheltersHandler.presenter";

export default function AdoptSheltersHandler() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  const navigateTo = (path) => () => router.push(path);

  const paths = {
    detail: "/adopt/shelters/detail",
    rescues: "/adopt/shelters/detail/rescues",
  };

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <AdoptSheltersHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
        navigateBack={navigateBack}
      />
    </>
  );
}
