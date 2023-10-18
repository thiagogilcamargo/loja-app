import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
          <figure>
            <Image src="/istockphoto.jpg" alt="Prateleira" width={320} height={320}/>
          </figure>
      </div>


    </>
  )
}