import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/actions";
import { useEffect } from "react";

export default function UsersAdmin() {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(allUsers);
  return (
    <section className="container">
      <h1>
        Tabla de <span className="text-sundown-500">Usuarios</span>
      </h1>
    </section>
  );
}
