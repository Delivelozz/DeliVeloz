export default function Filters() {
  return (
    <div className="flex w-full justify-between mb-10">
      <div className="flex gap-2">
        <select
          name=""
          placeholder="Ordenar Alfabéticamente"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
        >
          <option value="Asc">Ascendente</option>
          <option value="Desc">Descendentemente</option>
        </select>

        <select
          name=""
          placeholder="Categorías"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
        >
          <option value="Hamburguesas">Hamburguesas</option>
          <option value="Pizza">Pizza</option>
          <option value="Sandwitchs">Sandwitchs</option>
          <option value="Gaseosas">Gaseosas</option>
        </select>

        <select
          name=""
          placeholder="Ratings"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
        >
          <option value="AscR">Ascendente</option>
          <option value="DescR">Descendentemente</option>
        </select>
      </div>
      <div className="w-56 font-semibold">
        <input
          type="search"
          placeholder="Buscar..."
          className="w-56 bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}
