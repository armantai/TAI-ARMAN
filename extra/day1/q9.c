#include <stdio.h>

int main(){

    int a,b,c;

   printf("your first value  :");
    scanf("%d", &a);

    printf("your secound value :");
    scanf("%d" ,&b);

    printf("your third value :");
    scanf("%d" ,&c);

    if (a<b)
    {
      if (a<c)
      {
        printf("your value is first mimnimum :%d", a);
      }else{
        printf("your value is third mimnimum :%d", c);
      }
    }else{
        if (b<c)
      {
        printf("your value is secound mimnimum :%d", b);
      }else{
        printf("your value is third mimnimum :%d", c);
      }
    }
    

   
    
    
    

    

    return 0;
}