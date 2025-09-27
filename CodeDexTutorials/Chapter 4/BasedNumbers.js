var myNumber = 46;

while(myNumber > 0){
    let remainder = 0;
    remainder = myNumber % 2;
    
    if(remainder == 0){
      console.log("0");
    }else{
      console.log("1");
    }

    myNumber = Math.floor(myNumber/2);
}
