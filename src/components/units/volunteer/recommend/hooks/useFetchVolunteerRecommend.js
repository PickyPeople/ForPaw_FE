import { useState, useEffect } from "react";
import useFetchVolunteer from "../../hooks/useFetchVolunteer";

export default function useFetchVolunteerRecommend() {
  const { volunteerInfos } = useFetchVolunteer();
  const [volunteerRecommendInfos, setVolunteerRecommendInfos] = useState(
    volunteerInfos.recommandGroups
  )

  const handleToggleLike = (recommendId) => {
    setVolunteerRecommendInfos((currentVolunteer) =>
      currentVolunteer.map((recommend) =>
        recommend.id === recommendId ? {...recommend, isLike: !recommend.isLike} : recommend
      )
    )
  }

  return {
    volunteerRecommendInfos,
    handleToggleLike
  }
}