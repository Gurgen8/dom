var parent= document.body.firstElementChild;
parent.style.width = "300px"  
parent.style.height = "200px";
parent.style.background = "gold"
 var input= document.querySelector(".inp")
var button = document.querySelector(".button")
var wid = 200
parent.onmouseover = function clicked(){

  parent.style.width =  wid+ 200 +"px"
  wid=wid+200
  parent.style.background ="green"

  console.log(wid)
  
}

parent.onmouseout = function leave (){
    parent.style.width =  wid-200 +"px"
    parent.style.background ="red"
    wid=wid-200
}
input.style.background ="Red"

button.onclick = function click(){
    if(input.value.length<8){
        alert("eror")
        this.innerHTML="krkin porddeq"
    }else{
        alert("fine")
        input.style.background="green"
    }
}



input.addEventListener("keydown", function kojak(text){
label.innerHTML=text.target.value
})



/// DOM

var users=[
    {
        name:"Gurgen",
        age:"25",
        gender:"male",
        country:"Armenia"

    },

    {

        name:"Sofi",
        age:"35",
        gender:"female",
        country:"Italya"
    },

    {
        name:"Gevor",
        age:"22",
        gender:"male",
        country:"Russia"

    },

    {

        name:"Sona",
        age:"65",
        gender:"Female",
        country:"France"
    }
]

var userBox =document.querySelector(".user__box")
var btn = document.querySelector(".search__button")
var inp = document.querySelector(".search__text")





   

btn.addEventListener("click", function(){
    var filteredUsers= users.filter(function (user){
        return user.name.toLocaleLowerCase().includes(inp.value)
      
    })

        userBox.innerHTML="";
        for(user of filteredUsers ){
            var userElement = document.createElement("DIV")
        
            userElement.classList.add("user__item")
            userElement.innerHTML=`
            <h2>${user.name}</h2>
            <p>Age: ${user.age}</p>
            <p>Gender: ${user.gender}</p>
            <P>Country: ${user.country}</p>
        
            `;
            userBox.appendChild(userElement);
        }
    

    })


    
for(user of users){
    var userElement = document.createElement("DIV")

  


    userElement.classList.add("user__item")
    userElement.innerHTML=`
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
    <p>Gender: ${user.gender}</p>
    <P>Country: ${user.country}</p>

    `;
    userBox.appendChild(userElement);
}





var span = document.querySelector(".span")
var fil = document.querySelector(".filteres")
var update = document.querySelector(".update")
var count = document.querySelector("#country__filters").value.toLocaleLowerCase()
var gen =  document.querySelector("#gender__filters").value.toLocaleLowerCase()

update.addEventListener("click", function upp (){

    var filteredUsers =users.filter(function (user){
        return (user.country.includes(count)) && (user.genderincludes(gen))
         && (user.name.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase()))
    })

    userBox.innerHTML="";
    for(user of filteredUsers ){
        var userElement = document.createElement("DIV")
    
        userElement.classList.add("user__item")
        userElement.innerHTML=`
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>Gender: ${user.gender}</p>
        <P>Country: ${user.country}</p>
    
        `;
        userBox.appendChild(userElement);
    }
 })

span.addEventListener("click", function op(){


    if(fil.style.display ===""  ||  fil.style.display ==="none"){
        fil.style.display ="block"
    }else{
        fil.style.display ="none"
    }
})








////////////////////
