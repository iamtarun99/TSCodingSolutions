
/*
IP: A = [3, 8, 9, 7, 6]
OP: [6, 7, 9, 8, 3]
*/

export function solution(A: number[]): number[] {
    //Solution-1
    // return A.reverse();

    //Solution-2
    for(let i=0; i<A.length/2; i++){
        [A[i],A[A.length-1-i]] = [A[A.length-1-i],A[i]]
    }
    return A;
}
console.log(solution([3, 8, 9, 7, 6]));