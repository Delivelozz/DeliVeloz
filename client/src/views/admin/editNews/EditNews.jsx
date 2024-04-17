import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UploadWidget from "../../../components/cloudinary/UploadWidget";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";
import { editNews } from "../../../redux/actions/actions";
import validation from "./validation";
import { useNavigate } from "react-router-dom";

export default function EditNews() {
  const dispatch = useDispatch();
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();
  //const [New, setNew] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const blog = useSelector((state) => state.blog);

  const [form, setForm] = useState({
    title: blog?.title || "",
    description: blog?.description || "",
    image: blog?.image || { jpg: "" },
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (blog) {
      setForm({
        title: blog?.title,
        description: blog?.description,
        image: blog?.image,
      });
    }
  }, [blog]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://deliveloz-ryfh.onrender.com/banners/${id}`
        );
        const data = await response.json();
        setForm(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching: ", error);
      }
    };
    fetchData();
    return () => setLoading(true);
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const newErrors = validation({ ...form, [name]: value });
    setErrors(newErrors);
  };

  //console.log(blog);
  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Corrige los errores en el formulario antes de continuar.");
      return;
    }
    console.log("Form antes de enviar:", form);
    dispatch(editNews({ ...form, id }));
    alert("¡La publicación fue editada exitosamente!");

    navigate("/home");
  };

  const handleImageUpload = (imageUrl, imageType) => {
    setForm((prevForm) => ({
      ...prevForm,
      image: {
        ...prevForm.image,
        [imageType]: imageUrl,
      },
    }));
  };

  // ? ---------------------------------------- Return

  if (loading) {
    return (
      <section className="flex justify-center items-center">
        <div className="custom-loader"></div>
      </section>
    );
  }

  return (
    <section className="container">
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 flex flex-col gap-3 bg-white border p-6 rounded-sm">
            <h1 className="mb-6">
              <span className="text-sundown-500">Editar</span> publicación
            </h1>
            <div className="flex flex-col">
              <label className="font-semibold text-sm text-gray-800 mb-1">
                Titulo:
              </label>
              <input
                onChange={onChange}
                type="text"
                name="title"
                value={form?.title}
                className=" bg-gray-50 border border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
              {errors.title && <p className="error">{errors.title}</p>}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-gray-800 mb-1">
                Descripción:
              </label>
              <textarea
                onChange={onChange}
                name="description"
                cols="30"
                rows="10"
                value={form?.description}
                className="bg-white border max-h-60 min-h-60 border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              ></textarea>
              {errors.description && (
                <p className="error">{errors.description}</p>
              )}
            </div>
          </div>

          <div className="col-span-1 bg-white border p-6 rounded-sm flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm text-gray-800 mb-1">
                Imagen:
              </label>
              <img src={form.image?.jpg} alt="" />
              <UploadWidget
                onImageUpload={(url) => handleImageUpload(url, "jpg")}
                imageType="jpg"
                texto="Cambiar imagen"
              />
            </div>
          </div>
        </div>

        <button className="btn-bg">Confirmar cambios</button>
      </form>
    </section>
  );
}
