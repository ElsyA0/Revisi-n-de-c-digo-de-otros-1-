import java.util.Scanner;
public class Codigo5 {
//faltaba importar el scanner.
	//falta iniciar la clase main
	public class static void(Stirng[] args){
//Los nombres de todas las variable deben ser mas claras y que hagan referencias obvias.
	    Scanner s = new Scanner(System.in);//Faltaba colocar el system.in
	    System.out.print("Introduzca un número: "); //estaba mal, tiene que teminar con comillas dobles o cambiarla por comillas simples
	    int ni = s.nextLine(); //Si se deseaba guardar un numero entonces se debe colocar int en vez de String
	    int c = ni; // si se desea cambiar el valor de un string a un int entonces esto esta mal. pero debido a la linea anterior se decide que se requiere cambiar por un int.
	    
	    int afo = 0;
	    int noAfo = 0;
	    
	    while (ni > 0) {
		  int digito = (double)(ni % 10); //deberia ser un doble para que funcione. el cambio de tipo de dato si no entonces no tiene caso colocar (int) debido a que ya lo es.
	      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
			afo++;
	      } else {
			noAfo++;
		  
		  ni /= 10;
	    }

	    if (afo > noAfo) {
	      System.out.prinln("El " + c + " es un número afortunado.");
	    } else {
	      System.out.println("El " + c + " no es un número afortunado.");
	    }
	    
	  }
	  
	}
}
