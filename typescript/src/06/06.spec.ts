import { expect } from 'chai';
import { doesAddUp } from './06';

describe( 'Coding Challenge 06', function () {
    it( 'Should return whether numbers add up to target', function () {
        expect( doesAddUp( [ 10, 15, 3, 7 ], 17 ) ).eq( true );
        expect( doesAddUp( [ 4, 15, 3, 7 ], 22 ) ).eq( true );
        expect( doesAddUp( [ 1, 12, 3, 7 ], 21 ) ).eq( false );
    } );
} );