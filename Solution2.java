class Solution2 {
	public static void main(String[] args) {
		int[] array = {1,4,-1,3,2};
		int x = solution(array);
		System.out.println("x = "+x);
	}
    	public static int solution(int[] A) {
	        // write your code in Java SE 7
        	int[] B = new int[A.length];
        	int counter=0;
        	int dataTracker=0;
        	for(int i=0;i<A.length;i++) {
        		/*if(i==0) {	Redundant
        			dataTracker=A[0];
        			B[0]=A[0];
        			counter++;
        			continue;
        		}*/
        		B[i] = A[dataTracker];
        		counter++;
        		dataTracker= A[dataTracker];
        		if(dataTracker==-1) {
        			break;
        		}
        	}
        	return counter;
        }
}
