import { useState, useEffect } from "react";
import './Keys.css'

function Keys(props){
    const noShiftKeys = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-', '='],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o','p','[',']','\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    [' ']]
    const shiftKeys = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')','_', '+'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O','P','{','}','|'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
    [' ']]
    
    const [keyBoardKeys, setKeyBoardKeys] = useState(noShiftKeys);

    function isLetter(char) {
        return /^[A-Za-z]$/.test(char);
      }


    useEffect(() => {

        function makeShiftRed(e){

            try{
            let underlined = "";
                if(e.repeat){
                    return;
                }
            let letter = document.getElementById("underline");
            let thing = document.getElementById(letter.textContent);

            if(letter.textContent  === letter.textContent.toUpperCase() && isLetter(letter.textContent)){
                underlined = document.getElementsByName("shift");
                for(let i = 0; i < 2; i++){
                    underlined[i].className = "underlined-shift";
                }
            } 
            else{
                underlined = document.getElementsByName("shift");
                for(let i = 0; i < 2; i++){
                    underlined[i].className = "shift";
                }
            }
            }
            catch(error){
            }
        }

        function makeKeyRed(e){

            if(e.repeat){
                return;
            }
            try{
                let underlined = "";
                let letter = document.getElementById("underline");
            if(letter.textContent === " "){
                underlined = document.getElementById("space");
            }
            else {
                underlined = document.getElementById(letter.textContent);
            }
            console.log(underlined.textContent + " " + underlined.textContent);
            underlined.className = "underlined";
            }
            catch(error){

            }
        }

        function moveKeyDown(e){
            let keyPressed = "";
            if (e.repeat) return;
            
            try{
                if(e.key == "Shift"){
                    keyPressed = document.getElementsByName("shift");

                
                for(let i = 0; i < keyPressed.length; i++){
                    if(keyPressed[i].className === "underlined-shift"){
                        keyPressed[i].className = "pressed-red-shift";

                    }
                    else{
                    keyPressed[i].className = "pressed-shift";
                    }
                }
                setKeyBoardKeys(shiftKeys);
                return 10;
            }
                if (e.key === " ") {
                    keyPressed = document.getElementById("space");
                    }
                else
                {
                    keyPressed = document.getElementById(e.key)
                }
                keyPressed.className = "pressed-key";
            } catch(error){   
            }
        };
        
        function moveKeyUp(e){
                let keyPressed = "";
                
                
            try{
                if(e.key === "Shift" ){
                    keyPressed = document.getElementsByName("shift");
                for(let i = 0; i < keyPressed.length; i++){
                    if(keyPressed[i].className === "pressed-red-shift"){
                        keyPressed[i].className = "underlined-shift";
                    }
                    else{
                    keyPressed[i].className = "shift";
                    }
                }
                
                setKeyBoardKeys(noShiftKeys);
                return;   
            }
                if (e.key === " ") {
                    keyPressed = document.getElementById("space");
            }
            else{
                keyPressed = document.getElementById(e.key)
            }
            keyPressed.className = "key";
        }
            catch(error){
            }
        };
        


    
        window.addEventListener("keydown", moveKeyDown);
        window.addEventListener("keyup", moveKeyUp);
        window.addEventListener("keypress", moveKeyDown);
     
        window.addEventListener("keypress", makeShiftRed);
        window.addEventListener("keydown", makeKeyRed);

        window.addEventListener("keyup", makeKeyRed);


        return () => {
            window.removeEventListener("keydown", moveKeyDown);
            window.removeEventListener("keyup", moveKeyUp);
            window.removeEventListener("keypress", moveKeyDown);
            window.removeEventListener("keypress", makeShiftRed);
            window.removeEventListener("keypress", makeKeyRed);
            window.removeEventListener("keyup", makeKeyRed);

        }   
    });


    

    return(
        <>
        <div className="key-row">{keyBoardKeys[0].map((key) => (
            <div key={key} id={key} className="key">{key}</div>
            ))
        }
        </div>
        <div className="key-row">{keyBoardKeys[1].map((key) => (
            <div key={key} id={key} className="key">{key}</div>
            ))
        }
        </div>
        <div className="key-row">{keyBoardKeys[2].map((key) => (
            <div key={key} id={key} className="key">{key}</div>
            ))
        }
        </div>
        <div className="key-row"> <div key="Shift1" name="shift"className="underlined-shift">Shift</div>{keyBoardKeys[3].map((key) => (
            <div key={key} id={key} className="key">{key}</div>
            ))
        }
        <div key="Shift2" name="shift" className="underlined-shift">Shift</div>
        </div>
        <div className="key-row">{keyBoardKeys[4].map((key) => (
            <div key={key} id="space" className="key">{key}</div>
            ))
        }
        </div>
        </>
        )
        }

export default Keys