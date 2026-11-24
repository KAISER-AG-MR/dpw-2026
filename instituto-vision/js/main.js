/* Instituto de la Visión — interacciones del sitio */
/* ===== PROMOCIÓN DEL MES =====
   Para cambiarla cada mes, llena estos campos. Si "titulo" queda vacío,
   se muestra el mensaje general que invita a preguntar por WhatsApp. */
const PROMO={
  titulo:'',      // ej. 'Examen de la vista + armazón'
  detalle:'',     // una o dos frases de qué incluye
  precio:'',      // ej. '$999'
  vigencia:''     // ej. 'Válida hasta el 30 de noviembre'
};
(()=>{
  const mes=new Date().toLocaleDateString('es-MX',{month:'long'});
  document.querySelectorAll('.pm').forEach(e=>e.textContent='Promoción de '+mes);
  let msg='Hola, quiero informes de la promoción de '+mes;
  if(PROMO.titulo){
    const all=(c,f)=>document.querySelectorAll(c).forEach(f);
    all('.pt',e=>e.textContent=PROMO.titulo);
    if(PROMO.detalle)all('.pd',e=>e.textContent=PROMO.detalle);
    if(PROMO.precio||PROMO.vigencia){
      all('.pmeta',e=>e.hidden=false);
      all('.pp',e=>e.textContent=PROMO.precio);
      all('.pv',e=>e.textContent=PROMO.vigencia);
    }
    msg+=': '+PROMO.titulo;
  }
  document.querySelectorAll('.pw').forEach(e=>e.href='https://wa.me/528711414619?text='+encodeURIComponent(msg));
})();

/* ===== ESPECIALIDADES =====
   Información tomada de las páginas de cada especialidad en ivision.com.mx,
   reescrita en lenguaje sencillo. Cada una tiene:
   id, pregunta (gancho para el paciente), nombre, resumen corto,
   que (qué es) y bloques [título, [elementos]] que se ven en la ficha. */
const ESP=[
 {id:'miopia',pregunta:'¿Ves borroso de lejos o las letras se ven alargadas?',nombre:'Miopía y Astigmatismo',
  resumen:'Defectos de refracción que hacen que veas borroso. Se corrigen con lentes, láser o lente intraocular.',
  que:'En la miopía las imágenes se enfocan delante de la retina y cuesta ver de lejos; suele aparecer en la infancia. En el astigmatismo la córnea no tiene la misma curvatura en toda su superficie y la visión se ve borrosa o distorsionada a cualquier distancia. También atendemos la hipermetropía.',
  bloques:[['Señales comunes',['Dificultad para ver de lejos','Visión borrosa o distorsionada','Imágenes que se ven alargadas']],
           ['Cómo te ayudamos',['Cirugía refractiva con láser (PRK)','Implante de lente intraocular','Técnica elegida según tu estudio, edad y dioptrías']]]},
 {id:'glaucoma',pregunta:'¿Tienes más de 40 años o familiares con glaucoma?',nombre:'Glaucoma',
  resumen:'Una enfermedad silenciosa que reduce la visión poco a poco. Detectarla a tiempo es clave.',
  que:'El glaucoma disminuye la visión de forma gradual y casi siempre sin aviso. Es una de las causas más comunes de ceguera, y se estima que la mitad de quienes lo tienen no lo saben. Si de pronto sientes dolor y la pupila dilatada, puede ser glaucoma de ángulo cerrado: busca atención de inmediato.',
  bloques:[['Factores de riesgo',['Más de 40 años','Antecedentes familiares','Diabetes o presión arterial alta','Miopía o hipermetropía','Uso prolongado de esteroides','Golpes fuertes en los ojos']],
           ['Estudios',['Medición de la presión del ojo','Examen del nervio óptico','Campos visuales']],
           ['Tratamientos',['Gotas o medicamentos','Cirugía láser','Cirugía de filtración o implante de válvulas']]]},
 {id:'retina',pregunta:'¿Tienes diabetes o ves manchas y sombras?',nombre:'Retina',
  resumen:'Estudio, diagnóstico y tratamiento de la retina, la mácula, la úvea y el vítreo.',
  que:'La especialidad de vítreo-retina atiende la parte posterior del ojo. Contamos con retina médica, retina quirúrgica, atención de retinopatía del prematuro y una unidad especializada en enfermedades de la mácula.',
  bloques:[['Qué atendemos',['Desprendimiento de retina','Retinopatía diabética','Hemorragias vítreas','Inflamaciones del vítreo o la retina','Tumores intraoculares','Cuerpos extraños dentro del ojo','Complicaciones de cirugía de catarata']],
           ['Tratamientos',['Cirugía de desprendimiento de retina','Láser para retinopatía diabética','Cirugía de lentes desplazadas (lente Artisan o fijada a la esclera)']]]},
 {id:'cornea',pregunta:'¿Visión opaca o te dijeron que tienes catarata?',nombre:'Córnea',
  resumen:'La capa transparente al frente del ojo. Cirugía láser, cataratas, pterigión y más.',
  que:'La córnea es una membrana transparente en forma de disco abombado que está delante del iris. Antes de cualquier cirugía hacemos una valoración integral para saber si eres candidato.',
  bloques:[['Procedimientos',['Cirugía láser para miopía, hipermetropía y astigmatismo','Cirugía de catarata','Anillos intracorneales','Cross-linking','Cirugía de pterigión','Trasplante de córnea']]]},
 {id:'segmento',pregunta:'¿Ojo rojo, irritado o con sensación de basurita?',nombre:'Segmento Anterior del Ojo',
  resumen:'La parte frontal del ojo: córnea, iris y cristalino. Aquí se atienden las cataratas.',
  que:'El segmento anterior va desde la córnea hasta la parte posterior del cristalino, el lente natural que nos ayuda a enfocar. Muchas de sus molestias se parecen entre sí, por eso es importante no automedicarse y acudir con un especialista.',
  bloques:[['Qué atendemos',['Catarata','Queratocono','Uveítis','Conjuntivitis','Pterigión','Hipopión']],
           ['Tratamientos para queratocono',['Crosslinking','Anillos intracorneales','Queratoplastia']]]},
 {id:'estrabismo',pregunta:'¿Tus ojos no miran en la misma dirección?',nombre:'Estrabismo',
  resumen:'Desviación de uno de los ojos. Atención para niños y adultos.',
  que:'El estrabismo ocurre cuando la línea visual de un ojo se desvía hacia adentro (convergente) o hacia afuera (divergente). Además de la visión, afecta la autoestima. Muchos adultos lo tienen desde la niñez, y en otros casos aparece por otra enfermedad.',
  bloques:[['Señales comunes',['Ojos desviados','Visión doble','Movimientos descoordinados','Pérdida de percepción de profundidad']],
           ['Puede asociarse a',['Diabetes','Enfermedad de la tiroides','Miastenia gravis','Golpes en la cabeza','Accidentes cerebrovasculares']]]},
 {id:'parpados',pregunta:'¿Párpados caídos o bolsas que te hacen ver cansado?',nombre:'Cirugía Plástica de Ojo y Párpado',
  resumen:'Cirugía estética y reconstructiva de los párpados y el área alrededor de los ojos.',
  que:'La blefaroplastia corrige el exceso de piel, grasa y músculo en los párpados, que da apariencia de cansancio y en algunos casos llega a tapar la visión. También reconstruye daños por golpes, enfermedades o envejecimiento. Suele indicarse a partir de los 40 años.',
  bloques:[['Procedimientos',['Blefaroplastia superior','Blefaroplastia inferior','Blefaroplastia transconjuntival','Blefaroplastia subciliar']],
           ['Coméntalo en tu consulta si tienes',['Problemas de tiroides','Ojo seco','Presión alta','Enfermedades del corazón','Glaucoma o diabetes']]]},
 {id:'baja-vision',pregunta:'¿No mejoras ni con lentes?',nombre:'Baja Visión',
  resumen:'Pérdida de visión que no se corrige del todo con lentes. No es lo mismo que ceguera.',
  que:'La baja visión puede venir de la edad, de un golpe o de enfermedades congénitas, y dificulta las tareas diarias, el trabajo y la independencia. Te ayudamos a aprovechar al máximo la visión que tienes. Las revisiones periódicas ayudan a detectar a tiempo sus causas.',
  bloques:[['Causas frecuentes',['Degeneración macular por la edad','Glaucoma','Retinopatía diabética','Cataratas','Retinosis pigmentaria','Miopía degenerativa','Desprendimiento de retina']]]},
 {id:'trauma',pregunta:'¿Sufriste un golpe o te entró algo en el ojo?',nombre:'Trauma Ocular',
  resumen:'Atención especializada para lesiones del ojo. Entre más pronto, mejor.',
  que:'El ojo es muy sensible: casi cualquier lesión puede dejar secuelas si no se atiende bien. Es un motivo de urgencia frecuente. La lesión más común es un cuerpo extraño en la córnea; las heridas que atraviesan el ojo son las más delicadas.',
  bloques:[['Causas frecuentes',['Golpes y agresiones','Deportes','Trabajo industrial, agrícola o de construcción','Accidentes de tránsito']]]},
 {id:'trasplante',pregunta:'¿Tu córnea perdió su transparencia?',nombre:'Trasplante de Córnea',
  resumen:'Reemplazamos una córnea dañada por una córnea sana de donante.',
  que:'Se recomienda cuando la córnea pierde su transparencia y no puede curarse, lo que causa desde visión borrosa hasta incapacidad visual. Según qué capas estén dañadas, se reemplaza todo el espesor o solo una parte.',
  bloques:[['Tipos de trasplante',['Queratoplastia penetrante (todas las capas)','Queratoplastia lamelar anterior profunda (capas superficiales, queratocono o cicatrices)','Queratoplastia endotelial (capa interna)']]]},
 {id:'protesis',pregunta:'¿Necesitas reemplazar un ojo?',nombre:'Prótesis Ocular',
  resumen:'Prótesis hecha a tu medida, con apariencia natural.',
  que:'Para casos de pérdida parcial o total del ojo. Cada prótesis se elabora de forma individual para reproducir el volumen, la forma y el color de tu ojo sano, y ayudarte a recuperar tu calidad de vida.',
  bloques:[['Cómo la hacemos',['Hecha a la medida','Iris pintado a mano','Forma interna que copia tu cavidad para mejor movilidad']]]}
];
const WA='https://wa.me/528711414619?text=';
const flecha='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
document.querySelectorAll('#espGrid').forEach(g=>{
  g.innerHTML=ESP.map(e=>`
  <article class="esp-card">
    <p class="esp-q">${e.pregunta}</p>
    <h3>${e.nombre}</h3>
    <p class="esp-r">${e.resumen}</p>
    <button class="esp-mas" type="button" data-esp="${e.id}">Conoce más ${flecha}</button>
  </article>`).join('')+`
  <article class="esp-card esp-ayuda">
    <p class="esp-q">¿No sabes cuál es la tuya?</p>
    <h3>Te orientamos</h3>
    <p class="esp-r">Cuéntanos qué sientes y te agendamos con el especialista indicado.</p>
    <a class="btn btn-w" href="${WA+encodeURIComponent('Hola, no sé qué especialidad necesito, ¿me pueden orientar?')}" target="_blank" rel="noopener">Escríbenos</a>
  </article>`;
});
/* Ficha de cada especialidad */
const dlg=document.getElementById('espDlg');
if(dlg){
  const abrir=id=>{const e=ESP.find(x=>x.id===id);if(!e)return;
    dlg.querySelector('.dlg-q').textContent=e.pregunta;
    dlg.querySelector('.dlg-t').textContent=e.nombre;
    dlg.querySelector('.dlg-que').textContent=e.que;
    dlg.querySelector('.dlg-bloques').innerHTML=e.bloques.map(([t,l])=>`<div class="dlg-b"><h4>${t}</h4><ul>${l.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('');
    dlg.querySelector('.dlg-wa').href=WA+encodeURIComponent('Hola, quiero una cita para '+e.nombre);
    
    dlg.showModal();dlg.querySelector('.dlg-body').scrollTop=0;};
  document.addEventListener('click',ev=>{const b=ev.target.closest('[data-esp]');if(b)abrir(b.dataset.esp)});
  dlg.addEventListener('click',ev=>{if(ev.target===dlg||ev.target.closest('.dlg-x'))dlg.close()});
}

/* ===== Menú en celular ===== */
const links=document.getElementById('navLinks'),burger=document.getElementById('burger');
burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
