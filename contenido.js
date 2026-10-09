// ============================================================
//  TU PERFIL
//  Para usar tus fotos, ponelas en la carpeta img/ y cambiá las rutas,
//  ej: banner: "img/banner.jpg", foto: "img/perfil.jpg"
// ============================================================

const PERFIL = {
  nombre: "Mi rincón",
  banner: "img/banner.png",
  foto: "img/perfil.jpg",
  email: "sosamartinlautaro@gmail.com",
  linkedin: "https://www.linkedin.com/in/martinlautarososa",
};

// ============================================================
//  TU CONTENIDO
//  Para agregar una card, copiá un bloque { ... } y cambiale los datos.
//
//  Campos:
//    id      → nombre único, sin espacios (se usa en la URL: tusitio/#id)
//    tipo    → "texto" | "imagen" | "video"
//    titulo  → título de la card
//    texto   → texto completo (dejá una línea en blanco entre párrafos)
//    imagen  → (tipo imagen) ruta o URL de la imagen, ej: "img/foto.jpg"
//    video   → (tipo video) ruta o URL de un .mp4, ej: "videos/clip.mp4"
//    youtube → (tipo video) en lugar de "video", el ID de YouTube
//              (lo que va después de watch?v= en el link)
//    fecha   → opcional, "AAAA-MM-DD"
// ============================================================

const CONTENIDO = [
  {
    id: "bienvenida",
    tipo: "texto",
    titulo: "Hola, este es mi rincón",
    texto: "Acá voy a ir guardando cosas que hago, que pienso y que me gustan.\n\nTextos, fotos, videos. Todo mezclado, como un cuaderno.",
    fecha: "2026-10-09",
  },
  {
    id: "montanas",
    tipo: "imagen",
    titulo: "Montañas",
    imagen: "https://picsum.photos/id/1018/1200/1200",
    texto: "Una foto de un viaje.",
    fecha: "2026-10-05",
  },
  {
    id: "flor",
    tipo: "video",
    titulo: "Una flor abriéndose",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    texto: "Video de ejemplo (dominio público).",
    fecha: "2026-10-03",
  },
  {
    id: "idea-suelta",
    tipo: "texto",
    titulo: "Una idea suelta",
    texto: "Las mejores ideas aparecen cuando no las estás buscando.\n\nPor eso existe esta página: para no perderlas.",
    fecha: "2026-10-01",
  },
  {
    id: "costa",
    tipo: "imagen",
    titulo: "Costa",
    imagen: "https://picsum.photos/id/1015/1600/800",
    texto: "",
    fecha: "2026-09-28",
  },
  {
    id: "big-buck-bunny",
    tipo: "video",
    titulo: "Video de YouTube",
    youtube: "aqz-KE-bpKQ",
    texto: "Así se ve un video embebido desde YouTube.",
    fecha: "2026-09-20",
  },
  {
    id: "bosque",
    tipo: "imagen",
    titulo: "Bosque",
    imagen: "https://picsum.photos/id/1043/1200/1200",
    fecha: "2026-09-15",
  },
  {
    id: "lista",
    tipo: "texto",
    titulo: "Cosas para hacer este año",
    texto: "1. Terminar esta web.\n2. Leer más.\n3. Sacar más fotos.",
    fecha: "2026-09-10",
  },
];
