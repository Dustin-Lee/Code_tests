#include <stdio.h>

int main()
{
   char str1[20], str2[30];
   char* test_star;

   printf("Enter name: ");	/*fgets is better than scanf, just use stdin for fgets*/
   scanf("%s", str1);		/*Used to be scanf("%s", &str1);*/

   printf("Enter your website name: ");
   scanf("%s", str2);		/*Same as above with the &*/

   printf("Enter star:");
   scanf("%s", test_star);		/*Works with a char* initialization*/
   printf("test_star: %s\n", test_star);

   printf("Entered Name: %s\n", str1);
   printf("Entered Website: %s\n", str2);
   
   return(0);
}