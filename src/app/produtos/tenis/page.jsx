import Link from "next/link";

export default function Tenis() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold mb-4 text-center">Tênis</h1>
      <p className="text-lg mb-4">
        <strong>Descrição:</strong>
      </p>
      <div className="mb-4">
        <p className="text-gray-700">
          Descubra o conforto e estilo definitivo com nossos tênis premium.
          Projetados para atender ao seu estilo de vida ativo, nossos tênis são
          a escolha perfeita para qualquer atividade, desde corridas matinais
          até caminhadas no parque. Fabricados com materiais de alta qualidade,
          eles oferecem um ajuste perfeito e durabilidade excepcional.
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <strong>Características Principais:</strong>
      </p>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">
          Material respirável que mantém seus pés frescos.
        </li>
        <li className="text-gray-700">
          Sola amortecida para conforto durante todo o dia.
        </li>
        <li className="text-gray-700">Design elegante e versátil.</li>
        <li className="text-gray-700">Disponível em vários tamanhos e cores.</li>
      </ul>
      <p className="mt-4 text-gray-700">
        Experimente a combinação perfeita de moda e funcionalidade com nossos
        tênis. Esteja preparado para qualquer aventura com calçados que se
        destacam em conforto e estilo.
      </p>
      <p className="mt-6 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  );
}
