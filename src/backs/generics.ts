import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

// printObject( 123 );
// printObject( new Date() );
// printObject( {a: 1} );
// printObject( 'Hola Mundo' );

// console.log( genericFunction( 3.1416 ).toFixed(2) )
// console.log( genericFunctionArrow( 'Hola mundo' ).split(' ') )

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 132
}

console.log ( genericFunctionArrow<Villain>( deadpool).dangerLevel )


