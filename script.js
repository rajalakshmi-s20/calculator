let output = document.getElementById("output");

function display(num){
output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    output.value="";
}

function Del(){
    output.value = output.value.slice(0,-1);
}