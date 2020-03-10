// Paso 3: Extraer el objeto de la pregunta
const question = {
    title: "Que tipo de comedor eres?",
    answers: [
      'vegetariano',
      'carnivoro',
      'vegano',
      'pescepescetariano'
    ]
  };
  
  const preguntasArray = (respuesta) => {
    return `
      <div>
        <label for="${respuesta}">${respuesta}</label>
        <input type="radio" id="${respuesta}" name="tipo">
      </div>`;
  }
  
  // Paso 4: Meter el objeto en la funcion e ir imprimiendo
  const imprimePregunta = (pregunta) => {
    const { title, answers } = pregunta;
    
    const tituloPregunta = `<p>${title}</p>`;
    const respuestasArray = answers.map(preguntasArray)
    
    const respuestasPregunta = respuestasArray.join('');
    
    return tituloPregunta + respuestasPregunta;
  }

  // Paso 2: Meter el html en una funcion y devolverlo
  const preguntaImpresa = imprimePregunta(question);

  // Paso 1: Cortar texto y agregarlo dinamicamente
//   const preguntaImpresa = `
//     <p>Que tipo de comedor eres?</p>
//     <div>
//       <label for="vegano">vegano</label>
//       <input type="radio" id="vegano" name="tipo">
//     </div>
  
//     <div>
//       <label for="carnivoro">Carnivoro</label>
//       <input type="radio" id="carnivoro" name="tipo">
//     </div>
    
//     <div>
//       <label for="pescepescetarianos">pescepescetarianos</label>
//       <input type="radio" id="pescepescetarianos" name="tipo">
//     </div>
    
//     <div>
//       <label for="vegetariano">vegetariano</label>
//       <input type="radio" id="vegetariano" name="tipo">
//     </div>
//   `;
  
  const $form = document.getElementsByTagName('form')[0];
  $form.innerHTML = preguntaImpresa;