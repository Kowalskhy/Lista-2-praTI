const prompt = require('prompt-sync')();

function horario() {
    let horarios = [];

    for (let i = 0; i < 5; i++) {
        let hora, min, seg;

        do {
            hora = parseInt(prompt("Insira as horas (0-23): "));
            min = parseInt(prompt("Insira os minutos (0-59): "));
            seg = parseInt(prompt("Insira os segundos (0-59): "));

            if (isNaN(hora) || hora < 0 || hora > 23 ||
                isNaN(min) || min < 0 || min > 59 ||
                isNaN(seg) || seg < 0 || seg > 59) {
                console.log("Informação Inválida!");
            } else {
                break;
            }
        } while (true);

        horarios.push([hora, min, seg]);
    }

    return horarios;
}

function mostra_hora(horarios) {
    for (let i = 0; i < horarios.length; i++) {
        let [hora, min, seg] = horarios[i];
        console.log(`${hora.toString().padStart(2, '0')}.${min.toString().padStart(2, '0')}.${seg.toString().padStart(2, '0')}`);
    }
}

const horarios = horario();
mostra_hora(horarios);