import { useRouter } from "next/router";

export default function useLogout() {
  const router = useRouter();

  function logout() {
    localStorage.clear();
    router.push("/login");
  }

  return { logout };
}
