const form = document.getElementById("form");
const nomusuari = document.getElementById("nomusuari");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// FUNCIONES
// function esObligatori(input) {
//   if (input.value.trim() === "") {
//     mostraError(input, prenNomInput(input) + " es obligatori");
//   }
// }

function esObligatori(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      mostraError(input, `${prenNomInput(input)} es obligatori`);
    }
  });
}

function comporvaLongitud(input, min, max) {
  if (input.value.trim().length < min) {
    mostraError(
      input,
      `${prenNomInput(input)} ha de tenir un minim de ${min} caracters`
    );
  } else if (input.value.trim().length > max) {
    mostraError(
      input,
      `${prenNomInput(input)} ha de tenir un menys de ${max} caracters`
    );
  } else {
    mostraCorrecta(input);
  }
}

function esEmailValid(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    mostraCorrecta(input);
  } else {
    let missatge = `${prenNomInput(input)} no te el format correcte`;
    mostraError(input, missatge);
  }
}

function comprovaContrasenyesSonIguals(input1, input2) {
  if (input1.value !== input2.value) {
    let missatge = `${prenNomInput(input2)} no es igual`;
    mostraError(input2, missatge);
  } else {
    mostraCorrecta(input2);
  }
}

function mostraError(input, missatge) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerHTML = ` ${missatge}`;
}

function mostraCorrecta(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control correcte";
}

function prenNomInput(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// EVENTO

form.addEventListener("submit", (e) => {
  e.preventDefault();

  comporvaLongitud(nomusuari, 3, 15);
  comporvaLongitud(password, 6, 25);
  comporvaLongitud(password2, 6, 25);
  esEmailValid(email);
  comprovaContrasenyesSonIguals(password, password2);
  esObligatori([nomusuari, email, password, password2]);
});
