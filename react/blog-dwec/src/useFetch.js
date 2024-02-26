import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [publicaciones, setPublicaciones] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("useEffect en marcha");
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((datos) => {
          // console.log(datos);
          setPublicaciones(datos);
          setCargando(false);
        })
        .catch((err) => {
          setCargando(false);
          setError(null);
        });
    }, 1000);
  }, [url]);

  return {publicaciones, cargando, error};
};

export default useFetch;