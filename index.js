function receivesAFunction (callbackFunction) {
    console.log(callbackFunction());
    //return callbackFunction;
}

//receivesAFunction(function () {return "someThing"});

function returnsANamedFunction () {
    const foo = function () {return "someThing"};
    return foo;
}

function returnsAnAnonymousFunction() {
    return (function () {return "someThing"});
}