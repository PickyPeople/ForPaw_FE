import { useState, useEffect } from "react";
import useFetchVolunteer from "../../hooks/useFetchVolunteer";

export default function useFetchVolunteerRecommend() {
  const { volunteerInfos } = useFetchVolunteer();
  const [volunteerRecommendInfos, setVolunteerRecommendInfos] = useState(
    volunteerInfos.recommandGroups
  )

  const handleToggleLike = (recommendId) => {
    setVolunteerRecommendInfos((currentVolunteer) =>
      currentVolunteer.map((recmmend) =>
        recmmend.id === recommendId ? {...recmmend, isLike: !recmmend.isLike} : recmmend
      )
    )
  }

  return {
    volunteerRecommendInfos,
    handleToggleLike
  }
}