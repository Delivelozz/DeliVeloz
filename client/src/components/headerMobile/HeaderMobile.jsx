import Menu from "../icons/Menu";

export default function HeaderMobile() {
  return (
    <div className="sticky top-0 shadow-lg block md:hidden z-50">
      <div className="container flex justify-between items-center h-20">
        <Menu height={22} color={"#222"} width={22} />
        <h1 className="text-sundown-500">header Mobile</h1>
      </div>
    </div>
  );
}
