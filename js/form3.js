function validar_telefono(telefono = "") {
  //var resultado = false;
  //var telefono = document.getElementById("campoTelefono").value;
  if (telefono.length > 6 && telefono.length <= 10) {
    //resultado = true;
    const secondPartValid =
      telefono.includes("@") ||
      telefono.includes("!") ||
      telefono.includes("_") ||
      telefono.includes("-") ||
      telefono.includes("/") ||
      telefono.includes("#") ||
      telefono.includes("%");

    if (!secondPartValid) {
      //resultado = false;
      return (false);
      //alert("el telefono no debe tener caracteres especiales ");
    } else {
      //resultado = true;
      return (false);
      //alert("el telefono es correcto");
    }
  } else {
    //alert("El telefono debe contener entre 7 y 10 numeros");
    return false;
  }

}

function validar_direccion(address = "") {
  if (address.length > 6 && address.length <= 30) {

    const firstPartValid =
      address.toLowerCase().includes("carrera") ||
      address.toLowerCase().includes("calle") ||
      address.toLowerCase().includes("circular") ||
      address.toLowerCase().includes("transversal");

    const containeHash = address.toLowerCase().includes("#");

    if (!firstPartValid || !containeHash) {
      //alert("La dirección debe contener: (CARRERA, CALLE, TRANSVERSAL)");
      console.log("Debe contener calle")
      return false;
    }
    if (containeHash) {
      //alert("La dirección no contiene el #");
      console.log("no tiene numeroal")
      return false;
    }
    if (!firstPartValid && !containeHash) {
      // alert(
      //   "La dirección debe contener: (CARRERA, CALLE, TRANSVERSAL) y (#)"
      // );
      console.log("No tiene nada")
      return false;
    } else {
      //alert("Dirección válida");
      console.log("Todo bien")
      return false;
    }
  } else {
    //alert("Debe contener más de 6 y maximo 30 ")
    console.log("asdasds")
    return true;
  }
}

function verifyText(event) {
  const ipt = document.getElementById("campoDireccion").value;
  const ipt2 = document.getElementById("campoTelefono").value;
  const verify = validar_direccion(ipt);
  const verify2 = validar_telefono(ipt2);
  if (!verify) {
    event.preventDefault();
  }
  if (!verify2) {
    event.preventDefault();
  }
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;