import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">HOME</h1>

      <div>
        <figure>
          <Image src="/istockphoto.jpg" alt="Prateleira" width={320} height={320} />
        </figure>
      </div>

    
    </div>
  );
}
