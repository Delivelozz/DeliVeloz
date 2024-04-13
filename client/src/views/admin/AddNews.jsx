import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../hooks/useGetShoppingDB.js";

export default function AddNews() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  return (
    <section className="container">
      <h1 className="mb-6">
        <span className="text-sundown-500">Añadir</span> Novedades
      </h1>
    </section>
  );
}
