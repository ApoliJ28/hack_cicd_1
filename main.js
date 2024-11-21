// mensaje en el log
console.log("Esto es un mensaje en el log");
// error
console.error("Esto es un error");
// Añadir información
console.info("Añade información a la consola");
// warning
console.warn("Envía un aviso");

const gente = [
	{nombre: 'Victor', edad: 24},
  {nombre: 'Jesica', edad: 24},
  {nombre: 'Ricardo', edad: 25},
];
console.table(gente);
gente.forEach((persona,index) =>{
	console.groupCollapsed(`${persona.nombre}`);
  console.log(persona.edad);
  console.log("hola");
  console.groupEnd(`${persona.nombre}`);
});