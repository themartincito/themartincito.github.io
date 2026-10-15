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
    id: "habitaciones",
    tipo: "texto",
    titulo: "Habitaciones",
    temas: ["ensayo", "sentimientos"],
    fecha: "2026-10-15",
    texto: "¿Qué son los sentimientos?\n\nA veces pienso que son habitaciones alquiladas dentro de uno mismo. Entramos, vivimos allí un tiempo, movemos los muebles, creemos que esa disposición es definitiva… y un día la puerta desaparece. Entonces miramos hacia atrás y no reconocemos al inquilino que fuimos.\n\n¿Nunca les pasó estar devastados por alguien —o por algo— y actuar de una forma que jamás habrían imaginado? No comer. No dormir. No salir. Convertirse en una versión gris de sí mismos. Y luego, meses después, recordar esa etapa con una especie de ironía incómoda. Como si observaran a otra persona desde afuera.\n\n“¿Cómo pude estar tan mal?”, se preguntan.\n“Ese no era yo.”\n\nPero si no eras vos, ¿quién era?\n\nPlanteemos una escena simple: estás con quien llamás el amor de tu vida. No una exageración retórica, sino esa sensación eléctrica, casi absurda, de que el mundo se organizó para que esa persona exista. Y un día, sin catástrofe visible, la relación se termina. No hay explosión. Solo una grieta que se ensancha.\n\nEntonces llega el insomnio. La falta de hambre. La imposibilidad de disfrutar cosas mínimas. El cuerpo funciona, pero el mundo pierde espesor.\n\nPasa el tiempo —ese tiempo elástico que nunca es igual para dos personas— y algo se recompone. Un día te sorprendés riéndote. Otro día dejás de pensar en su nombre. Y cuando mirás hacia atrás, la tristeza parece ajena.\n\nSi yo te amé y después dejé de amarte, ¿cuál de los dos fui?\nSi sufrí y actué de maneras que no reconozco, ¿fui menos yo en ese momento?\n¿O el “yo estable” es apenas una ficción que inventamos para no aceptar que somos variables?\n\nUn día, sin anunciarlo, le pregunté a mi madre:\n\n—¿Cuándo dejaste de estar enamorada de papá? Alguna vez lo amaste, ¿verdad?\n\nMe miró como si la hubiera despertado de una siesta antigua.\n\n—¿Por qué me preguntás eso?\n\n—Porque no tengo ningún recuerdo tuyo mirándolo con magia en los ojos. Y tengo buena memoria.\n\nSonrió con cierta indulgencia.\n\n—Eso es de película, Martín. No hace falta derretir a alguien con la mirada para amarlo.\n\nLa contradije con una convicción que no sabía de dónde venía.\n\n—Sí hace falta. El amor se nota en la mirada. Quizás no todos lo ven, pero está ahí. Cuando mirás a alguien que amás de verdad, hay algo que no se puede fingir.\n\nSe quedó en silencio. Luego dijo, casi sorprendida por sí misma:\n\n—Ahora que lo decís… recuerdo algo.\n\nY empezó a narrar.\n\nEra primavera. Yo no existía todavía. Mi hermana era pequeña. Estaban sentadas en las escaleras del edificio donde vivían. Una amiga —Graciela— la acompañaba. Esperaban que mi padre volviera del trabajo.\n\nMi padre apareció a lo lejos, caminando por la vereda. Mi hermana corrió hacia él. Y en ese momento, la amiga le dijo:\n\n“Me encanta cómo lo mirás. Tenés un brillo hermoso en los ojos. Se nota que estás muy enamorada.”\n\nMi madre se detuvo al contar eso. Como si hubiera abierto una caja que no sabía que aún conservaba.\n\n—Tenías razón —me dijo—. El amor se nota en la mirada. No sé cómo pude olvidarme de algo así.\n\nSe le llenaron los ojos de lágrimas. No lágrimas teatrales. Lágrimas densas, cargadas de una culpa extraña. Culpa por haber olvidado que alguna vez hubo magia.\n\nNo necesité preguntar más. En sus ojos estaba todo: el recuerdo, la pérdida, el desgaste invisible que ocurre cuando una relación deja de ser primavera y se convierte en demonio.\n\nMe pregunté entonces:\n¿En qué momento uno se olvida de la magia?\n¿Se apaga sola o la apagamos para no sufrir?\n¿Hasta qué punto se reescribe la propia memoria para sobrevivir?\n\nHay cosas que admiten múltiples interpretaciones. Vos podés ver a una mujer morocha de sesenta kilos. Yo puedo ver magia. Ninguno está equivocado: solo miramos desde habitaciones distintas.\n\nTal vez por haber visto la historia de mis padres, una tragedia disfuncional, me cuesta creer en la permanencia. No en encontrar a alguien. Eso es posible. Lo que me resulta improbable es sostener el fulgor.\n\nHay personas que creen, con serenidad casi religiosa, que pueden amar toda la vida a la misma persona. Otros, en cambio, sospechan del tiempo. Sospechan de la costumbre. Sospechan de la memoria.\n\nYo, sin embargo, sigo buscando esa mirada con magia. Como si, en el fondo, quisiera probar que estoy en la habitación correcta.",
  },
];
