import { expect } from 'chai';
import { getlongestPrefix } from './04';

describe( 'Coding Challenge 04', function () {
    it( 'should return longest possible prefix', function () {
        expect( getlongestPrefix( [ "cranberry", "crawfish", "crap" ] ) ).eq( 'cra' );
        expect( getlongestPrefix( [ "parrot", "poodle", "fish" ] ) ).eq( '' );
        expect( getlongestPrefix( [ "pencil", "penicillin", "penny" ] ) ).eq( 'pen' );
    } );
} );