import { Router } from "next/router";
import { fetchSearchAll, fetchSearchShelters, fetchSearchPosts, fetchSearchGroups } from "../Search.quries";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const searchAll = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    shelters: [
      {
        id: 23,
        name: "동인동물병원",
        careAddr: "대구광역시 중구 동인동4가 국채보상로 724 (동인동4가)",
        careTel: "053-721-2341",
      },
      {
        id: 24,
        name: "수성 동물보호센터",
        careAddr: "대구광역시 수성구 범어1동 84-14",
        careTel: "053-721-2341",
      },
    ],
    posts: [
      {
        id: 23,
        title: "진도개 입양 후기 올립니다~",
        content: "......",
        date: "2023-03-28T14:30",
        commnetNum: 3,
        likeNum: 5,
        images: [
          {
            id: 13,
            imageURL: "https://s3.1xxx.xx.com",
          },
          {
            id: 14,
            imageURL: "https://s3.2xxx.xx.com",
          },
        ],
      },
      {
        id: 24,
        title: "시바견을 입양하였습니다!",
        content: "....",
        date: "2023-05-28T10:10",
        commnetNum: 4,
        likeNum: 2,
        images: [
          {
            id: 16,
            imageURL: "https://s3.1xxx.xx.com",
          },
          {
            id: 17,
            imageURL: "https://s3.2xxx.xx.com",
          },
        ],
      },
    ],
    groups: [
      {
        id: 15,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 18,
      },
      {
        id: 16,
        name: "고양이 사랑2",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 20,
      },
    ],
  },
};

const searchShelters = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    shelters: [
      {
        id: 23,
        name: "동인동물병원"
      },
      {
        id: 24,
        name: "수성 동물보호센터"
      }
    ]
  }
}

const searchPosts = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    posts: [
      {
        id: 23,
        title: "진도개 입양 후기 올립니다~",
        content: "......",
        date: "2023-03-28T14:30",
        commnetNum: 3,
        likeNum: 5,
        images: [
          {
            id: 13,
            imageURL: "https://s3.1xxx.xx.com"
          },
          {
            id: 14,
            imageURL: "https://s3.2xxx.xx.com"
          }
        ]
      },
      {
        id: 24,
        title: "시바견을 입양하였습니다!",
        content: "....",
        date: "2023-05-28T10:10",
        commnetNum: 4,
        likeNum: 2,
        images: [
          {
            id: 16,
            imageURL: "https://s3.1xxx.xx.com"
          },
          {
            id: 17,
            imageURL: "https://s3.2xxx.xx.com"
          }
        ]
      }
    ]
  }
}

const searchGroups = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    groups: [
      {
        id: 15,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 18
      },
      {
        id: 16,
        name: "고양이 사랑2",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 20
      }
    ]
  }
}

export default function useFetchSearch() {
  const [searchInfos, setSearchInfos] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState(``);
  const router = useRouter();

  const name = router.query.name;
  console.log(name)

  const handleSearchChange = (e) => {
    const inputSearch = e.target.value;
    setSearch(inputSearch);
  }

  const loadSearch = async (e) => {
    if (e.key === "Enter" && search.trim() && name == "searchAdopt") {
      console.log("입양");
      setSearchInfos(searchShelters.result);
      setIsActive(!isActive);
      // const searchInfosData = await fetchSearchShelters(search);
      // setSearchInfos(searchInfosData);
    } else if (e.key === "Enter" && search.trim() && name == "searchPosts") {
      console.log("게시물");
      setSearchInfos(searchPosts.result);
      setIsActive(!isActive);
      // const searchInfosData = await fetchSearchPosts(search) ;
      // setSearchInfos(searchInfosData);
    } else if (e.key === "Enter" && search.trim() && name == "searchGroups") {
      console.log("봉사");
      setSearchInfos(searchGroups.result);
      setIsActive(!isActive);
      // const searchInfosData = await fetchSearchGroups(search);
      // setSearchInfos(searchInfosData);
    } else if (e.key === "Enter" && search.trim() && name == "searchAll") {
      console.log("전체");
      setSearchInfos(searchAll.result);
      setIsActive(!isActive);
      // const searchInfosData = searchInfos //await fetchSearchAll(search);
      // setSearchInfos(searchInfosData);
    }

    return searchInfos
  }
  
  console.log(searchInfos);

  return {
    name,
    isActive,
    searchInfos,
    search,
    handleSearchChange,
    loadSearch
  };
}
