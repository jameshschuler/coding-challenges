/**
 * 
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * 
 */
export function doesAddUp ( values: number[], target: number ): boolean {
    const sorted = values.sort( ( a: number, b: number ) => a - b );

    for ( let i = 0; i < sorted.length; i++ ) {
        const element = sorted[ i ];
        const next = sorted[ i + 1 ];

        if ( element + next === target ) {
            return true;
        } else {
            continue;
        }
    }

    return false;
}