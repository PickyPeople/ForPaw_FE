import { useRouter } from "next/router";

export default function useLogOut() {
  const router = useRouter();

  function logOut() {
    localStorage.clear();
    router.push("/login");
  }

  return { logOut };
}
