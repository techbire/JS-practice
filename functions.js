//callback functions
function square(a){
    return a*a;
}
function sum(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}
sum(a,b,square);



//anonymous functions
function sum(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}
sum(a,b,function(a){
    return a*a;
})             //bracket ka bakchodi hai thora

