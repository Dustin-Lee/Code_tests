//Teaching little bro to code
import java.io.*;
import java.util.*;

public class koltin {
	public static void main(String[] args) {
		int fav;
		String sc = null;
		Scanner scan = new Scanner(System.in);
		System.out.println("What is your favorite number: ");
		fav = scan.nextInt();
		say(scan, fav);
	}//End of main method
	public static void say(Scanner sc, int burn) {
		if(burn==10) {
			System.out.println("KaaaaMeeeeeHaaaaMeeeHaaaaaaaaaaaaa!!!");
		} else {
			System.out.println("WRONG NUMBER!!!");
		}
	}//End of say method
}//End of class