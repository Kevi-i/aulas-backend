// 1 - imprimir o número 1 até 10

for (let ini = 1; ini <= 10; ini++) {
    console.log(ini)
}

// 2 - imprimir uma palavra ao contrário
// ex: monitor -> rotinom

function reverter(palavra)
{

let nova = "";

for (let ini = palavra.length - 1; ini >= 0; ini -= 1)
{
    nova += palavra.charAt(ini);
}

    return nova;
}

