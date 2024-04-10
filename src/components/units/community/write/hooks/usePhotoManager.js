import { useState } from "react";

export const usePhotoManager = () => {
  const [photos, setPhotos] = useState([]);
  const [isPhotoLimitReached, setIsPhotoLimitReached] = useState(false); // 사진 개수 한계 도달 상태

  const maxPhotos = 5; // 최대 사진 개수 상수로 선언

  // 사진 추가 함수
  const addPhoto = () => {
    if (photos.length < maxPhotos) {
      const newPhotos = [...photos, `새 사진 ${photos.length + 1}`];
      setPhotos(newPhotos);
      // 사진 추가 후, 최대 개수에 도달했는지 확인하여 상태 업데이트
      setIsPhotoLimitReached(newPhotos.length === maxPhotos);
    }
  };

  const deletePhoto = (indexToDelete) => {
    setPhotos((currentPhotos) =>
      currentPhotos.filter((_, index) => index !== indexToDelete)
    );
    // 사진 삭제 후, 항상 최대 개수에 도달하지 않았다고 가정
    setIsPhotoLimitReached(false);
  };

  return {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
  };
};
