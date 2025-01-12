
function calcular () {
    
    const transformUnd = 1000;

    const proteina = 400;
    const proteinaKid = 200;
    const beer = 600;
    const nonAlcoholic = 500;
    const nonAlcoholicKids = 250;
    
    let adult = parseInt(document.getElementById("adult").value);
    let kids = parseInt(document.getElementById("kids").value);
    let duration = parseFloat(document.getElementById("duration").value)
    
    let rP = document.getElementById("resP");
    let rC = document.getElementById("resC");
    let rNA = document.getElementById("resNA");

    if(isNaN(adult) || isNaN(kids) || isNaN(duration)) {
        alert("Preencha todos os campos!")
    } else {
        let calP = (((adult * proteina) + (kids * proteinaKid)) * duration) / transformUnd;
        let calC = (adult * beer * duration) / transformUnd;
        let calNA = (((adult * nonAlcoholic) + (kids * nonAlcoholicKids)) * duration) / transformUnd;
        
        rP.innerText = `A quantidade de Proteína: ${calP} kg.`
        rC.innerText = `A quantidade de Cerveja: ${calC} Litros.`
        rNA.innerText = `A quantidade de Bebidas não alcoólicas: ${calNA.toFixed(2)} Litros.`
        document.getElementById("elemento").style.display = "block";
    }
}