var numEntry = function numEntry(){
    var x = document.getElementById( "num" ).value;

    document.getElementById( "numberdisplay" ).innerHTML = x;

    if( x % 3 == 0  &&  x % 5 == 0 ){
        document.getElementById( "fizzbuzz" ).innerHTML = "Fizzbuzz";
    }

    else if( x % 3 === 0 ){
        document.getElementById( "fizzbuzz" ).innerHTML = "Fizz";
    }

    else if( x % 5 === 0 ){
        document.getElementById( "fizzbuzz" ).innerHTML = "Buzz";
    }


    else{
        ( document.getElementById( "fizzbuzz" ).innerHTML = x );
    }
};


// if the number is divisible by 3, print fizz
// if the number is divisible by 5, print Buzz
// if the number is divisible by 3 and 5, print FIZZBUZZ
