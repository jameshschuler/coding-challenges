import { expect } from 'chai';
import { generateMinesweeper } from './05';

describe( 'Coding Challenge 05', function () {
    it( 'Should generate Minesweeper board', function () {
        expect( generateMinesweeper( 5, [ [ 1, 3 ], [ 3, 5 ], [ 2, 4 ] ] ) ).eq(
            `xxxxx\n11xxx\n*21xx\n2*21x\n12*1x` );
    } );
} );