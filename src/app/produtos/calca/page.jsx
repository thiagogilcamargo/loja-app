import Link from "next/link";

export default function Calca() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold mb-4 text-center">Calça</h1>
      <p className="text-lg mb-4">
        <strong>Descrição:</strong>
      </p>
      <div className="mb-4">
        <p className="text-gray-700">
          Nossas calças combinam conforto e estilo em uma única peça. Fabricadas
          com materiais de alta qualidade, elas são ideais para diversas
          ocasiões, desde o trabalho até um passeio casual. Escolha entre nossa
          variedade de estilos e cores para encontrar a calça perfeita para o
          seu guarda-roupa.
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <strong>Características Principais:</strong>
      </p>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">
          Material: Algodão resistente e durável.
        </li>
        <li className="text-gray-700">
          Design versátil que se adapta a várias situações.
        </li>
        <li className="text-gray-700">Disponível em diversos tamanhos.</li>
        <li className="text-gray-700">Cores modernas e elegantes.</li>
      </ul>
      <p className="mt-4 text-gray-700">
        Nossas calças são projetadas para proporcionar conforto durante todo o
        dia, mantendo você na moda. Seja qual for o seu estilo, você encontrará
        uma calça que combina com você.
      </p>
      <p className="mt-6 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  );
}
