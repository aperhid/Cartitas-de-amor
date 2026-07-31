const cartas = [
  {
    id: 1,
    titulo: "Me eches de menos",
    fecha: "2026-08-09",
    texto: "Si has abierto esta carta es porque me estás echando de menos... mi bebé :(. Sea lo que sea que esté haciendo, te aseguro que yo también te estoy extrañando, mi amorcito. Incluso si estoy durmiendo, tú sabes que te pienso. Mi chico bonito.\n\nQuiero que recuerdes que, haga lo que haga, esté donde esté, siempre, siempre te tengo en mente. Da igual si estoy trabajando, si estoy disfrutando de un concierto, si paseando, limpiando o lo que sea. Mi cerebro siempre encuentra un huequito para ti para que estés presente en mi día a día. ¿No es esa la definición de parásito? JASJDJAJ es broma, te amo.\nTú ya sabes que te veo en todas partes y que siempre saco un minutico para estar contigo. Sabes que sin ti me muero.\n\nEntiendo lo que es que me eches de menos, mi amor, aunque pase un segundito sin ti yo ya te añoro con toda mi alma. Por eso, haz una cosa, bebé. Cierra los ojos un momento e imagina que estoy a tu ladito, abrazándote. De esos abrazos largos y apegados, tan relajantes, hogareños. Imáginame a tu ladito, piénsame mucho y verás que el tiempo que estemos separados se habrá ido volando. "
  },
  {
    id: 2,
    titulo: "Necesites un abrazo",
    fecha: "2026-08-16",
    texto: "Ven, mi corazón, ven a mis brazos. Cierra los ojos y siente mi abrazo. Siente que te aprieto fuerte, que te protejo, que te cuido. Siente que te quiero y que estoy contigo. Siente que no estás solo, que yo estoy aquí para ti. Siente que todo va a estar bien, porque yo estoy contigo. Siente que te amo y que siempre lo haré.\n\nSé que técnicamente no puedo abrazarte desde una carta, pero imagina que acabo de rodearte con mis brazos y que te estoy achuchando más fuerte de lo normal, con el mentón sobre tu hombro y las manos acariciando tu espalda.\nNo hace falta que me expliques nada, no hables. No tienes que hacerte el fuerte ni tener respuestas. Solo descansa en mí, yo te cuido.\n\nA veces un abrazo no soluciona los problemas, pero sana. Tú nunca estarás solo mientras yo siga aquí. Así que quédate en mis brazos unos segundos más. Soy todo tuyo."
  },
  {
    id: 3,
    titulo: "Tengas un mal día",
    fecha: "2026-08-23",
    texto: "Mi amor, sé que hoy no ha sido tu mejor día. Sé que seguramente te hayas sentido frustrado, cansado, triste, enfadado, o cualquier emoción que haya empeorado tu día. A lo mejor las cosas no han salido como querías y te has sentido abrumado, o quizás simplemente te has levantado así; a veces pasa. Pero quiero que sepas que estoy aquí para ti. Que te entiendo, te apoyo y que te quiero muchísimo.\n\nNo tienes que enfrentarte a todo solo. No tienes que cargar con todo el peso del mundo. A veces está bien no estar bien. Ahora, mi amor, recuerda todas las veces que pensaste que no podrías con algo y acabaste pudiendo. Tanto las veces que he visto como las que no. Eres muchísimo más fuerte de lo que piensas, bebé. Te lo prometo.\n\nPor tanto, hoy permítete descansar, quejarte si hace falta (siempre conmigo), acostarte mientras comes algo que te gusta, juegas o incluso quédate mirando al techo. Mañana lo puedes volver a intentar, mañana será otro día. Todo pasa. Te mereces mucha, mucha paz.\n\nTe amo incluso en tus días malos, amor, no lo olvides."
  },
  {
    id: 4,
    titulo: "Te sientas triste",
    fecha: "2026-08-30",
    texto: "Hola, mi amorcito precioso chiquito. ¿Te sientes triste? ¿Qué pasó, corazón? Yo te escucho siempre, lo sabes.\n\nMi cielo, como siempre me dices, está bien estar triste. No tienes que fingir nada, ni soportar; yo te cuido. Puedes llorar, gritar, o abrazarte a mí. Puedes tener un mal día o no tener ganas de nada. Y aún así, sigues siendo la persona más increíble y dulce de la que estoy enamorado. Mi dulcecito.\n\nAquí me tienes para ser tu lugar seguro, vamos juntos a mejorar ese ánimo, a sacarte una sonrisa y a mimarte hasta el fin del mundo. Te quiero muchísimo, mi sol."
  },
  {
    id: 5,
    titulo: "Te sientas solo",
    fecha: "2026-09-06",
    texto: "MI BEBÉ PEQUEÑO :(, CÓMO TE VAS A SENTIR SOLITO. Nonono, mi pobrecito. Conmigo presente en tu vida nunca estarás solito, mi amor, te voy a acompañar con todo mi corazón en cada cosita. Sabes que amo ser una garrapata y estar encima de ti toooodo el día. :3\n\nEn realidad, entiendo que el sentimiento de soledad viene desde dentro y que por mucho que te asegure mi compañía, va más allá. Por eso, mi niño, espero que el remolino en tu interior que te cause tales pensamientos se vaya disipando conmigo a tu lado. Incluso si quieres contarme tus problemas, como si no. Simplemente siempre te voy a dar mi compañía, corazón. Hasta que la muerte nos separe.\n\nEstoy aquí para ti, siempre, cada vez que lo necesites, aquí estaré."
  },
  {
    id: 6,
    titulo: "Nos hayamos enfadado",
    fecha: "2026-09-13",
    texto: "Hola, cariñito. Lo primero de todo, te amo. Te amo mucho, eso nunca va a cambiar.\n\nSé que no suele pasar, pero a veces sí tenemos algún desacuerdo o malentendido. Y está bien, a veces sucede y sirve sobre todo para reforzar la relación. Además de que siempre es mediante el respeto y la sinceridad y eso es algo que valoro y amo de nosotros. Siempre le he tenido miedo al conflicto pero contigo más que ansiedad, es como un aprendizaje. Nunca tuve la sensación de que me devolvieran la empatía que ofrezco, hasta que te conocí. Realmente, contigo me siento más comprendido que nunca.\n\nY lo que más me gusta es que siempre acabamos con una disculpa, que para mí son súper importantes, y unos besitos porque el hecho de enfadarnos no significa dejarnos de querer.\n\nTe amo mucho, mi chocolatito, no estemos enfurruñados el uno con el otro. Hay que amarnos mucho."
  },
  {
    id: 7,
    titulo: "Dudes de ti",
    fecha: "2026-09-20",
    texto: "Te puedo prometer que eres la persona más increíble y buena que he conocido. Eres inteligente, fuerte, amable, capaz, risueño, cariñoso y miles de características más que ni el diccionario conoce. Eres un ser humano maravilloso y estoy muy orgulloso de ti. No dejes que nadie te haga sentir lo contrario, ni siquiera tú mismo. Eres suficiente tal y como eres, y mereces todo el amor y la felicidad del mundo. Nunca olvides lo especial que eres para mí y para todos los que te rodean.\n\nEntiendo esa inseguridad, mi amor, comprendo que a pesar de nuestra fuerza, a veces nos debilitamos. Es normal, pero en un momento de fragilidad no debes creer lo que inunda tu cabeza. Usualmente no suele ser verdad, ¿sabes? La verdad existe en las acciones y siempre me has hecho ver la maravillosa persona que eres.\n\nPero no te fuerces, amor, no siempre tenemos esa vitalidad para poder superarnos. Pero me tienes a mí, jiji. Aquí estoy para recordarte que, cuando tú dudes de ti, yo creeré por los dos."
  },
  {
    id: 8,
    titulo: "Quieras recordar cuánto te quiero",
    fecha: "2026-09-27",
    texto: "TE QUIERO, TE QUIERO, TE QUIERO, TE QUIEROOOOOOOOOOOOOOOOOO.\n\nTe amo, mi amor. Te amo muchísimo. Nunca serán veces suficientes, siempre necesitaré más. Amo quererte, amo que me quieras, amo decírtelo, amo que me oigas. Te amo, te amo, te amo. Te amo con todo mi corazón, con toda mi alma, con todo mi ser. Te amo más de lo que las palabras pueden expresar, más de lo que los gestos pueden mostrar, más de lo que los sentimientos pueden sentir. Te amo con cada latido de mi corazón, con cada respiración de mi cuerpo, con cada pensamiento de mi mente. Te amo con todo lo que soy y todo lo que seré. Te amo para siempre y para siempre.\n\nTe quiero cuando estamos juntos, cuando estamos lejos, cuando reímos, discutimos. Te quiero en los días de paz y en los problemáticos. Te quiero todos, todos los días, desde el primero hasta el último."
  },
  {
    id: 9,
    titulo: "Te despiertes de bajón",
    fecha: "2026-10-04",
    texto: "Buenos días mi trocito de melón :(. ¿Te has despertado de bajoncito, cariño? ¿Qué ha pasado?\n\nSea lo que sea, amor, sabes que puedes contar conmigo. Mi pequeña estrellita. No te preocupes, ni siquiera tienes que decir nada, tan solo ven a mis brazos que ellos te van a refugiar de cualquier oscuridad en tu mente.\n\nY en el caso de que sí tengas palabras para decir, te voy a escuchar muy atentamente. Tanto si es para devolverte un consejo, como si es para que puedas desahogarte y llorar. No te preocupes, mi amor, yo estoy aquí para ti, siempre. Y si no quieres hablar, está bien también. Podemos quedarnos en silencio, abrazados, y dejar que el tiempo pase mientras nos sentimos seguros y amados.\n\nRecuerda que eres una persona increíble, valiosa y amada. No dejes que un mal día te haga olvidar lo maravilloso que eres. Estoy aquí para recordarte eso y para apoyarte en todo momento. Te amo con todo mi corazón."
  },
  {
    id: 10,
    titulo: "No podamos estar juntos",
    fecha: "2026-10-11",
    texto: "Qué tristeza que hoy no podamos estar juntos, mi amor. :( Sea por lo que sea, ten claro que te estaré extrañando profundamente, con todo mi corazón y alma. Aunque no pueda abrazarte, besarte y decirte lo mucho que te quiero, quiero que sepas que siempre estás en mi mente y en mi corazón. Te amo con todo mi ser y no hay distancia que pueda disminuir ese amor. Espero que pronto podamos estar juntos de nuevo y disfrutar de nuestra compañía. Hasta entonces, recuerda que te amo más allá de las palabras y que siempre estaré pensando en ti.\n\nGuárdame un huequito a tu lado, pronto volveré."
  },
   {
    id: 11,
    titulo: "No sepas qué ver en Netflix",
    fecha: "2026-10-18",
    texto: "Mensaje de prueba 11"
  },
   {
    id: 12,
    titulo: "Tengas ganas de discutir conmigo (y yo no esté)",
    fecha: "2026-10-25",
    texto: "Mensaje de prueba 12"
  },
   {
    id: 13,
    titulo: "Sea tu cumpleaños",
    fecha: "2026-08-02",
    texto: "¡FELIZ CUMPLEAÑOS AMOR MÍO DE MI VIDA Y DE MI CORAZÓN! ¿No te parece increíble que la primera vez que te felicité fue al conocernos y ahora estamos en este punto? Me siento muy afortunado de tenerte en mi vida y de poder compartir este día tan especial contigo, otra vez.\n\nTodavía recuerdo la nota fugaz, apareció la primera y aún así la pasé. Pero algo en mi cabeza, en mi corazón, en todo mi ser me dijo algo, y sin dudarlo volví para responderla. Recuerdo la fluidez de la conversación, cómo te dije la tradición española de estirar de las orejas. Y TE DEJASTE HACERLO AJKJFS te amo.\nTambién me acuerdo de cuando te invité a casa por primera vez, cómo saludaste a Aurora y el brownie con helado de vainilla que te cociné. Por supuesto, también recuerdo el primer regalo que te hice, aquella libreta tan bonita decorada. La usaste para volcar tu arte en ella y fue lo más bonito que pudiste hacer, honestamente. Dos artistas enamorados.\n\nQuizá me arrepienta de muchas cosas en esta vida (ninguna sobre ti), pero nunca me arrepentiré de haberte contestado a esa nota. De verdad que fue el efecto mariposa más gigante que me pasó nunca. Te amo mucho, amor, mucho mucho mucho mucho. Lamento que este mes sea tan difícil para mí, perdóname por no poder estar contigo hoy tanto como me gustaría. Pero sabes que siempre iré un paso por delante jiji, tienes cada pedacito de mí contigo y tú siempre estás en mi mente. Te amo, bebé. Feliz cumpleaños."
  },
   {
    id: 14,
    titulo: "Hayamos cumplido un año de conocernos",
    fecha: "2026-08-02",
    texto: "Hola, mi príncipe. Hoy, además de ser tu cumpleaños, cumplimos un año de conocernos y me parece absolutamente increíble. Honestamente, si lo pienso mucho no me lo creo. No me creo que hace exactamente un año empezáramos a hablar y que nos hayamos mantenido cada día. Un amor sólido y verdadero.\n\nSiempre lo digo pero nunca me canso. Recordemos cómo te fijaste en mí con anterioridad y cómo luego sentí algo en lo profundo de mi interior que me arrastró hacia ti, como si el destino me estuviera susurrando en el oído. Recordemos esa conexión instantánea, cómo todo nacía tan naturalmente. Cuando te estiré de las orejitas, las veces que me ponías stickers en la carita, las historias, las bromas. Conversaciones largas e interesantes. Me gustabas (y me gustas) tanto.\nRecordemos nuestro primer encuentro, el nerviosismo de tenerte en mi casa, la timidez de Aurora y mi plato estrella. Tú no lo sabes pero hechicé los brownies jjj. Te enamoré, lo sé. Recuerdo el regalito y nuestra segunda salida. De verdad que, para mí, el spa fue un antes y un después. En ese momento confirmé que mi corazón era (y es) tuyo. Me encantó el momento jacuzzi, cuando nos ahogamos mutuamente y nos vimos los tatuajes (hot). Pero, sin duda, mi momento favorito fue la simple y suave sujeción de nuestros meñiques. Tan inocente, pura y cargada de significado que aún me cosquillea el pecho al recordarlo.\n\nLuego, entre charlas y más charlas, cuando conseguí dormir contigo por primera vez, poniendo de excusa un simple bol de arándanos. Y, más tarde, los besos en los lunares. ME PONE TAN DSNFDJSJF AAA, recordar como nos entendimos sin necesidad de decirlo directamente, estábamos en la misma página, en el momento adecuado. Nuestro primer beso fue tan fdjfhsj Dios, me deja sin aliento, de verdad. Lo amé y amé la confesión posterior, cuando nos dijimos que nos gustábamos, suspiro.\n\nY, a partir de ahí, simplemente se fue escribiendo nuestra historia de amor y te prometo que nunca antes había sido tan feliz. Te amo con todo, infinitamente. Eres mi hogar, mi lugar y mi vida. Te amo, te amo, quiero estar a tu lado por el resto de la eternidad."
  },
   {
    id: 15,
    titulo: "Me quieras mucho",
    fecha: "2026-11-01",
    texto: "Mensaje de prueba 15"
  },
   {
    id: 16,
    titulo: "Creas que has fallado en algo",
    fecha: "2026-11-08",
    texto: "Mensaje de prueba 16"
  },
   {
    id: 17,
    titulo: "No puedas dormir",
    fecha: "2026-11-15",
    texto: "Mensaje de prueba 17"
  },
   {
    id: 18,
    titulo: "Quieras recordar nuestra historia",
    fecha: "2026-11-22",
    texto: "Mensaje de prueba 18"
  },
   {
    id: 19,
    titulo: "Quieras recordar nuestras citas",
    fecha: "2026-11-29",
    texto: "Mensaje de prueba 19"
  },
   {
    id: 20,
    titulo: "Quieras recordar nuestro primer beso",
    fecha: "2026-12-06",
    texto: "Mensaje de prueba 20"
  },
   {
    id: 21,
    titulo: "Vayamos a ser padres (otra vez)",
    fecha: "2030-06-23",
    texto: "Mensaje de prueba 21"
  },
   {
    id: 22,
    titulo: "Nos hayamos casado",
    fecha: "2026-06-22",
    texto: "HOLA, MARIDITO MÍO. Mi esposo, mi confidente, mi todo. Qué bonito que nos hayamos casado, amor. Es taaan tan bonito que me dan ganas de casarme otras cincuenta veces más. Literalmente, he cumplido el sueño de mi vida y haberlo hecho contigo me llena de una plenitud imposible de explicar correctamente. Es algo místico.\n\nVerte ahí en el altar, tan hermoso, con nuestra hijita, los anillos, el lugar. Fue tan hermoso y perfecto, no lo olvidaré jamás. Para mí, no hay mayor promesa de amor que el matrimonio, te lo agradezco tanto, cariñito. Gracias por comprometerte conmigo, por hacerme feliz, por cumplirme el sueño, por ser el amor de mi vida. Te amo eternamente."
  },
   {
    id: 23,
    titulo: "Quieras saber por qué me enamoré de ti",
    fecha: "2026-12-13",
    texto: "Mensaje de prueba 23"
  },
   {
    id: 24,
    titulo: "Sea San Valentín",
    fecha: "2027-02-14",
    texto: "Mensaje de prueba 24"
  },
   {
    id: 25,
    titulo: "Hayamos cumplido un año de novios",
    fecha: "2026-11-11",
    texto: "Mensaje de prueba 25"
  },
   {
    id: 26,
    titulo: "Hayamos cumplido un año de casados",
    fecha: "2027-06-22",
    texto: "Mensaje de prueba 26"
  },
   {
    id: 27,
    titulo: "Nuestra hija cumpla un año",
    fecha: "2027-04-18",
    texto: "Mensaje de prueba 27"
  },
   {
    id: 28,
    titulo: "Hayan pasado 10 meses",
    fecha: "2027-05-01",
    texto: "Mensaje de prueba 28"
  },
   {
    id: 29,
    titulo: "Haya pasado otro año más",
    fecha: "2027-08-02",
    texto: "Mensaje de prueba 29"
  },
   {
    id: 30,
    titulo: "Sea mi cumpleaños",
    fecha: "2026-11-11",
    texto: "Mensaje de prueba 30"
  },
   {
    id: 31,
    titulo: "Sea Navidad",
    fecha: "2026-12-25",
    texto: "Mensaje de prueba 31"
  },
   {
    id: 32,
    titulo: "Pienses que nadie te entiende",
    fecha: "2026-12-20",
    texto: "Mensaje de prueba 32"
  },
   {
    id: 33,
    titulo: "Pienses en mí",
    fecha: "2026-12-27",
    texto: "Mensaje de prueba 33"
  },
   {
    id: 34,
    titulo: "Necesites recordar quién eres",
    fecha: "2026-12-31",
    texto: "Mensaje de prueba 34"
  },
  {
  id: 35,
  titulo: "Estés pasando por un momento difícil",
  fecha: "2027-01-03",
  texto: "Mensaje de prueba 35"
},
{
  id: 36,
  titulo: "Sea fin de año",
  fecha: "2026-12-31",
  texto: "Mensaje de prueba 36"
},
{
  id: 37,
  titulo: "Te aburras",
  fecha: "2027-01-10",
  texto: "Mensaje de prueba 37"
},
{
  id: 38,
  titulo: "Te sientas inseguro",
  fecha: "2027-01-17",
  texto: "Mensaje de prueba 38"
},
{
  id: 39,
  titulo: "Quieras saber mis cosas favoritas de ti",
  fecha: "2027-01-24",
  texto: "Mensaje de prueba 39"
},
{
  id: 40,
  titulo: "Necesites motivación",
  fecha: "2027-01-31",
  texto: "Mensaje de prueba 40"
},
{
  id: 41,
  titulo: "Pienses que no te quiero",
  fecha: "2027-02-07",
  texto: "Mensaje de prueba 41"
},
{
  id: 42,
  titulo: "Quieras recordar nuestra luna de miel",
  fecha: "2027-02-21",
  texto: "Mensaje de prueba 42"
},
{
  id: 43,
  titulo: "Necesites tomar una decisión difícil",
  fecha: "2027-02-28",
  texto: "Mensaje de prueba 43"
},
{
  id: 44,
  titulo: "Hayas tenido un día perfecto",
  fecha: "2027-03-07",
  texto: "Mensaje de prueba 44"
},
{
  id: 45,
  titulo: "Pienses en nuestro futuro",
  fecha: "2027-03-14",
  texto: "Mensaje de prueba 45"
},
{
  id: 46,
  titulo: "Simplemente quieras abrir una carta",
  fecha: "2027-03-21",
  texto: "Mensaje de prueba 46"
},
{
  id: 47,
  titulo: "Hayamos conseguido algo juntos",
  fecha: "2027-03-28",
  texto: "Mensaje de prueba 47"
},
{
  id: 48,
  titulo: "Sea el cumpleaños de Eve",
  fecha: "2026-08-18",
  texto: "Nuestra bebita cumple otro mesecito de vidaaa:(. Estoy tristísimo, ¿cómo puede crecer tan rápido? Hasta hace poquito era una lenteja en tu vientre y ahora se ríe cuando nos mira y patalea con tal alegría. Es la más hermosa.\n\nNuestra hijita es un pedacito tuyo y otro pedacito mío, el fruto de nuestro amor eterno. Gracias por formar una familia conmigo, amor, os amo más que a nada en este mundo. Sois mi hogar."
},
{
  id: 49,
  titulo: "Sea nuestro mesiversario",
  fecha: "2026-08-11",
  texto: "Hola, mi cariñito. Si has abierto esta cartita es porque hoy se cumple otro mesecito de nuestra primera promesa. Pasa tan rápido el tiempo, amorcito, cada mes es una ilusión más, sabiendo que sigo a tu lado, que seguimos cumpliendo y queriéndonos como el primer día. Todavía me parece taaan lindo que coincida con mi cumpleaños, para mantener la tradición :3\n\nCada día a tu lado es un día más feliz en mi vida, se me va llenando el corazoncito conforme vamos creciendo. Te amo más que a nadie, bebé. Gracias por estar a mi lado, por cuidarme, por quererme y por hacerme tan feliz. Eres lo mejor que me ha pasado en la vida y no puedo esperar a seguir construyendo recuerdos contigo. Feliz mesiversario, mi amorcito. Te amo con todo mi corazón."
},
{
  id: 50,
  titulo: "Viaje al futuro",
  fecha: "2030-01-01",
  texto: "Mensaje de prueba 50"
},
{
  id: 51,
  titulo: "¿Cuánto me conoces?",
  fecha: "2026-07-30",
  texto: "",
  tipo: "quiz"
},
{
  id: 52,
  titulo: "Nuestra playlist",
  fecha: "2026-07-31",
  texto: "",
  tipo: "playlist",
  url: "https://open.spotify.com/playlist/41ov2tgKMbu8anI9Px4jjd?si=xH_sg0vOQe6dirMXRFhdwA",
  embed: "https://open.spotify.com/embed/playlist/41ov2tgKMbu8anI9Px4jjd"
}
];

function cartaDisponible(fechaCarta) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const [anio, mes, dia] = fechaCarta.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);
  fecha.setHours(0, 0, 0, 0);

  return hoy.getTime() >= fecha.getTime();
}

function formatearFecha(fecha) {
  const [anio, mes, dia] = fecha.split("-").map(Number);
  const d = new Date(anio, mes - 1, dia);

  return d.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderCartas() {

  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  cartas.forEach(carta => {

    const disponible = cartaDisponible(carta.fecha);

    const card = document.createElement("div");

    card.className =
      "envelope-card" + (!disponible ? " locked" : "");

    let imagen = "public/sobre.png";

    if (carta.tipo === "quiz") {
      imagen = "public/quiz.png";
    }

    if (carta.tipo === "playlist") {
      imagen = "public/playlist.png";
    }

    card.innerHTML = `
      <img src="${imagen}" class="envelope-image">

      <span class="label">${carta.titulo}</span>

      <span class="unlock-date">
        ${
          disponible
            ? "Disponible"
            : "Ábrela el " + formatearFecha(carta.fecha)
        }
      </span>
    `;

    card.addEventListener("click", () => {

      if (!disponible) {

        document.getElementById("locked-message").innerHTML = `
          <div class="lock-big">🔒</div>
          Esta carta se desbloquea el <strong>${formatearFecha(carta.fecha)}</strong>
        `;

        document.getElementById("locked-modal").classList.add("open");
        return;
      }

      openLetter(carta);
    });

    grid.appendChild(card);
  });
}

function openLetter(carta) {

  document.getElementById("letter-title").textContent = carta.titulo;

  const body = document.getElementById("letter-body");

  if (carta.tipo === "quiz") {

    body.innerHTML = `<div id="quiz-container"></div>`;
    iniciarQuiz();

 } else if (carta.tipo === "playlist") {

  body.innerHTML = `
    <p class="playlist-text">
      ${carta.texto}
    </p>

    <iframe
      src="${carta.embed}"
      width="100%"
      height="600"
      style="border:none;border-radius:16px;margin:18px 0;"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;


  } else {

    body.textContent = carta.texto;

  }

  document.getElementById("letter-date").textContent =
    "Abierta el " + formatearFecha(carta.fecha);

  document.getElementById("letter-modal").classList.add("open");
}

function closeLetter() {
  document.getElementById("letter-modal").classList.remove("open");
}

function closeLocked() {
  document.getElementById("locked-modal").classList.remove("open");
}

/* ================= QUIZ ================= */

let preguntaActual = 0;
let puntuacion = 0;

const preguntas = [

  {
    pregunta: "¿Cuál es mi flor favorita?",
    opciones: ["El jazmín", "Los girasoles", "La flor de loto", "Cerezos japoneses"],
    correcta: 2
  },
  {
    pregunta: "¿Y mi color favorito?",
    opciones: ["Amarillo", "Azul", "Blanco", "El verde de tus ojos"],
    correcta: 0
  },
  {
    pregunta: "¿Y mi lectura favorita?",
    opciones: ["Trono de Cristal", "Una corte de rosas y espinas", "La canción de Aquiles", "Crepúsculo"],
    correcta: 2
  },
  {
    pregunta: "¿Y mi serie favorita?",
    opciones: ["Bob Esponja", "Gravity Falls", "Los Simpsons", "Rick y Morty"],
    correcta: 3
  }

];

function iniciarQuiz() {

  preguntaActual = 0;
  puntuacion = 0;

  mostrarPregunta();
}

function mostrarPregunta() {

  const p = preguntas[preguntaActual];

  document.getElementById("quiz-container").innerHTML = `

    <div class="quiz-card">

      <div class="quiz-progress">
        ${preguntaActual + 1}/${preguntas.length}
      </div>

      <h3 class="quiz-title">
        ${p.pregunta}
      </h3>

      <div class="quiz-options">
        ${p.opciones.map((op, index) => `
          <button class="quiz-btn" onclick="responderQuiz(${index})">
            ${op}
          </button>
        `).join("")}
      </div>

    </div>

  `;
}

function responderQuiz(opcion) {

  if (opcion === preguntas[preguntaActual].correcta) {
    puntuacion++;
  }

  preguntaActual++;

  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {

  let mensaje = "";

  if (puntuacion <= 1) {
    mensaje = "OK, CASSIAN. OK.";
  } else if (puntuacion <= 3) {
    mensaje = "mmmmm, te lo perdono pero hay que mejorar.";
  } else {
    mensaje = "Muy bien, cariño. :3";
  }

  document.getElementById("quiz-container").innerHTML = `

    <div class="quiz-result">

      <h2>${puntuacion}/${preguntas.length}</h2>

      <p>${mensaje}</p>

      <button class="quiz-btn" onclick="iniciarQuiz()">
        Volver a jugar
      </button>

    </div>

  `;
}

renderCartas()