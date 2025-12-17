#include <stdio.h>

int main(){

    int p,r,n;

    printf("your first value :");
    scanf("%d" ,&p);

    printf("your secound value :");
    scanf("%d" ,&r);

    printf("your third value :");
    scanf("%d" ,&n);

    float result=(p*r*n)/100.0;

    printf("your value is : %f", result);

    return 0;
}