let count=document.getElementById("digit1");

function digit(num){
    count.value+=num;

}

function solution(){
    try{
        count.value=eval(count.value)
    }
    catch{
     alert("Invalid")
    }
}

function Clear(){
    count.value="";
}

function del(){
    count.value=count.value.slice(0,-1)
}