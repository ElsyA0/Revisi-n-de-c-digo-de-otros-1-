package com.generation;
import java.util.Scanner;

public class Codigo4 {

// falta colocar el metodo main.
public static void main(String[] args){

    Scanner s = new Scanner(System.in); //Faltaba colocar el System.in y por lo tanto en la parte de arriba tambien se tiene que importar el sacenner.
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    //Scanner s2 = new Scanner(); //no hay necesidad de otro scanner, y aparte no se usa en la siguiente liena.
    String j2 = s.nextLine();
    
    if (j1 == j2) {  
      //quite un parentesis que estaba demas en la linea 18.
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2 == "tijeras") {
            g = 1;
          }

        case "papel":
          if (j2 == "piedra") {
            g = 1;
          } // cerre las llaves del if. 
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:
      }
      System.out.println("Gana el jugador " + g);
    } 
  
  } 
  
  s.close(); //Agrgue el cierre del escaner que faltaba
} 
