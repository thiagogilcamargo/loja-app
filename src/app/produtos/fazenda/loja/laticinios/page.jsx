import Image from "next/image";

export default async function TodosLaticinios() {
    let queijos;
    try{
        const response = await fetch("http://localhost:3000/api/laticinios/0");
        queijos = await response.json();
    }catch(error){
        console.log(error);
        redirect("/error");
    }
return (
        <div className="p-4">

            <h1 className="text-2xl font-bold mb-4">Laticínios</h1>

            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200">
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
                        <tr key={queijo.id}>
                            <td className="border p-2">{queijo.id}</td>
                            <td className="border p-2">
                                <Image src={queijo.imagem} width={100} height={100} alt={queijo.descricao} />
                            </td>
                            <td className="border p-2">{queijo.nome}</td>
                            <td className="border p-2">{queijo.preco}</td>
                            <td className="border p-2">{queijo.categoria}</td>
                            <td className="border p-2">{queijo.descricao}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="bg-gray-200">
                        <td className="border p-2" colSpan="6">Total de Laticínios: {queijos.length}</td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}
