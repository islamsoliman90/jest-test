let mydata = require( '../js/all' );

it( "data has 6 items", () =>
{
    expect( mydata.length ).toBe( 6 );
} );

it( "data has 6 items", () =>
{
    expect( mydata ).toHaveLength( 6 );
} );
it( "data has 6 items", () =>
{
    expect( "mydata" ).toHaveLength( 6 );
} );

it( "data has contain num 3", () =>
{
    expect( mydata ).toContain( 3 );
} );
it( "data has contain num 3", () =>
{
    expect( mydata ).not.toContain( 7 );
} );

it( "data has not contain num 0", () =>
{
    for ( let i = 0; i < mydata.length; i++ )
    {
        expect( mydata[ i ] ).not.toBe( 0 );
    }
} );
it( "every item is number", () =>
{
    for ( let i = 0; i < mydata.length; i++ )
    {
        expect( isNaN( mydata[ i ] ) ).toBe( false );
    }
} );
it( "every item is number", () =>
{
    for ( let i = 0; i < mydata.length; i++ )
    {
        expect( isNaN( mydata[ i ] ) ).toBeFalsy();
    }
} );
it( "every item is number", () =>
{
    for ( let i = 0; i < mydata.length; i++ )
    {
        expect( !isNaN( mydata[ i ] ) ).toBeTruthy();
    }
} );
it( "first item  larger than 0", () =>
{
    expect( mydata[ 0 ] ).toBeGreaterThan( 0 );
} );
it( "first item  larger than 1", () =>
{
    expect( mydata[ 0 ] ).toBeGreaterThanOrEqual( 1 );
} );
it( "first item  less than 2", () =>
{
    expect( mydata[ 0 ] ).toBeLessThan( 2 );
} );
it( "first item 1 not undifined", () =>
{
    expect( mydata[ 0 ] ).not.toBeUndefined();
} );
it( "check substring regExp", () =>
{
    let x = 'islam ahmed';
    expect( x ).toMatch( /islam/ );
} );
it( "check for property age", () =>
{
    let x = {
        'name': 'ahmed',
        'age': 2
    };
    expect( x ).toHaveProperty( 'age' );
} );
it( "check for property age", () =>
{
    let x = {
        'name': 'ahmed',
        'age': 2
    };
    expect( x ).toHaveProperty( 'age', 2 );
} );

//create matching
expect.extend( {
    toBeLargerThan ( res, target )
    {
        let pas = res > target;
        if ( pas )
        {
            return {
                message: () => 'This true is greater than',
                pass: true
            };
        } else
        {
            return {
                message: () => 'This false is greater than',
                pass: false
            };
        }
    }
} );
it.only( "first item  larger than 0", () =>
{
    expect( 10 ).toBeLargerThan( 8 );
} );
expect.extend( {
    toBeBetween ( target, st, en )
    {
        let pas = st < target && en > target;
        if ( pas )
        {
            return {
                message: () => `This true is ${ target } between ${ st } and ${ en }`,
                pass: true
            };
        } else
        {
            return {
                message: () => `This false is ${ target } not between ${ st } and ${ en }`,
                pass: false
            };
        }
    }
} );
it.only( "first item  between start and end", () =>
{
    expect( 9 ).toBeBetween( 8, 11 );
} );

//expected anything
it.only( "expect anything", () =>
{
    expect( 9 ).toEqual( expect.anything() );
    expect( [ 1, 2, 3 ] ).toEqual( expect.anything() );
    expect( "[ 1, 2, 3 ]" ).toEqual( expect.anything() );
    expect( " " ).toEqual( expect.anything() );
} );
//expected any (any constructor)
it.only( "expect anything", () =>
{
    expect( 9 ).toEqual( expect.any( Number ) );
    expect( 'islam' ).toEqual( expect.any( String ) );
} );
//expected arrayContaining(array)
it.only( "expect arrayContaining", () =>
{
    expect( [ 1, 2, 3 ] ).toEqual( expect.arrayContaining( [ 1, 3 ] ) );
} );

