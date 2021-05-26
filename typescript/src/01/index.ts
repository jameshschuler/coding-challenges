/**
 * March 22, 2021
 * James Schuler
 *
 * This week’s question:
 * You’re given two integer arrays (n and m), and an integer k. Using the digits from n and m,
 * return the largest number you can of length k.
 *
 * Example:
 *  n = [3,4,6,5]
 *  m = [9,0,2,5,8,3]
 *  k = 5
 *  $ maxNum(n, m, k)
 *  $ 98653
 *
 */

export function getLargestNumber ( n: number[], m: number[], length: number ): number {
    const combined = [ ...n, ...m ];
    const sorted = combined.sort( ( a: number, b: number ) => b - a );

    return parseInt( sorted.slice( 0, length ).join( '' ) );
}