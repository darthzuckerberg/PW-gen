const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




// for (let i=0, ) 91 in the list
function genesis(){
    
    let pwOne=document.getElementById("pw1")
    let pwTwo=document.getElementById("pw2")
    pwOne.textContent = ""
    pwTwo.textContent = ""
    
    for(let i=1 ; i<16; i++){
        let randomindex1= Math.floor(Math.random()*91)
        let randomindex2= Math.floor(Math.random()*91)
        pwOne.textContent += characters[randomindex1]
        pwTwo.textContent += characters[randomindex2]
    }
    
}
    