public class herencia {
    public static void main(String[] args) {
        CocheElectrico.cocheElectrico = new CocheElectrico();
        cocheElectrico.velocidadMax = 14;
        cocheElectrico.matricula = "ABC" ;
    }
}

class Vehiculo {
    int velocidadMax;
    String matricula;

    public boolean compruebaMatricula(String matricula){
        if(matricula == "XXX"){
            return true;
        }
        return false;
    }
}

class Coche extends Vehiculo {

}

class CocheElectrico extends Coche {

}