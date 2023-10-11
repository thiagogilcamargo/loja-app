import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Bem-vindo à Página Inicial</h1>
     <div>
      <ul>
        <li>
          <Link href="produtos/tenis">Tênis</Link>
        </li>
        <li>
          <Link href="produtos/calca">Calça</Link>
        </li>
        <li>
          <Link href="produtos/blusa">Blusa</Link>
        </li>
      </ul>
    

    <figure>
      <Image src="/istockphoto.jpg" alt="Prateleira" width={320}
      height ={320}/>
    </figure>
    <div/>
  );
}


