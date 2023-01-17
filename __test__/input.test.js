let filterName = require( '../js/input.js' );

describe( 'filter', () =>
{
    test( 'check if there name of not', () =>
    {
        expect( filterName() ).toBe( 'no name' );
    } );
    test.only( 'check if there white spaces', () =>
    {
        expect( filterName( ' islam' ) ).toBe( 'islam' );
    } );
    test( 'check if name max 10 char', () =>
    {
        expect( filterName( 'islam ahmed mahmoud' ) ).toBe( 'islam ahme' );
    } );
    test( 'check if name dont start with _', () =>
    {
        expect( filterName( '_islam' ) ).toBe( 'islam' );
    } );
} );