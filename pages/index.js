import headerImage from "../images/bg-header-desktop.svg";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" bg-desaturatedCyan h-24 relative">
      <Image src={headerImage} layout="fill">
      </Image>
    </div>
  )
}
