import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">Oops! Página não encontrada</h1>
        <p className="text-lg text-gray-600 mb-6">A página que você está procurando não existe.</p>
        <div className="mb-6">
          <Image
            src="https://httpstatusdogs.com/img/404.jpg"
            alt="Cachorro cavando..."
            width={650}
            height={500}
          />
        </div>
      </div>
      <div>
      <Link href="/" className="text-blue-500 hover:underline text-lg">
        Voltar para a página inicial
      </Link>
      </div>
    </div>
  );
}
