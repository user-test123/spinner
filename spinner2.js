// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const delay = (time) => {
    for (let item of animation) {

        time += 200;
        setTimeout(() => {
            process.stdout.write(item);
        }, time)
    }

}

delay(0);
    // console.log(item);
 

//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   '); 
//   }, 700);
