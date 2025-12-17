#include <stdio.h>

int main(){

    int i,j,k;

    printf("your first value :");
    scanf("%d", &i);

    

    if (i<=-1)
    {
       printf("This number is Negative: %d",i);
    }else if (i==0)
    {
       printf("This number is Neutral: %d",i);
    }else{
        printf("This number is Positive: %d",i);
    }
    
    
    

    return 0;
}