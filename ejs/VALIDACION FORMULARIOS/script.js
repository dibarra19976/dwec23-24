const form = document.getElementById("form");
const nomusuari = document.getElementById("nomusuari");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// FUNCIONES
function esObligatori(input){
    if(input.value.trim() === ""){
       mostraError(input, prenNomInput(input)  + " es obligatori");
    }
}

function comporvaLongitud(input, min, max){
    if(input.value.trim().length < min){
        mostraError(input, prenNomInput(input)  + " ha de tenir un minim de " + min + " caracters");

    }
    else if(input.value.trim().length > max){
        mostraError(input, prenNomInput(input)  + " ha de tenir un menys de " + max + " caracters");

    }
    else{
        mostraCorrecta(input);
    }
}

function mostraError(input, missatge){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const label = formControl.querySelector("label");
    
    formControl.className = 'form-control error';
    small.innerHTML = " " + missatge;
}

function mostraCorrecta(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control correcte';

}

function prenNomInput(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// EVENTO

form.addEventListener("submit", (e) => {
    e.preventDefault;
    
    esObligatori(nomusuari);
    esObligatori(email);
    esObligatori(password);
    esObligatori(password2);

    comporvaLongitud(nomusuari, 3, 15);
});