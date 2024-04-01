import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import SearchUI from "./Search.presenter";

export default function Search() {
  const { navigateBack } = useNavigate();

  return <SearchUI navigateBack={navigateBack} />;
}
