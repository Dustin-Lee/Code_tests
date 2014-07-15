#include <stdio.h>

main()
{
  FILE *fp;
  char line[130];			/* line of data from unix command*/
  int ll[110];          /*Lines 7&8&9 just added to test that an int is 4 bytes long and sizeof will print the bytes the array holds=440*/
  printf("Size: %d\n", (int)(sizeof ll));
  printf("Sizeof: %d\n", (int)(sizeof line));
  
  fp = popen("ls -l", "r");		/* Issue the command.*/
					        /* Read a line*/
  while ( fgets( line, sizeof line, fp))
  {
    printf("%s", line);
  }
  pclose(fp);
}
