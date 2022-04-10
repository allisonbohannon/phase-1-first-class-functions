function receivesAFunction(funct) {
    funct(); 
}

function allisonsFunction() {
    console.log(`Hello`); 
}

receivesAFunction(allisonsFunction); 


function returnsANamedFunction() {
    const namedFunction = () => console.log('Named function');
    return namedFunction; 
}; 

function returnsAnAnonymousFunction() {
    return () => console.log('Anonymous function');

};