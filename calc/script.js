const outputscn= document.getElementById('disp');

function disp(a){
    
    outputscn.value+=a
}

function Clear(){
    outputscn.value= '';
}

function del(){
    outputscn.value=outputscn.value.slice(0,outputscn.value.length-1);
    
}

function equal(){
    try{
        outputscn.value=eval(outputscn.value)
    }
    catch{
        alert("Invalid!")
    }
    
}


