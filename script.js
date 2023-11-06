function bmicalculate() {
    const userkg = parseFloat(document.getElementById("userkg").value);
    const userm = parseFloat(document.getElementById("userm").value);

    const output = userkg / ((userm * userm)).toFixed(1)

    document.getElementById("result").innerHTML = output

    if (output < 18.5) {
        document.getElementById("finalresult").textContent = "Podváha";
    } else if (output >= 18.5 && output < 25) {
        document.getElementById("finalresult").textContent = "Normální váha";
    } else if (output >= 25 && output < 30) {
        document.getElementById("finalresult").textContent = "Nadváha";
    } else if (output >= 30) {
        document.getElementById("finalresult").textContent = "Obezita";
    }

}