import { useEffect, useState } from "react";


function Phrase() {

    const phrases = [
        "The quick brown fox jumps over the lazy dog.",
        "A journey of a thousand miles begins with a single step.",
        "All that glitters is not gold.",
        "Actions speak louder than words.",
        "Beauty is in the eye of the beholder.",
        "Every cloud has a silver lining.",
        "Fortune favors the bold.",
        "Haste makes waste.",
        "Laughter is the best medicine.",
        "When life gives you lemons, make lemonade."
      ];
      
      const [index, setIndex] = useState(0)
      const [theTextTheUserHasTyped, setTheTextTheUserHasTyped] = useState([])
      const [theNextCharToType, setTheNextCharToType] = useState(phrases[index][0])
      const [textTheUserStillHasLeftToType, setTextTheUserStillHasLeftToType] = useState(phrases[index].substring(1))

      useEffect(() => {
        setIndex(0 + 1);
      }, []);
      
      useEffect(() => {
          function update(e){
              try{
                  if(e.key === theNextCharToType){
                      setTheTextTheUserHasTyped([...theTextTheUserHasTyped, e.key]);
                      setTheNextCharToType(textTheUserStillHasLeftToType[0]);
                      setTextTheUserStillHasLeftToType(textTheUserStillHasLeftToType.substring(1));
                      
                      if(e.key === '.'){
                          
                          if(index === phrases.length - 1){
                              setIndex(1);
                              setTheTextTheUserHasTyped([]);
                              setTheNextCharToType(phrases[0][0]);
                              setTextTheUserStillHasLeftToType(phrases[0].substring(1));
                              
                            }
                            else{
                            setIndex(index + 1);
                            setTheTextTheUserHasTyped([]);
                            setTheNextCharToType(phrases[index][0]);
                            setTextTheUserStillHasLeftToType(phrases[index].substring(1));
                            }
                        }
                    }}
                    catch(error){
                        console.log("Error");
                    }
                }
                window.addEventListener("keydown", update); 
        
        return () => {
            window.removeEventListener("keydown", update)
          };

      });

    return(
    <>
        <div id="phrase-container"> 
        <div className="phrase">
    <span className="typed-text">{theTextTheUserHasTyped}</span>
    <span className="underline" id="underline" >{theNextCharToType}</span>
    <span className="remaining-text">{textTheUserStillHasLeftToType}</span>
        </div>
        </div>
    </>
        )
    }

export default Phrase