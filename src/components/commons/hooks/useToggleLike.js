import { toggleLike } from "../api/toggleLike";

export function useToggleLike() {
  const toggle = async (animalId) => {
    try {
      // await toggleLike(animalId);
      return true;
    } catch (error) {
      console.log("error");
      return false;
    }
  };

  return { toggle };
}
