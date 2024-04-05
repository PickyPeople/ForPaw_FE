import { useRouter } from "next/router";
import SignUpCompleteUI from "./Complete.presenter";

export default function SignUpComplete() {
  const router = useRouter();

  const email = router.query.email;
  const name = router.query.name;
  const password = router.query.password;
  const passwordConfirm = router.query.passwordConfirm;
  const region = router.query.region;
  const subRegion = router.query.subRegion;
  const subdistrict = router.query.subdistrict

  console.log(
    `email: ${email} 
    name: ${name}
    password:${password}
    passwordConfirm:${passwordConfirm}
    region: ${region}
    subRegion: ${subRegion}
    subdistrict: ${subdistrict}
    `
  )

  const navigateTo = (path) => () => router.push(path);

  return (
    <>
      <SignUpCompleteUI
        navigateTo={navigateTo}
      />
    </>
  )
}