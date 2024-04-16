import { useEffect, useRef } from "react";

export default function UploadWidget({ onImageUpload, imageType, texto }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "derot8znd",
        uploadPreset: "deliveloz",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          const secureUrl = result.info.secure_url;
          onImageUpload(secureUrl, imageType); // Llama a la función proporcionada por el componente padre con el tipo de imagen
        }
      }
    );
  }, [onImageUpload, imageType]);

  return (
    <span
      className="btn-bg cursor-pointer"
      onClick={() => widgetRef.current.open()}
    >
      {texto}
    </span>
  );
}
