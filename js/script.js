// Proteína - 400gr por pessoa, se passar de 6 horas o valor sobe pra 650g por pessoa.

// Cerveja - 1200ml por pessoa, se passar de 6 horas o valor sobe pra 2000ml por pessoa.

// Refrigerante e água - 1000ml por pessoa, se passar de 6 horas o valor sobe pra 1500ml por pessoa.

// Crianças valem 0,5 pessoas.


function calcular () {
    
    const transformUnd = 1000;

    const proteina = 400;
    const proteinaKid = 200;
    const beer = 600;
    const nonAlcoholic = 500;
    const nonAlcoholicKids = 250;
    
    let adult = parseInt(document.getElementById("adult").value);
    let kids = parseInt(document.getElementById("kids").value);
    let duration = parseInt(document.getElementById("duration").value)
    
    let rP = document.getElementById("resP");
    let rC = document.getElementById("resC");
    let rNA = document.getElementById("resNA");
    
    let calP = (((adult * proteina) + (kids * proteinaKid)) * duration) / transformUnd;
    let calC = (adult * beer * duration) / transformUnd;
    let calNA = (((adult * nonAlcoholic) + (kids * nonAlcoholicKids)) * duration) / transformUnd;
    
    rP.innerText = `A quantidade de proteína: ${calP} kg.`
    rC.innerText = `A quantidade de Cerveja: ${calC} Litros.`
    rNA.innerText = `A quantidade de Bebidas não alcoólicas: ${calNA} Litros.`
    document.getElementById("elemento").style.display = "block";
}