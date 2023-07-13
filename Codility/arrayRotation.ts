
/*
IP: A = [3, 8, 9, 7, 6]
    K = 3
OP: [9, 7, 6, 3, 8]
*/

export function solution(A: number[], K: number): number[] {
    //Solution-1
    // while(K>0){
    //     A.unshift(A.pop());
    //     K--;
    // }
    // return A;

    //Solution-2
    const B: number[] = [];
    K = K%A.length; ///Since K can be larger than A.length

    for(let i=0; i<A.length; i++){
        B[getIndex(i,K, A.length)] = A[i];
    }
    return B;
}

function getIndex(index: number, num: number, maxLen: number):number{
    let targetIndex = index+num;
    return targetIndex>=maxLen?targetIndex-maxLen:targetIndex
}
