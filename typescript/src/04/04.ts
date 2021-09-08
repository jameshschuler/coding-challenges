/**
 *  Write a function to find the longest common prefix string in an array of strings. 
 * 
 * longestPrefix(["cranberry","crawfish","crap"])
 * "cra"
 * 
 * longestPrefix(["parrot", "poodle", "fish"])
 * ""
 */
export function getlongestPrefix ( values: string[] ): string {
    let result = '';

    const sorted = values.sort( ( a: string, b: string ) => {
        return a.length - b.length;
    } );

    let firstWord = sorted[ 0 ];

    for ( let i = 0; i < firstWord.length; i++ ) {
        if ( sorted.every( s => s[ i ] === firstWord[ i ] ) ) {
            result += firstWord[ i ];
        } else {
            break;
        }
    }

    return result;
}