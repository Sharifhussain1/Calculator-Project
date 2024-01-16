import inquirer from "inquirer";
 console.log("Calculator")
for( let i : any=0; i = true; i++){

let ans= await inquirer.prompt([{
    type : "number",
    name : "Number1",
    message : "please Inter Your First Number"
},{
    type : "number",
    name : "Number2",
    message : "please Inter Your Second Number"



},
{
    type : "list",
    name : "Operator",
    message : "please Inter Your Operator",
    choices : [ "Add(+)" , "Subtract(-)" , " Multiply(*)", "divide(/)"]



}])
console.log(ans)

if ( ans.Operator === "Add(+)" ){
    console.log ("The Answer is",ans.Number1 + ans.Number2);
} else if ( ans.Operator=== " Multiply(*)"){
       console.log( " The Answer is ",ans.Number1 *ans.Number2)
}
 else if ( ans.Operator === "Subtract(-)" ){
   console.log ("The Answer is",ans.Number1 - ans.Number2);
}

else if ( ans.Operator === "divide(/)" ){
    console.log ("The Answer is",ans.Number1 / ans.Number2);
}


 let fff= await inquirer.prompt([{
   name : "hello",
   type : "list",
   message: " more work",
   choices : ["Yes", "No"]
      
   
 }])
 if( fff.hello == " Yes "){
      console.log( "ok")
 }else if(fff.hello == "No"){
   break
 }
}




let ooo= await inquirer.prompt([{
   name : "Yes",
   type : "list",
   message: " let Play Guessing Game",
   choices : ["Start"]

}])



 let abc =  Math.random()*100
 let bbb   = Math.floor(abc)
 
 
    let a = 11
   
  for ( let i=1 ; i < a ; i++){

  console.log(i)

 let aaa = await inquirer.prompt([{
    type : "input",
    name : "guess",
    message :" inter your number"    
}])
if( aaa.guess == bbb ){
   console.log(`Congratulate you are win. The Answer is ${ bbb} your score is =>` ,i)
   break
}

else if ( aaa.guess < bbb){
   console.log("Guess the higher number ")
}else if ( aaa.guess > bbb){
 console.log("Guess the lower number")

    

}else{console.log("Please select the number")}
}






   