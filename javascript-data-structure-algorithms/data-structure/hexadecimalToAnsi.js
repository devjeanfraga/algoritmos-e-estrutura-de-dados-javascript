// código simples 
function hexToAnsi(hexColor) {

    // Remove o caractere "#", se presente, e converte a cor para minúsculas;
    hexColor = hexColor.replace("#", "").toLowerCase();

    // Converte a cor hex para RGB
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    // Retorna o código ANSI correspondente
    return `\\[\\033[38;2;${r};${g};${b}m\\]`;
}
