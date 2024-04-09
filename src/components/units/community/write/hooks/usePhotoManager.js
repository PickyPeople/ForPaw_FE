import { useState } from "react";

export const usePhotoManager = () => {
  const [photos, setPhotos] = useState([]); // 사진을 저장할 배열 상태

  // 사진 추가 함수
  const addPhoto = () => {
    const newPhotos = [...photos, `새 사진 ${photos.length + 1}`]; // 예시를 위한 새 사진 데이터
    setPhotos(newPhotos);
  };

  const deletePhoto = (indexToDelete) => {
    setPhotos((currentPhotos) =>
      currentPhotos.filter((_, index) => index !== indexToDelete)
    );
  };

  return {
    photos,
    addPhoto,
    deletePhoto,
  };
};
