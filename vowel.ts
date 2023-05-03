import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";
let option ;
do{
    let answers = await inquirer. prompt(
        [
            {
                type : "input",
                name : "userInput",
                message : chalk.bgBlueBright ("plese enter a letter for check it is vowel or not :"),
            }
        ]
    );
    let letter = answers.userInput;
    letter = letter.toLowerCase();
    if (letter==='a'|| letter==='e' || letter==='i' || letter==='o'|| letter==='u'){
        console.log(' ' ,chalk.bold.bgYellow(`"${letter}" is vowel  `));
    }
    else [
        console.log(' ' ,chalk.bold.bgRed(`"${letter}" is not vowel, `) )
    ]
    let choice = await inquirer.prompt([{
        type : "confirm",
        name : "slection",
        messege : "check vowel again ? press Y for yes or N for No : "
    }])
    if (choice.slection){
        option = "y";
    }
    else{
        option = 'n';
    }
}while(option.toLowerCase()==="y");