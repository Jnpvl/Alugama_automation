function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomFromArray(array) {
    return array[getRandomInt(0, array.length - 1)];
  }
  
  function getRandomDate(startDate, endDate) {
    const start = startDate.getTime();
    const end = endDate.getTime();
    return new Date(start + Math.random() * (end - start));
  }
  
  export function createRandomUserData() {
    const firstNames = [
        "Juan", "María", "Luis", "Carmen", "Jose", "Ana",
        "Pedro", "David", "Lucia", "Jesus", "Adriana", "Pablo",
        "Miguel", "Laura", "Santiago", "Patricia", "Daniel", "Rosa",
        "Alejandro", "Teresa", "Carlos", "Sofia", "Sebastian", "Isabel",
        "Manuel", "Andrea", "Diego", "Marta", "Jorge", "Sara",
        "Fernando", "Elena", "Alberto", "Paula", "Ricardo", "Silvia"
      ];
      
      const lastNames = [
        "Hernandez", "Garcia", "Martinez", "Lopez", "Gonzalez", "Perez",
        "Rodriguez", "Sanchez", "Ramirez", "Cruz", "Flores", "Gomez",
        "Morales", "Ortiz", "Ruiz", "Diaz", "Aguilar", "Mendoza",
        "Jimenez", "Castro", "Romero", "Vazquez", "Ramos", "Herrera",
        "Torres", "Alvarez", "Reyes", "Chavez", "Castillo", "Soto"
      ];
      const lastNames2 = [
        "Hernandez", "Garcia", "Martinez", "Lopez", "Gonzalez", "Perez",
        "Rodriguez", "Sanchez", "Ramirez", "Cruz", "Flores", "Gomez",
        "Morales", "Ortiz", "Ruiz", "Diaz", "Aguilar", "Mendoza",
        "Jimenez", "Castro", "Romero", "Vazquez", "Ramos", "Herrera",
        "Torres", "Alvarez", "Reyes", "Chavez", "Castillo", "Soto"
      ];
  
    const firstName = getRandomFromArray(firstNames);
    const lastName = getRandomFromArray(lastNames);
    const lastName2 = getRandomFromArray(lastNames);
    const nss = `${getRandomInt(100000000, 999999999)}${getRandomInt(0, 9)}`;
    const birthDate = getRandomDate(new Date(1960, 0, 1), new Date(2003, 0, 1));
    const startDate = getRandomDate(new Date(1960, 0, 1), new Date(2003, 0, 1));
    const num = getRandomInt(1,1000);
    
  
    const rfc = `${lastName.substring(0, 2)}${firstName.substring(0, 1)}${birthDate.getFullYear().toString().substring(2)}${("0" + (birthDate.getMonth() + 1)).slice(-2)}${("0" + birthDate.getDate()).slice(-2)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}`;
  
    
    const curp = `${rfc.substring(0, 10)}HOM${("0" + birthDate.getDate()).slice(-2)}XX${getRandomInt(0, 9)}${getRandomInt(0, 9)}R9`;
  
    return {
      nombre: firstName,
      aPaterno: lastName,
      aMaterno: lastName2,
      nss: nss,
      rfc: rfc,
      curp: curp,
      fechaNacimiento: birthDate.toISOString().split('T')[0],
      sexoEmpleado: getRandomInt(1, 2).toString(),
      estadoCivil: getRandomInt(1, 6).toString(),
      calle: 'calle',
      numExt: num,
      numInt: num,
      referencia: 'referencia',
      cp: '83104',
      colonia: getRandomFromArray(['66697', '19839', '86954', '15613', '68297']),
      correoEmpleado: `${firstName.toLowerCase()}${getRandomInt(0,10000)}@yopmail.com`,
      numTel: `662${getRandomInt(1000000, 9999999)}`,
      comentariosTel: 'comentario general',
      fechaInicio: startDate.toISOString().split('T')[0], 
      comentarios: 'comentario relacion laboral',
      empresa:'1',
      sucursal:'1',
      departamento:'1',
      puesto:'1',

    };
  }
  