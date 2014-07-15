/*import java.lang.*;
import java.io.*;
public class Solution {
	public static void main(String[] args) {
		int x = -7;
		int y = Math.abs(x);
		System.out.println("x="+x + "\ny="+y);
	}
}*/
import java.lang.*;

class Solution {
	public static void main(String[] args) {
		int[] array = {3,1,2,4,5};
		int x = solution(array);
		System.out.println("x= "+x);
	}
    	public static int solution(int[] A) {
        // write your code in Java SE 7
        	int min=2000;
        	int sumOfArray1 = A[0];
        	int counter=A[0];
        	for(int i=0;i<(A.length-1);i++) {
        		counter = sumOfArray1;
	            for(int j=(i+1);j<A.length;j++) {
	                counter = counter - A[j];
            	}
            	sumOfArray1 += A[i+1];
            	counter = Math.abs(counter);
            	if(counter<min) {
	                min = counter;
            	}
            	System.out.println("Min= "+min);
            	counter = sumOfArray1;
        	}
        	return min;
    	}
}