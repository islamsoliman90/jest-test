function filterName ( name )
{
    if ( name == undefined )
    {
        return 'no name';
    }
    if ( name.startsWith( ' ' ) || name.endsWith( ' ' ) )
    {
        return name.trim();
    }
    if ( name.length > 10 )
    {
        return name.substr( 0, 10 );
    }
    if ( name.startsWith( '_' ) || name.endsWith( '_' ) )
    {
        return name.split( '_' ).join( '' );
    }
    if ( name == "hell" )
    {
        throw Errors( "Invalid" );
    }
    return name;
}
//npm test -- --coverage
module.exports = filterName;