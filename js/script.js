function calculateOil() {
    var uleiReciclat = document.getElementById("ulei-reciclat").value;
    var apaPoluata = 1000000;

    var apaSalvata = uleiReciclat * apaPoluata;
    var varsta = uleiReciclat * 14;

    document.getElementById("apa-salvata").innerHTML = apaSalvata;
    document.getElementById("varsta").innerHTML = varsta;
}
