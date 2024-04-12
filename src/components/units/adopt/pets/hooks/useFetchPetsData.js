import { useEffect, useState } from "react";
import { fetchPetsData } from "../AdoptPets.queries";
import { useToggleLike } from "../../../../commons/hooks/useToggleLike";

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

export default function useFetchPetsData(sort) {
  const [pets, setPets] = useState([]);
  const { toggle } = useToggleLike();

  useEffect(() => {
    // sort 변경 시 로컬에서 데이터를 가져옵니다.
    const localPetsData = getLocalPetsData(sort);
    // 로컬에서 가져온 데이터를 상태에 설정합니다.
    // 만약 로컬에 데이터가 없다면, 즉 배열이 비어있다면, 새로 데이터를 불러옵니다.
    if (localPetsData.length === 0) {
      loadPetsData();
    } else {
      // 로컬에 데이터가 있는 경우, 해당 데이터를 사용합니다.
      setPets(localPetsData);
    }
  }, [sort]);

  const getLocalPetsData = (sort) => {
    const storedPets = localStorage.getItem(`petsData_${sort}`);
    return storedPets ? JSON.parse(storedPets) : [];
  };

  const getPageNumber = (sort) => {
    return parseInt(localStorage.getItem(`${sort}Page`), 10) || 0;
  };

  const setPageNumber = (sort, page) => {
    localStorage.setItem(`${sort}Page`, page.toString());
  };

  const loadPetsData = async () => {
    const page = getPageNumber(sort);
    const localPetsData = getLocalPetsData(sort);

    // 예시 데이터를 사용하지만, 실제로는 서버에서 데이터를 불러옵니다.
    const fetchedPetsData = example.result.animals;

    // 새로운 데이터를 로컬에 저장된 데이터에 추가합니다.
    const updatedPetsData = [...localPetsData, ...fetchedPetsData];
    setPets(updatedPetsData);
    setPageNumber(sort, page + 1);
    localStorage.setItem(`petsData_${sort}`, JSON.stringify(updatedPetsData));

    console.log("page = ", page);
    console.log("datePage = ", localStorage.getItem("datePage"));
    console.log("dogsPage = ", localStorage.getItem("dogsPage"));
    console.log("catsPage = ", localStorage.getItem("catsPage"));
    console.log("othersPage = ", localStorage.getItem("othersPage"));
    console.log("petsData_date = ", localStorage.getItem("petsData_date"));
    console.log("petsData_dogs = ", localStorage.getItem("petsData_dogs"));
    console.log("petsData_cats = ", localStorage.getItem("petsData_cats"));
    console.log("petsData_others = ", localStorage.getItem("petsData_others"));
  };

  // '좋아요' 토글을 처리하는 함수
  const handleToggleLike = async (animalId) => {
    const isSuccess = await toggle(animalId);
    if (isSuccess) {
      setPets((currentPets) =>
        currentPets.map((pet) =>
          pet.id === animalId ? { ...pet, isLike: !pet.isLike } : pet
        )
      );
    }
  };

  return { pets, handleToggleLike, loadPetsData };
}
