const empregado = { 
    salarioBase: 5000,
    valorHoraExtra: 100,
    qtHorasExtras: 10,
    calculaSalario: function() {
        return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
    }
};
empregado.calculaSalario(); // 6000

const empregado1 = { 
    salarioBase: 10000,
    valorHoraExtra: 50,
    qtHorasExtras: 2,
    calculaSalario: function() {
        return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
    }
};
empregado1.calculaSalario(); // 10100

empregado1.saudar = function() {
    console.log('Olá, tudo bem?');
}

empregado1.saudar(); // Olá, tudo bem?