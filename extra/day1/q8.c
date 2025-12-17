#include <stdio.h>

int main(){

    float i,j,k;

   printf("your maths value :");
    scanf("%f", &i);

    printf("your english value :");
    scanf("%f" ,&j);

    printf("your science value :");
    scanf("%f" ,&k);

    float result=(i+j+k)/3;

    printf("your averange is : %f",result);
    

    return 0;
}