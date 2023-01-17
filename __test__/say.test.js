const say = require( '../js/say.js' );

it.skip( 'massages', () =>
{
    expect( say( 'hello' ) ).toBe( 'hello' );
} );

it( 'massages', () =>
{
    expect( say() ).toBe( '' );
} );