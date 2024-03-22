import Logo from "./../app/images/logo.png";
import Image from "next/image";

export default function header() {
  return (
    <div>header
     <Image
      src={Logo}
      width={210}
      height={210}
      alt="Perseus Logo"
    />
    </div>
  )
}
