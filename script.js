
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-09"),
    finalizada: true
}

// lista
const atividades = [
    atividade, 
    {
        nome: 'Academia',
        data: new Date("2024-07-12 14:00"),
        finalizada : false
    },
    {
        nome: 'Gamming Session',
        data: new Date("2024-07-11 21:00"),
        finalizada : false
    },
]


// arrow function
const criar = (atividade) => {

    let input = '<input type="checkbox" '

    if(atividade.finalizada) {
        input += 'checked'
    }

    input += '>'


    return `
    <div>
      ${input}
        <span>${atividade.nome}</span>
        <time datetime="">${atividade.data}</time>
    </div>
    `
}


const section = document.querySelector('section')


for(let atividade of atividades) {
    section.innerHTML += criar(atividade)
}


