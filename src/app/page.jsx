import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 mb-16 bg-slate-800 text-white"> {/* Adicionei a classe bg-slate-800 para definir a cor de fundo */}
      <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg p-8 text-white text-center shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4">Bem-Vindo à Nossa Loja</h1>

        <div className="relative rounded-lg overflow-hidden mx-auto" style={{ maxWidth: "100%", height: "auto" }}>
          <Image src="/istockphoto.jpg" alt="Prateleira" width={1200} height={800} objectFit="cover" />
        </div>

        <div className="mt-8 text-lg">Explore nossa incrível coleção de produtos</div>
        <Link href="/produtos">
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full inline-block font-semibold transition duration-300 transform hover:scale-105 cursor-pointer">
            Ver Produtos
          </button>
        </Link>
      </div>
    </div>
  );
}
