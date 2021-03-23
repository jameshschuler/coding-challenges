import { expect } from 'chai';
import { getLargestNumber } from '.';
describe( 'Coding Challenge 01', function () {
    it( 'should return largest possible number', function () {
        expect( getLargestNumber( [ 3, 4, 6, 5 ], [ 9, 0, 2, 5, 8, 3 ], 5 ) ).eq( 98655 );
        expect( getLargestNumber( [ 7, 4, 2, 9 ], [ 5, 2, 1, 7, 4, 7 ], 3 ) ).eq( 977 );
        expect( getLargestNumber( [ 2, 5, 2, 3, 0 ], [ 4, 6, 2, 6, 1, 9, 8 ], 9 ) ).eq( 986654322 );
    } );
} );