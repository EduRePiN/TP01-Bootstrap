function calcularPrecio() {
    const precioTicket = 200;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categoria = document.getElementById("categoria").value;
    var pTotal = cantidad * precioTicket;
    var pDescuento;
    var tAPagar = "Total a Pagar: $";
    var total = document.getElementById("total");

    if(categoria == "Estudiante"){
        pDescuento = pTotal * 0.2;
    } else if (categoria == "Trainee"){
        pDescuento = pTotal * 0.5;
    } else{
        pDescuento = pTotal * 0.85;
    }
    document.getElementById("total").value = tAPagar + pDescuento ;
    total.innerHTML = `Total a Pagar: $ ${pDescuento} `;
}
