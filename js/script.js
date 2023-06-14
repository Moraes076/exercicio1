let fruta = prompt("Fruta: ")

switch (fruta) {
    case "maçã":
        alert ("Não vendemos esta fruta aqui")
        break;

    case "kiwi":
        alert ("Estamos com escassez de kiwis")
        break;

    case "melancia":
        alert ("Aqui está, são 3 reais o quilo")
        break;

    default:
        alert ("Seleção errada tente novamente.")
        break;
}