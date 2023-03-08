function somar() {
    num1 = document.getElementById("inputOne")
    n1 = parseInt(num1.value)

    num2 = document.getElementById("inputTwo")
    n2 = parseInt(num2.value)

    let resultado = n1 + n2
    const parentElement = document.getElementById('result');
    const newElement = document.createElement('p');

    newElement.textContent = resultado;
    parentElement.appendChild(newElement);

}