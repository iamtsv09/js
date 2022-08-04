for (let the_number = 1; the_number <= 100; the_number++)
    if (the_number % 3 == 0 && the_number % 5 == 0) console.log('FizzBuzz');
    else if (the_number % 3 == 0) console.log('Fizz');
    else if (the_number % 5 == 0) console.log('Buzz');
    else console.log(the_number);
