console.log('hi')

const containerElement = document.getElementById('container')

// crea una funzione che generi i mebri del team

function createMember(name, role, image) {
    const member = {
        name: name,
        role: role,
        image: image,
    }
    return member
}

// creo array di objects con le info fornite

const members = [
    createMember('Wayne-Barnett', 'Founder-&-ceo', 'wayne-barnett-founder-ceo.jpg'),
    createMember('Angela Carroll', 'Chief-Editor', 'angela-carroll-chief-editor.jpg'),
    createMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    createMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    createMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    createMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'),
]

console.log(members)

// ciclo gli elementi per ogni membro

members.forEach(element => {
    // stampo in console singoli dati
    console.log(element.name, element.role, element.image)
    // stampo le stringhe con inner
    containerElement.innerHTML += `<div>Nome : ${element.name}<br>
    Role : ${element.role}<br>
    Image : ${element.image}</div>`;

})