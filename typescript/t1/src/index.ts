import {setCookie} from 'cookies-utils';


function saludo(name?: string ){
    console.log(name);
    
}

// saludo('paco');
// saludo(' rosa');



//sobre carga de funciones

function showError(error: string | number): void{
    console.log(` ha habido un error:`, error);
    
}


//persistencia de datos cookies

const cookieOptions = {
    name: "user", // string,
    value: "paco", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // 
  };
  setCookie(cookieOptions)

//   clase time

class Timer{
    public finish?:()=> void;

    public start(): void {
        setTimeout(() => {
            if(!this.finish) return;

            this.finish();
        }, 2000);
    };

}


const myTimer: Timer = new Timer();

myTimer.finish = () => {
    console.log(' hemos terminado');
};
myTimer.start = () => {
    console.log(' hemos comenzado');
};

class Student {
    //propiedades
     name: string;
    lastName?: string;
    // private age?: number;

    constructor (name: string, lastName: string){
        this.name = name;
        if(lastName){
            this.lastName = lastName;
            // this.age = age;
        }
    }
}

class Curso {
    name: string;
    duration: number;

    constructor(name: string, duration: number){
        this.name = name;
        this.duration = duration;
    }

    get nombre (): string{
        return this.name
    }
    set nombre (name: string){
        this.name = name;
    }
}

const cursojs = new Curso('ts', 30);

const paco = new Student('paquito', 'campos')


//herencia //polimorfismo  


let birthDay  = new Date(2003, 1, 17);


if(birthDay instanceof Date){

}


class Employ extends Student{
    sueldo: number;
    constructor(name: string, lastName: string, sueldo: number){
        super(name, lastName)
        this.name = name;
        this.lastName = lastName;
        this.sueldo = sueldo
    }
}

let employ1 = new  Employ('paco', 'rojas', 1500);

employ1.name;