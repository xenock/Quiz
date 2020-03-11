const question = {
  title: "De que familia eres?",
  answers: [
    {label: 'Los rubios', id: 'lannister', name: 'got', value: 'lannister'},
    {label: 'Los de la alfombra del IKEA', id: 'stark', name: 'got', value: 'stark'},
    {label: 'Los follacabras', id: 'martell', name: 'got', value: 'martell'},
    {label: 'Los pasaos por lejia', id: 'caminantes', name: 'got', value: 'caminantes'},
  ]
};

const question2 = {
  title: 'Que se come en Huerva?',
  answers: [
    {label: 'Choquito frito', id: 'choco', name: 'comida', value: 'choco'},
    {label: 'Jamon 5J', id: 'jamon', name: 'comida', value: 'jamon'},
    {label: 'Gambas blanca', id: 'gambas', name: 'comida', value: 'gambas'},
  ]
}

const imprimeRespuesta = (respuesta) => {
  const { id, label, name, value } = respuesta
  return `
      <div>
        <label for="${id}">${label}</label>
        <input type="radio" id="${id}" name="${name}" value=${value}>
      </div>`;
}

const botonFormulario = () => `<button>Enviar</button>`;

const tituloPregunta = (titulo) => `<p>${titulo}</p>`;

const imprimePregunta = (pregunta) => {
  const {
    title,
    answers
  } = pregunta;

  const respuestasArray = answers.map(imprimeRespuesta)

  const respuestasPregunta = respuestasArray.join('');

  const titulo = tituloPregunta(title);

  return titulo + respuestasPregunta;
}

// const preguntaImpresa = imprimePregunta(question);
const coleccion = [question, question2]
const coleccionImpresa = coleccion.map(imprimePregunta).join('')

const gestionaEnvio = (event) => {
  event.preventDefault()

  console.log($form.elements.got)
  console.log($form.elements.comida)
}

const $form = document.getElementsByTagName('form')[0]
const boton = botonFormulario();
// $form.innerHTML = preguntaImpresa  + boton
$form.innerHTML = coleccionImpresa  + boton

$form.addEventListener('submit', gestionaEnvio)