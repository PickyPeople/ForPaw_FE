import { useState } from "react";

export const usePhotoManager = () => {
  const [photos, setPhotos] = useState([]);
  const [photoId, setPhotoId] = useState(0);
  const [isPhotoLimitReached, setIsPhotoLimitReached] = useState(false); // 사진 개수 한계 도달 상태

  const maxPhotos = 5; // 최대 사진 개수 상수로 선언

  const addPhoto = () => {
    if (photos.length < maxPhotos) {
      // 새 사진 객체 생성, 여기서 ID와 함께 새 이름도 부여
      let newPhotoId = photoId + 1;
      const newPhoto = {
        id: newPhotoId,
        name: `새 사진 ${newPhotoId}`,
      };
      const newPhotos = [...photos, newPhoto];
      setPhotos(newPhotos);
      setPhotoId(newPhotoId);
      // 사진 추가 후, 최대 개수에 도달했는지 확인하여 상태 업데이트
      setIsPhotoLimitReached(newPhotos.length === maxPhotos);
    }
  };

  const deletePhoto = (idToDelete) => {
    setPhotos((currentPhotos) =>
      currentPhotos.filter((photo) => photo.id !== idToDelete)
    );
    // 삭제 후 사진 수를 체크하여 사진 한계 도달 상태 업데이트
    setIsPhotoLimitReached(photos.length - 1 === maxPhotos);
  };

  return {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
  };
};
