// Estrutura de dados
let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

// Função para adicionar um novo hotel
function adicionarHotel() {
    const nome = prompt("Digite o nome do hotel:");
    const cidade = prompt("Digite a cidade do hotel:");
    const quartosTotais = parseInt(prompt("Digite o número total de quartos:"), 10);
    
    if (!isNaN(quartosTotais) && quartosTotais > 0) {
        const hotel = {
            id: proximoIdHotel++,
            nome,
            cidade,
            quartosTotais,
            quartosDisponiveis: quartosTotais
        };
        hoteis.push(hotel);
        alert(`Hotel '${nome}' adicionado com sucesso!`);
    } else {
        alert("Número total de quartos inválido.");
    }
}

// Função para buscar hotéis por cidade
function buscarHoteisPorCidade() {
    const cidade = prompt("Digite a cidade para buscar hotéis:");
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    
    if (hoteisNaCidade.length > 0) {
        let mensagem = `Hotéis disponíveis em ${cidade}:\n`;
        hoteisNaCidade.forEach(hotel => {
            mensagem += `ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}\n`;
        });
        alert(mensagem);
    } else {
        alert(`Nenhum hotel encontrado na cidade ${cidade}.`);
    }
}

// Função para fazer uma reserva
function fazerReserva() {
    const idHotel = parseInt(prompt("Digite o ID do hotel para fazer a reserva:"), 10);
    const nomeCliente = prompt("Digite o nome do cliente:");
    
    const hotel = hoteis.find(h => h.id === idHotel);
    
    if (hotel && hotel.quartosDisponiveis > 0) {
        const reserva = {
            idReserva: proximoIdReserva++,
            idHotel,
            nomeCliente
        };
        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        alert(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}!`);
    } else {
        alert(`Reserva não pode ser feita. Verifique o ID do hotel ou a disponibilidade.`);
    }
}

// Função para cancelar uma reserva
function cancelarReserva() {
    const idReserva = parseInt(prompt("Digite o ID da reserva para cancelar:"), 10);
    const reserva = reservas.find(r => r.idReserva === idReserva);
    
    if (reserva) {
        const hotel = hoteis.find(h => h.id === reserva.idHotel);
        hotel.quartosDisponiveis++;
        reservas = reservas.filter(r => r.idReserva !== idReserva);
        alert(`Reserva ID ${idReserva} cancelada com sucesso.`);
    } else {
        alert(`Reserva ID ${idReserva} não encontrada.`);
    }
}

// Função para listar todas as reservas
function listarReservas() {
    if (reservas.length > 0) {
        let mensagem = 'Lista de reservas:\n';
        reservas.forEach(reserva => {
            const hotel = hoteis.find(h => h.id === reserva.idHotel);
            mensagem += `ID Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}\n`;
        });
        alert(mensagem);
    } else {
        alert('Nenhuma reserva encontrada.');
    }
}

// Função para exibir o menu e obter a escolha do usuário
function exibirMenu() {
    let opcao;
    do {
        opcao = prompt(`Sistema de Reserva de Hotéis\n\nEscolha uma opção:\n1. Adicionar Hotel\n2. Buscar Hotéis por Cidade\n3. Fazer Reserva\n4. Cancelar Reserva\n5. Listar Reservas\n6. Sair`);
        
        switch(opcao) {
            case '1':
                adicionarHotel();
                break;
            case '2':
                buscarHoteisPorCidade();
                break;
            case '3':
                fazerReserva();
                break;
            case '4':
                cancelarReserva();
                break;
            case '5':
                listarReservas();
                break;
            case '6':
                alert("Saindo do sistema.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '6');
}

// Inicializa o sistema exibindo o menu
exibirMenu();
