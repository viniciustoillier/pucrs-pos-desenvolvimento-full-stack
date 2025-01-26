// Criando objetos

/** TIPOS DE OBJETOS
 * 1. Literais
 * 2. Fábricas
 * 3. Construtores
 * 4. Protótipos
 * 5. Classes
*/

// 1. LITERAIS
var nomeDoObjeto = {
    nomeMembro1: valorMembro1,
    nomeMembro2: valorMembro2,
    nomeMembro3: valorMembro3
};


// 2. FÁBRICAS
/* criarPessoa */
function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
        calcularIdade: function() {
            return new Date().getFullYear() - this.anoNascimento;
        }
    };
};
const pessoa = criarPessoa("Ana", 1989, "Desenvolvedora");
console.log(pessoa); 

/* criarEmpregado */
function criarEmpregado(salarioBase, valorHoraExtra, qtHorasExtras) {
    return {
        salarioBase,
        valorHoraExtra,
        qtHorasExtras,
        calculaSalario: function() {
            return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
        }
    };
}
const empregado1 = criarEmpregado(5000, 100, 10);
const empregado2 = criarEmpregado(10000, 1000, 2);

empregado1.calculaSalario(); // 6000
empregado2.calculaSalario(); // 12000
const empregado3 = criarEmpregado(2900, 100, 40);
empregado3.calculaSalario(); // 6900

// 3. CONSTRUTORES
function Pessoa() {
    this.nome = ["Ana", "Maria"];
    this.anoDeNascimento = 1989;
    this.profissao = "Desenvolvedora";
    this.calcularIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
}
const pessoa1 = new Pessoa();
pessoa1.calcularIdade();    
pessoa1.anoDeNascimento = 1990;
pessoa1.calcularIdade(); // 31

function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calcularIdade = function() {
        return new Date().getUTCFullYear() - this.anoDeNascimento;
    };
}

// 4. PROTÓTIPOS (somente no console do navegador)
const pessoa3 = new Object();
pessoa4.constructor; // [Function: Pessoa]

console.log(pessoa4.nome); // Ana
console.log(pessoa4.anoDeNascimento); // 1989
pessoa4.__proto__; // Pessoa {}

pessoa3.calcularIdade = pessoa2.calcularIdade;
pessoa3.calcularIdade(); // 32

pessoa1.valueOf(); // Pessoa { nome: 'Ana', anoDeNascimento: 1990, profissao: 'Desenvolvedora', calcularIdade: [Function] }
pessoa2.valueOf(); // Pessoa { nome: 'Ana', anoDeNascimento: 1989, profissao: 'Desenvolvedora', calcularIdade: [Function] }
pessoa3.valueOf(); // Pessoa { calcularIdade: [Function] }

pessoa1.anoDeNascimento; // 1990
pessoa2.constructor.name; // Pessoa
pessoa3.constructor.name; // Pessoa

pessoa3.getPrototypeOf(); // Pessoa {}
pessoa2.getPrototypeOf(); // Pessoa {}

const pessoa5 = new Object();

pessoa5.getPrototypeOf(); // Pessoa {}  
pessoa5.__proto__; // Pessoa {}

/* Herança de Prototipada */
Pessoa.prototype.saudar = function() {
    console.log('Olá, tudo bem?');
};

pessoa6 = new Pessoa("Antonio", 1930, "Bibliotecário");
pessoa6.saudar(); // Olá, tudo bem?

// 5. CLASSES
/**
 * [Description Pessoa]
 */
class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola() {
        console.log('Olá, me chamo ' + this.nome + ' e sou ' + this.profissao);
    };
    calcularIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

pessoa = new Pessoa("Laura", 1989, "Advogada");
pessoa.ola(); // Olá, eu sou Laura e sou Advogada
pessoa.calcularIdade(); // 32
/**
 * [Description Estudante]
 */
class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.matricula = matricula
    };
    ola() {
        super.ola(); //Polimorfismo
        console.log('colegas!'); 
    }
}

const aluno1 = new Estudante("João", 2000, "Estudante", 123456);
const aluno2 = new Estudante("Pedro", 2000, "Estudante", 123456);

aluno1.ola(); // Olá, me chamo João e sou Estudante
aluno1.calcularIdade(); // 21
aluno1.matricula; // 123456

/**
 * [Description Professor]
 */
class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao) {
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    }
}
const professor1 = new Professor("Maria", 1970, "Doutora");
professor1; // Professor { nome: 'Maria', anoDeNascimento: 1970, profissao: 'Professor', titulacao: 'Doutora' }
professor1.valueOf(); // Professor { nome: 'Maria', anoDeNascimento: 1970, profissao: 'Professor', titulacao: 'Doutora' }

aluno1.ola(); // Olá, me chamo João e sou Estudante colegas! //Polimorfismo

const professor2 = professor1;
professor2.anoDeNascimento = 1980;
console.log(professor1); // Professor { nome: 'Maria', anoDeNascimento: 1980, profissao: 'Professor', titulacao: 'Doutora' }
console.log(professor2); // Professor { nome: 'Maria', anoDeNascimento: 1980, profissao: 'Professor', titulacao: 'Doutora' }

const professor3 = new Professor("Marli", 1960, "Mestre");
professor3.formacao = "Letras";
professor3; // Professor { nome: 'Marli', anoDeNascimento: 1960, profissao: 'Professor', titulacao: 'Mestre', formacao: 'Letras' }
delete professor3.formacao;
professor3; // Professor { nome: 'Marli', anoDeNascimento: 1960, profissao: 'Professor', titulacao: 'Mestre' }
Professor.prototype.formacao = "Favor preencher";
professor1.formacao; // Favor preencher

/**
 * [Description Validador]
 */
class Validador {
    static tamanhoCPF = 11;
    static validarCPF(tamanho) {
        if (tamanho !== this.tamanhoCPF) {
            return false;
        } else {
            return true;
        }
    }
}

Validador.validarCPF("12345678901".length); // true   
Validador.validarCPF("123456789012".length); // false



/* TIPOS DE VISIBILIDADES */
function Pessoa() {
    let nome = "Ana";
    let anoDeNascimento = 1989;
    let profissao = "Desenvolvedora";
    this.calcularIdade = function() {
        return new Date().getFullYear() - anoDeNascimento;
    };
    let ola = function() {
        console.log('Olá, me chamo ' + this.nome + ' e sou ' + this.profissao);
    };
}

/**
 * [Description Estudante]
 */
class Estudante extends Pessoa {
    #matricula; //private
    nota;
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
    };
    getMatricula() {
        return this.#matricula;
    };
    setMatricula(matricula) {
        this.#matricula = matricula;
    };
    ola() {
        super.ola();
        console.log('colegas!');
    }
}

aluno1.#matricula; // undefined
aluno1.matricula; // 123456

aluno1.getMatricula(); // Sua matricula é 123456

const aluno3 = new Estudante("Pedro", 2000, { numero: 3333, modalidade: "Regular" });
aluno3; // Estudante { nome: 'Pedro', anoDeNascimento: 2000, profissao: 'Estudante', #matricula: { numero: 3333, modalidade: 'Regular' } }

let matriculaDoAluno3 = aluno3.getMatricula();
matriculaDoAluno3.numero; // 3333
matriculaDoAluno3.modalidade; // Regular
matriculaDoAluno3.modalidade = "BUSTED";
matriculaDoAluno3.modalidade; // BUSTED

aluno3.setMatricula({ numero: 4444, modalidade: "Especial" });
aluno3.getMatricula(); // { numero: 4444, modalidade: 'Especial' }

aluno1 = new Estudante("Alonso", 2000, 999);
aluno1.getMatricula(); // 999
aluno1.setMatricula(888);
aluno1.getMatricula(); // 888

class Nota {
    #grau;
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    };
    setGrau(valor) {
        if (valor < 0 || valor > 10) {
            throw new Error("Nota inválida");
        }
        this.#grau = valor;
    };
    getGrau() {
        return this.#grau;
    };
    getDisciplina() {
        return this.disciplina;
    };

}

aluno1.nota = new Nota("Matemática", 8);
aluno1.nota; // Nota { disciplina: 'Matemática', grau: 8 }

aluno1; // Estudante { nome: 'Alonso', anoDeNascimento: 2000, profissao: 'Estudante', #matricula: 888, nota: Nota { disciplina: 'Matemática', grau: 8 } }   

aluno1.notas[0] = [new Nota("Português", 7), new Nota("História", 6)];

aluno1; // Estudante { nome: 'Alonso', anoDeNascimento: 2000, profissao: 'Estudante', #matricula: 888, nota: Nota { disciplina: 'Matemática', grau: 8 }, notas: [ [ Nota { disciplina: 'Português', grau: 7 }, Nota { disciplina: 'História', grau: 6 } ] ] }

aluno1.notas; // [ [ Nota { disciplina: 'Português', grau: 7 }, Nota { disciplina: 'História', grau: 6 } ] ]
aluno1.notas[0].getGrau(); // 7
aluno1.notas[0].setGrau(9); // [Function: setGrau]
aluno1.notas; // [ [ Nota { disciplina: 'Português', grau: 9 }, Nota { disciplina: 'História', grau: 6 } ] ]
aluno1.notas[0].getGrau(); // 9
aluno1.notas[0].getDisciplina(); // Português