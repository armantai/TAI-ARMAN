#include <stdio.h>

int main()
{

    int i,j;
    

    printf("your first value :");
    scanf("%d", &i);

    printf("your secound value :");
    scanf("%d" ,&j);

    if (i>j)
    {
        printf("the maximum number is :%d", i);
    }else{
         printf("the minimun number is :%d", i);
    }
    

    return 0;
}