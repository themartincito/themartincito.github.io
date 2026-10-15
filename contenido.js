// ============================================================
//  TU PERFIL
//  Para usar tus fotos, ponelas en la carpeta img/ y cambiá las rutas.
// ============================================================

const PERFIL = {
  nombre: "TheMartincito",
  bio: "Acá guardo lo que hago, lo que pienso y lo que me gusta.",
  foto: "img/perfil.jpg",
  email: "sosamartinlautaro@gmail.com",
  linkedin: "https://www.linkedin.com/in/martinlautarososa",
  github: "https://github.com/themartincito",
  pais: "Argentina",
};

// ============================================================
//  TU CONTENIDO
//  Para publicar algo, copiá un bloque { ... } y cambiale los datos.
//  El primero de la lista es el que aparece primero.
//
//  Cada "tipo" va a una sala:
//    "texto"  → Biblioteca 📚     "video" → Cine 🎬
//    "imagen" → Galería 🖼️       "link"  → Café ☕
//
//  Campos:
//    id      → nombre único, sin espacios ni tildes (se usa en la dirección)
//    tipo    → "texto" | "imagen" | "video" | "link"
//    titulo  → el título
//    texto   → opcional, texto o descripción
//              (dejá una línea en blanco con \n\n para separar párrafos)
//    fecha   → opcional, "AAAA-MM-DD"
//    temas   → opcional, etiquetas para filtrar dentro de la sala,
//              ej: temas: ["viajes", "ideas"]
//
//    imagen  → (imagen) ruta o URL de la foto, ej: "img/foto.jpg"
//              (en un link o video también sirve como miniatura)
//    youtube → (video) el link de YouTube, entero o solo el código
//    vimeo   → (video) el link de Vimeo
//    video   → (video) un archivo .mp4, ej: "videos/clip.mp4"
//    url     → (link) la dirección a la que lleva: Spotify, Instagram,
//              una nota, un video de TikTok, lo que sea
// ============================================================

const CONTENIDO = [
  {
    id: "musica-para-trabajar",
    tipo: "link",
    titulo: "Música para concentrarse",
    url: "https://open.spotify.com/",
    texto: "Un link de ejemplo: puede ser una playlist, una nota, un post o cualquier cosa que quieras recomendar.",
    temas: ["música"],
    fecha: "2026-10-12",
  },
  {
    id: "wikipedia-argentina",
    tipo: "link",
    titulo: "Argentina en Wikipedia",
    url: "https://es.wikipedia.org/wiki/Argentina",
    imagen: "https://picsum.photos/id/1036/800/450",
    texto: "Otro link de ejemplo, con una imagen de miniatura.",
    temas: ["lecturas"],
    fecha: "2026-10-11",
  },
  {
    id: "bienvenida",
    tipo: "texto",
    titulo: "Hola, bienvenido",
    texto: "Acá voy a ir guardando cosas que hago, que pienso y que me gustan.\n\nTextos, fotos, videos. Todo mezclado, como un cuaderno.",
    fecha: "2026-10-09",
  },
  {
    id: "montanas",
    tipo: "imagen",
    titulo: "Montañas",
    imagen: "https://picsum.photos/id/1018/1200/1200",
    texto: "Una foto de un viaje.",
    temas: ["viajes"],
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
    temas: ["viajes"],
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
    temas: ["naturaleza"],
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
