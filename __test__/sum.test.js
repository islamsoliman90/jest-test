const sum = require( '../js/sum.js' );

describe( 'check sum function', () =>
{
    describe.only( 'sum 2 number ', () =>
    {
        test.only( 'sum numbers', function ()
        {
            expect( sum() ).toBe( 0 );
        } );
        test( 'sum 2 numbers', function ()
        {
            expect( sum( 10, 20 ) ).toBe( 30 );
        } );
    } );
    test( 'sum 3 numbers', function ()
    {
        expect( sum( 10, 20, 1 ) ).toBe( 31 );
    } );
    it( 'sum 4 numbers', function ()
    {
        expect( sum( 10, 20, 10, 10 ) ).toBe( 50 );
    } );
    it( 'sum numbers', function ()
    {
        expect( sum( 10, 20, 10, 10, 10, 10 ) ).toBe( 70 );
    } );

} );