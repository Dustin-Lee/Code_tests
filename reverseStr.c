#include <string.h> /* for strlen() */

/* reverse the given null-terminated string in place */
void inplace_reverse(char * str)
{
  if (str)
  {
    char * end;
    end = str + strlen(str) - 1;

    /* swap the values in the two given variables
     XXX: fails when a and b refer to same memory location */
#define XOR_SWAP(a,b) do\
    {\
      a ^= b;\
      b ^= a;\
      a ^= b;\
    } while (0)

    /* walk inwards from both ends of the string, 
     swapping until we get to the middle */
    while (str < end)
    {
      XOR_SWAP(*str, *end);
      str++;
      end--;
    }
#undef XOR_SWAP
  }
}

int main() {
  char St[10] 'Nexus6';
  /*char *ss;*/
  inplace_reverse(St[]);
  printf("%s\n", *St);
}