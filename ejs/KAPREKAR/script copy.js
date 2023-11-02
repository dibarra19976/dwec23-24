const numero = prompt("Escribe un numero de cuatro cifras");  

const array = [...numero];
console.log(array);


validar(array);

function validar(array){
  console.log(array);
  let cuatro_digitos = true;
  let dos_distintos = true;

  if(array.length!=4){
    cuatro_digitos = false;

  }
  
  // else{
  //   for(let i =0; i<array.length||dos_distintos!==false; i++){
  //     let uno_igual = false;
  //     for(let j = i+1; j<array.length;j++){
  //       if(array[i]==array[j]){
  //         uno_igual== true;
  //       }
  //       else if(array[i]==array[j]&&uno_igual==true){
  //         dos_distintos == false;
  //       }
  //     }

  //   }
  // }

  console.log(cuatro_digitos);
  console.log(dos_distintos);
}