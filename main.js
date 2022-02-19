    function showValoracion() {
             myValoracion = document.getElementById("miRango").value
    alert ("Has valorado con " + myValoracion + " puntos" );
  }
  
  function showCuenta() {
     myPais = document.getElementById("pais").value
     myCiban = document.getElementById("ciban").value
     myEnti = document.getElementById("enti").value
     mySuc = document.getElementById("suc").value
     myDc = document.getElementById("dc").value
     myCuenta = document.getElementById("cuenta").value
    alert ("Le informamos que su cuenta bancaria es: "+ myPais + myCiban + myEnti + mySuc + myDc + myCuenta);
  }
  
  function showDiaSemana() {
      var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
      var myDate = document.getElementById('fechaValoracion').valueAsDate;
      var date = myDate.getDay();
      var day = weekday[date];
    alert ("La fecha seleccionada en el elemento de fecha es un "+ day);
  }
  

  function isSpainZipCode(str) 
{
  return /^\d{5}(-\d{4})?$/.test(str);
  
}

  function isProvince(str) 
{

  const codeProvince = +str.substring(0,2);
    if(codeProvince >= 1 && codeProvince <= 52) {
        return true;
    }
  return false;
}


function validateInput() 
{
  console.log("validateInput");
  let zipCode = document.getElementById("zipCode").value;
  let message = "";
  document.getElementById("msg").classList.remove('error')
  document.getElementById("msg").classList.remove('exito')

  if (isSpainZipCode(zipCode) && isProvince(zipCode) ) 
  {
    message = "El código postal es válido";
    document.getElementById("msg").innerHTML = message;
     document.getElementById("msg").classList.add('exito')

  } else {
    message = "El código postal no es válido";
    document.getElementById("msg").innerHTML = message;
    document.getElementById("msg").classList.add('error')
  }
}
  