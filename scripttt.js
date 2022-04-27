let userName = document.getElementById('username')
let passWord = document.getElementById('password')

function btnSubmit() {
    console.log("botton was clicked")
    alert(userName.value) 
    }

    function hide() {
        if (passWord.type ==='password'){
            passWord.type = 'text'
        }
        else {
            passWord.type = 'password'
        }
    }

     