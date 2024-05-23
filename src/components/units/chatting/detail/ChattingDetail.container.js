import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailUI from "./ChattingDetail.presenter";
import { useSearchSideMenu } from "./hook/useSideMenu";

export default function ChattingDetail() {
  const { isSearchOpen, toggleSearch, isSideMenuOpen, toggleSideMenu } =
    useSearchSideMenu();
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailUI
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
        isSideMenuOpen={isSideMenuOpen}
        toggleSideMenu={toggleSideMenu}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
    </>
  );
}
