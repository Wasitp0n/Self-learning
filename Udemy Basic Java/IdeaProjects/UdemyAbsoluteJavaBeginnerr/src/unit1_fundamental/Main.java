package unit1_fundamental;
// Creating the Munu and displaying the guest list
import java.util.Scanner;

// main method is required for JAVA
public class Main {
    public static void main(String[] args) {
        String[] guests = new String[10];
        Scanner scanner = new Scanner(System.in);
        do {

            System.out.println("1-Display All Guests");
            System.out.println("3-Remove Guest");
            System.out.println("4-Exit");
            System.out.println("Option:");
            int option = scanner.nextInt();

            if (option == 1) {
                for (int i = 0; i < guests.length; i++) {
                    System.out.println(guests[i]);
                }
            } else if (option == 4) {
                break;
            }

        } while (true);

        System.out.println("Existing....");

    }
}