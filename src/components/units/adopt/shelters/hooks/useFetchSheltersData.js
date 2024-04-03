import { useEffect, useState } from "react";
import { fetchSheltersData } from "../AdoptShelters.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    shelters: [
      {
        id: 23,
        name: "동인동물병원",
        lat: 35.1322726,
        lng: 129.0384559,
      },
      {
        id: 24,
        name: "수성 동물보호센터",
        lat: 35.1775729,
        lng: 128.9169185,
      },
    ],
  },
};

export default function useFetchSheltersData() {
  const [shelters, setShelters] = useState(example.result.shelters);

  useEffect(() => {
    async function loadPetsData() {
      const sheltersData = await fetchSheltersData();
      setShelters(sheltersData);
    }

    // loadPetsData();
  }, []);

  return { shelters };
}
