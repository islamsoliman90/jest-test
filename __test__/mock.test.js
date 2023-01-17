let mock = require( '../js/mock' );
it( "mock", () =>
{
    let res = jest.fn( ( name ) => `hello ${ name }` );
    expect( res( "islam" ) ).toBe( "hello islam" );
    expect( mock( "ahmed" ) ).toBe( "hello ahmed" );
    expect( res( "mahmoud" ) ).toBe( "hello mahmoud" );
    expect( res ).toHaveBeenCalled();
    expect( res ).toHaveBeenCalledTimes( 2 );
    expect( res ).toHaveBeenCalledWith( 'islam' );
    expect( res ).toHaveBeenLastCalledWith( 'mahmoud' );
} );