/*
JsDoc
The Sum Function
*/
const sum = ( ...num ) =>
{

    return num.reduce( ( pr, cr ) => pr + cr, 0 );
};

module.exports = sum;