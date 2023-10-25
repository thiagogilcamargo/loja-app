export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 animate-pulse">Carregando...</h1>
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      </div>
    </div>
  );
}
