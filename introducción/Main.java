// package com.open_bootcamp;

public class Main{

    public static void main(String[] args){
        Coche coche = new Coche();
        coche.acelerar();
        coche.frenar();
    }
}

class Coche {
    int numeroDePuertas;
    int velocidadMaxima;
    float velocidadActual;

    public Coche(){
        
    }

    public void acelerar(){
        velocidadActual += 15;
    }
    public void frenar(){

    }
}