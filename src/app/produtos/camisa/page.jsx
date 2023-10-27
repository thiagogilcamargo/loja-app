import Link from "next/link";

export default function Camisa() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold mb-4 text-center">Camisa</h1>
      <p className="text-lg mb-4">
        <strong>Descrição:</strong>
      </p>
      <div className="mb-4">
        <p className="text-gray-700">
          A camisa é uma peça essencial no guarda-roupa de qualquer pessoa. Ela
          combina estilo, conforto e versatilidade. Feita com tecido de alta
          qualidade, nossa coleção de camisas oferece o máximo em elegância e
          durabilidade.
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <strong>Características Principais:</strong>
      </p>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">
          Material: Algodão de alta qualidade.
        </li>
        <li className="text-gray-700">
          Design elegante que combina com várias ocasiões.
        </li>
        <li className="text-gray-700">Disponível em diversos tamanhos.</li>
        <li className="text-gray-700">Cores modernas e atemporais.</li>
      </ul>
      <p className="mt-4 text-gray-700">
        A camisa é uma escolha perfeita para ocasiões casuais ou formais. Ela
        pode ser usada no trabalho, em encontros ou em eventos especiais. Com a
        nossa variedade de estilos e tamanhos, você certamente encontrará a
        camisa ideal para você.
      </p>
      <p className="mt-6 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  );
}
