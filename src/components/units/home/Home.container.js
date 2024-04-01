import HomeHeader from "../../commons/headers/HomeHeader.container";
import Navigation from "../../commons/navigation/Navigation.container";
import HomeUI from "./Home.presenter";
import { useNavigate } from "../../commons/hooks/useNavigate";

export default function CommunityQuestions() {
  const { navigateTo } = useNavigate();

  const paths = {
    adopt: "/adopt/pets",
    volunteer: "/volunteer/recommend",
    community: "/community/adoption",
    faq: "/home/faq",
    dogs: "home/dogs",
    cats: "home/cats",
  };

  return (
    <>
      <HomeHeader />
      <HomeUI navigateTo={navigateTo} paths={paths} />
      <Navigation />
    </>
  );
}
