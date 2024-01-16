
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
    // let items = A.splice(0,K));
    //A.push(...items)

    //Solution-3
    const B: number[] = [];
    K = K%A.length; ///Since K can be larger than A.length

    for(let i=0; i<A.length; i++){
        B[getIndex(i,K, A.length)] = A[i];
    }
    return B;
    //Solution-4
    // reverse 3 times (full, then 0 to k-1, then k to N-1)
}

function getIndex(index: number, num: number, maxLen: number):number{
    let targetIndex = index+num;
    return targetIndex>=maxLen?targetIndex-maxLen:targetIndex
}
