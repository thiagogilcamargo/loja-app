import Link from "next/link";

export default function Calca() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CALÇA</h1>
      <p className="mb-2">
        <strong>Descrição:</strong>
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dicta
        ipsa neque deserunt pariatur? Impedit porro necessitatibus, quia
        consequatur expedita itaque est facere omnis quod in numquam, ullam illo
        odit!
      </p>
      <p>
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar...
        </Link>
      </p>
    </div>
  );
}
