const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

function getNumber(sum = 0){
    readLine.question('Enter a number? ', num =>{
        if(num.toLocaleLowerCase() === 'stop'){
            console.log(`Sum of the numbers is: ${sum}`);
            readLine.close();    
        }else{
            getNumber(sum + parseInt(num));
        }
    });
}
getNumber();