#include <stdio.h>

int main() {
	int x, y;
	x=3;
	y=4;
	int *px;	/*Makes px a pointer*/
	px = &x;	/*px points to address of x*/
	printf("x=%d, y=%d, px=%d",x,y,*px);	/*Use * to dereference pointer px*/

	return 0;
}