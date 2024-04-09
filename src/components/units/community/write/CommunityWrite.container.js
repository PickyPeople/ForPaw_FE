import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import CommunityWriteUI from "./CommunityWrite.presenter";
import { useCategorySelection } from "./hooks/useCategorySelection";
import { usePhotoManager } from "./hooks/usePhotoManager";

export default function CommunityWrite() {
  const {
    wrapperRef,
    categories,
    selectedCategory,
    isCategoryFocused,
    isCategoryDropdownOpen,
    handleCategorySelect,
    categoryToggleDropdown,
  } = useCategorySelection();

  const { photos, addPhoto, deletePhoto } = usePhotoManager();

  const { navigateBack } = useNavigate();

  return (
    <CommunityWriteUI
      wrapperRef={wrapperRef}
      categories={categories}
      selectedCategory={selectedCategory}
      isCategoryFocused={isCategoryFocused}
      isCategoryDropdownOpen={isCategoryDropdownOpen}
      handleCategorySelect={handleCategorySelect}
      categoryToggleDropdown={categoryToggleDropdown}
      photos={photos}
      addPhoto={addPhoto}
      deletePhoto={deletePhoto}
      navigateBack={navigateBack}
    />
  );
}
