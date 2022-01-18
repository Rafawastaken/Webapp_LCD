/*
    Firebase API
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

const firebaseConfig = {
    /* Replace with firebase api */
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const btn_send = document.getElementById('btn-send');
let text_input = document.getElementById("msg-input");

btn_send.addEventListener('click', function(e){
    let message = text_input.value;
    e.preventDefault();

    if (message != ""){
        set(ref(db, "message"),{
            "message":message
         }).then(() =>{
             alert("Mensagem enviada")
             console.log("Mensagem enviada")
             text_input.value = ""
         })
    } else {
        alert("Mensagem nao pode estar vazia")
    }

})
