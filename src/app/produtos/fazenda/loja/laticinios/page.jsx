import Image from "next/image";


export default async function TodosLaticinios() {
    let queijos;
    try {
        const response = await fetch("http://localhost:3000/api/laticinios/0");
        queijos = await response.json();
    } catch (error) {
        console.log(error);
        redirect("/error");
    }

     // Estilização CSS para a imagem de fundo
     const pageStyle = {
        background: `url('/queijo.avif')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="page-background" style={pageStyle}>
            <div className="bg-slate-800 p-8 mt-8 mx-4 rounded-lg">
                <h1 className="text-3xl font-extrabold text-white mb-4 text-center">Laticínios</h1>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-black">
                                <th className="border p-2">ID</th>
                                <th className="border p-2">Imagem</th>
                                <th className="border p-2">Nome</th>
                                <th className="border p-2">Preço</th>
                                <th className="border p-2">Categoria</th>
                                <th className="border p-2">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queijos.map((queijo) => (
                                <tr key={queijo.id} className="text-white">
                                    <td className="border p-2 text-center">{queijo.id}</td>
                                    <td className="border p-2 flex items-center justify-center">
                                        <Image src={queijo.imagem} width={100} height={100} alt={queijo.descricao} />
                                    </td>
                                    <td className="border p-2 text-center">{queijo.nome}</td>
                                    <td className="border p-2 text-center">{queijo.preco}</td>
                                    <td className="border p-2 text-center">{queijo.categoria}</td>
                                    <td className="border p-2 text-center">{queijo.descricao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-white text-center mt-4">Total de Laticínios: {queijos.length}</p>
            </div>
        </div>
    );
}
