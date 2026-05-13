function calcularSuma(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        document.getElementById("resultado").innerText = "Introduce solo números enteros";
        return;
    }

    let suma =0;

    let numMin = Math.min(num1,num2)
    let numMax = Math.max(num1,num2)

    for(let i = numMin; i<=numMax; i++){
        suma+=i;
    }

    document.getElementById("resultado").innerText = `Resultado = ${suma}`;
}