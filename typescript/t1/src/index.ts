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

