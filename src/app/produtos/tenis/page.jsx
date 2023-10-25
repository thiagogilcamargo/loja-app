import Link from "next/link";

export default function Tenis() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">TÊNIS</h1>
      <p className="mb-2">
        <strong>Descrição:</strong>
      </p>
      <div className="mb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum
          inventore rerum voluptas nemo dicta vitae! Obcaecati beatae odit
          facilis amet quae eos exercitationem eligendi saepe quisquam! Ipsam,
          eaque suscipit!
        </p>
      </div>
      <p>
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar...
        </Link>
      </p>
    </div>
  );
}
