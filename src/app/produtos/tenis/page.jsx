import Link from "next/link";

export default function Tenis() {
  return (
    <div>
      <h1>Tênis</h1>
      <p>Esta é a página de informações sobre tênis.</p>
      <p>
        <Link href="/">Voltar para a página inicial</Link>
      </p>
    </div>
  );
}
