import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] guests = new String[10];
        Scanner scanner = new Scanner(System.in);

        do{
            System.out.println("________________\n-Menu-\n");
            System.out.println("1 - Display All Guests");
            System.out.println("2 - Add Guests");
            System.out.println("3 - Remove Guests");
            System.out.println("4 - Exit");
            System.out.println("Option: ");
            int option = scanner.nextInt();

            if (option == 1) {
                System.out.println("________________\n-Guests-\n");
                for (int i = 0; i< guests.length; i++) {
                    System.out.println(guests[i] == null?  "--" : guests[i]);
//                    if (guests[i] == null) {
//                        System.out.println("--");
//                    }
//                    else {
//                        System.out.println(guests[i]);
//                    }

                }
            }
            if (option == 2) {
                System.out.println("________________\n-Add-\n");
                for (int i = 0; i < guests.length; i++) {
                    if (guests[i] == null) {
                        System.out.println("Name: " + (i+1));
                        guests[i] = scanner.next();
                        break;
                    }
                }
            }
            else if (option == 3) {
                System.out.println("________________");
                System.out.println("Name: ");
                String name = scanner.next();
                for (int i =0; i < guests.length; i++) {
                    if (guests[i] != null && guests[i].equals(name)) {
                        guests[i] = null;
                        break;
                    }
                }
            }
            else if (option == 4) {
                System.out.println("________________\n-Exit-\n");
                break;
            }
        } while (true);

        System.out.println("Exiting...");

    }
}