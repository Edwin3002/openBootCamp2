
public class Main2 {

    public static void main2(String[] args){
        Vehiculo vehiculo = new Vehiculo();
        vehiculo.tipo = "Coche";
    }

}

class vehiculo{
    private String tipo;

    public void setTipo(String tipo){
        this.tipo = tipo;
    }
}