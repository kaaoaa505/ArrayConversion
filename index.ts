function solve(a: number[]): number {
    let output: number[] = [];
    let isSum: boolean = true;

    while (a.length > 1) {
        output = [];
        for (let i = 0; i < a.length; i = i + 2) {
            if (a.length == 1) {
                output.push(a[i]);
            } else {
                let v: number = 0;
                if (a.length >= i + 2) {
                    if (isSum) {
                        v = a[i] + a[i + 1]
                    } else {
                        v = a[i] * a[i + 1]
                    }
                }
                output.push(v);
            }
        }
        isSum = !isSum;
        a = output;
    }

    return output[0];
}

const a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(solve(a));


