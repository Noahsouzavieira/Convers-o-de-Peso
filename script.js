//Vinculando elementos id//
let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

         //Área de Conversões//

    //Conversão kg para lb e oz//
let convertFromKg = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);

 // kgRef.value; foi usado após a utilização do toFixed() com valor 2, pois isso limita até 2 decimal//
};

         //Conversão lb para kg e oz//
let convertFromLb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
};
        //Conversão oz para lb e kg//
let convertFromOz = () => {
    let oz = ozRef.value;
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16).toFixed(2);
};       

  //Comando usuário inserir input//
kgRef.addEventListener("input",convertFromKg);
lbRef.addEventListener("input",convertFromLb);
ozRef.addEventListener("input",convertFromOz);
window.addEventListener("load", convertFromKg);

