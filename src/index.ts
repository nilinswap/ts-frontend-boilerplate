
let name_input: any = document.getElementById("name-input");
let name_button: any = document.getElementById("name-button");
let name_input_div: any= document.getElementById("name-input-div");

let entered_name: string = "dummy";

if(name_button != null ){
  name_button.onclick = function(){
      if(name_input != null) {
        entered_name = name_input.value;
        name_input_div.innerHTML = `Hello ${entered_name}`;
      }else{
        console.log("name_input is null!");
      }
  };
}else{
  console.log("name_button is null!");
}

export default entered_name;

