/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element 
of the array can be paired with another element that has the same value, except for one element that is left unpaired.

IP: [1,2,4,2,1]
OP: 4
*/

export function solution(A: number[]): number {
    // Implement your solution here

    let testMap = new Map();
    for(let i=0; i<A.length; i++){
        if(testMap.has(A[i]))
        testMap.delete(A[i]);
        else
        testMap.set(A[i],false);
    }
    const iterator1 = testMap.keys();

    return(iterator1.next().value);
}