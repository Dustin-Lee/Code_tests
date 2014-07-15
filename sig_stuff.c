#include <stdio.h>    /************  Handling SIGCHLD!!  ******************/
#include <signal.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/wait.h>  /*****  For waitpid.                   *****/
#include <setjmp.h>    /*****  For sigsetjmp and siglongjmp.  *****/

sigjmp_buf env;
main()
{
    pid_t pid;
    int n = 20;
    struct sigaction sa;
    void delete_zombies(void);

    sigfillset(&sa.sa_mask);
    sa.sa_handler = delete_zombies;
    sa.sa_flags = 0;
    sigaction(SIGCHLD, &sa, NULL);

    sigsetjmp(env, 1);
    if ((pid = fork()) < 0)
    {
        perror("Bad fork!");
        exit(1);
    }

    if (pid > 0)   /***** Parent *****/
    {
         printf("Created child %ld\n", pid);
         sleep(n -= 2);
         kill(0, SIGKILL);
    }
    else           /***** Child  *****/
    {
         sleep(2);
         exit(0);   /******  Not necessary here but...  ******/
    }
}




void delete_zombies(void)
{
    pid_t kidpid;
    int status;

    printf("Inside zombie deleter:  ");
    while ((kidpid = waitpid(-1, &status, WNOHANG)) > 0)
    {
         printf("Child %ld terminated\n", kidpid);
    }
    siglongjmp(env,1);
}