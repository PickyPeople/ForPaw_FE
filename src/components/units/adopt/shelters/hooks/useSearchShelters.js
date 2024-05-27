import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const toastStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "10px",
  padding: "16px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  color: "#000",
  textAlign: "center",
  whiteSpace: "normal",
  bottom: "120px",
};

const toastOptions = {
  closeButton: false,
  style: toastStyle,
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  position: "bottom-center",
};

const useSearchShelters = (shelters) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [query, setQuery] = useState("");

  const searchShelters = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === "") return;

    const lowerCaseQuery = query.toLowerCase();

    const results = shelters.filter((shelter) => {
      const nameMatch = shelter.name.toLowerCase().includes(lowerCaseQuery);
      const provinceMatch = shelter.province
        .toLowerCase()
        .includes(lowerCaseQuery);
      const districtMatch = shelter.district
        .toLowerCase()
        .includes(lowerCaseQuery);

      return nameMatch || provinceMatch || districtMatch;
    });

    setSearchResults(results);
    setSearchSuccess(results.length > 0);

    const toastId = uuidv4();

    if (results.length === 0) {
      toast(`${query} : 일치하는 보호소가 없습니다.`, {
        toastId,
        ...toastOptions,
      });
    } else {
      toast(`${query} : ${results.length}개의 보호소가 검색되었습니다.`, {
        toastId,
        ...toastOptions,
      });
    }
  }, [query, shelters]);

  return { searchResults, searchSuccess, searchShelters, query };
};

export default useSearchShelters;