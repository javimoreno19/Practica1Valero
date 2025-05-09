
import Modulo from "../islands/Modulo.tsx";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f2f2f2", padding: "20px" }}>
      <Modulo
        id={1}
        titulo="Módulo 1"
        textoBase="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno
         estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y 
         los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas
         Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
      />
      <Modulo
        id={2}
        titulo="Módulo 2"
        textoBase="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos."
      />
      <Modulo
        id={3}
        titulo="Módulo 3"
        textoBase="Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
      />
    </div>
  );
}
