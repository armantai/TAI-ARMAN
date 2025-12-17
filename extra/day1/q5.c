#include <stdio.h>

int main()
{

    int x, y;

    printf("your first value :");
    scanf("%d", &x);

    printf("your first value :");
    scanf("%d" ,&y);

    int result=(x+y)*(x+y)*(x+y);

    printf("your value is : %d", result);


    return 0;
}