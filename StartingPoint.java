import java.io.*;
import java.util.Scanner;

public class StartingPoint {
	public static void main(String[] args) throws Exception {
		Scanner scan = new Scanner(new File("input.txt"));
		int n = intt(1);
		System.out.println("Hello Nexus "+n);
		int num = scan.nextInt();
		sc(scan, num);
	}
	public static int intt(int x) {
		return x +5;
	}
	public static void sc(Scanner s, int n) {
		int y;
		for(int x=0;x<n;x++) {
			y = s.nextInt();
			System.out.println(y);
		}
	}
}
