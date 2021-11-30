function solve(a: number[]): number {
    let output: number[] = [];

    while(a.length > 1){
        output = [];
        for (let i = 0; i < a.length; i = i + 2) {
            if(a.length < i+1){
                output.push(a[i]);
            }else{
                output.push(a[i]+a[i+1]);
            }
        }
        a = output;
    }
    
    return output[0];
}

const a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(solve(a));


