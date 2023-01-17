function say ( message )
{
    return ( "hello " + message || '' );
}

module.exports = say;