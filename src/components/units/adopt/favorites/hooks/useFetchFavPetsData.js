import { useEffect, useState } from "react";
import { fetchFavPetsData } from "../AdoptFavorites.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    animals: [
      {
        id: 25,
        name: "포리",
        age: "2024(60일미만)(년생)",
        gender: "M",
        specialMark: "사람을 좋아하고 활발함",
        region: "경상북도 경산시",
        inquiryNum: 25,
        likeNum: 20,
        isLike: false,
        profileURL: "/images/pets/dog_1.svg",
      },
      {
        id: 26,
        name: "메리",
        age: "2024(60일미만)(년생)",
        gender: "M",
        specialMark: "활발함",
        region: "대구광역시 수성구",
        inquiryNum: 5,
        likeNum: 14,
        isLike: false,
        profileURL: "/images/pets/dog_1.svg",
      },
    ],
  },
};

export default function useFetchFavPetsData() {
  const [favPets, setFavPets] = useState(example.result.animals);

  useEffect(() => {
    async function loadFavPetsData() {
      const petsData = await fetchFavPetsData();
      setFavPets(petsData);
    }

    // loadFavPetsData();
  }, []);

  return { favPets };
}