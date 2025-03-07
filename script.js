function calcularTempo() {
    let dataInicio = new Date("2024-01-14"); // Altere para a data que começaram a namorar
    let hoje = new Date();
    let diff = hoje - dataInicio;

    let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    let anos = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = (dias % 365) % 30;

    document.getElementById("contador").innerText = `${anos} anos, ${meses} meses e ${diasRestantes} dias`;
}

calcularTempo();
