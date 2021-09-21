const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

rl.question('Whats an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question('Which meal is your favourite? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question('Where would you like to travel to?  ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question('What is your superpower? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question('What is your favourite movie? ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
            });
          });
        });
      });
    });
  });
});
