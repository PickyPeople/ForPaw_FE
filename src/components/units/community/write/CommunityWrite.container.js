import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import CommunityWriteUI from "./CommunityWrite.presenter";
import { useCategorySelection } from "./hooks/useCategorySelection";
import { usePhotoManager } from "./hooks/usePhotoManager";

export default function CommunityWrite() {
  const { title, category } = useCategorySelection();

  const { photos, isPhotoLimitReached, addPhoto, deletePhoto } =
    usePhotoManager();

  const { navigateBack } = useNavigate();

  return (
    <CommunityWriteUI
      title={title}
      category={category}
      photos={photos}
      isPhotoLimitReached={isPhotoLimitReached}
      addPhoto={addPhoto}
      deletePhoto={deletePhoto}
      navigateBack={navigateBack}
    />
  );
}
