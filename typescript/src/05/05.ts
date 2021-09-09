/**
 * Given a grid size, and a set of mines (in pairs of rows and columns), generate the Minesweeper 
 * grid for that set of mines. You can use asterisks for mines, and an x for 0! 
 * 
 * let gridSize = 5
 * let mines = [[1, 3], [3, 5], [2, 4]]
 * 
 * generateMinesweeper(gridSize, mines)
 * 
 * xxxxx
 * 11xxx
 * *21xx
 * 2*21x
 * 12*1x
 * 
 */
export function generateMinesweeper ( gridSize: number, mines: any ): string {
    let grid = '';
    // mines [col, row]
    const sortedByRow = mines.sort( ( a: number[], b: number[] ) => {
        return a[ 1 ] - b[ 1 ];
    } );

    let minesMap = new Map( sortedByRow );

    for ( let row = 0; row < gridSize; row++ ) {
        for ( let col = 0; col < gridSize; col++ ) {
            let mine = minesMap.get( col + 1 );

            if ( mine && mine === row + 1 ) {
                grid += '*';
            } else {
                grid += 'x'
            }
        }

        grid += '\n';
    }
    console.log( 'grid', grid );

    return grid;
}