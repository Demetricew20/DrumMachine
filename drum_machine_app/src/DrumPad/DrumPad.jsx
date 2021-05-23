import React, {useEffect, useState} from 'react';
import './DrumPad.css';
import kickOldSchool from '../Assets/DrumSamples/kick-oldschool.mp3';
import kickAcoustic from '../Assets/DrumSamples/kick-acoustic01.wav';
import hiHat808 from '../Assets/DrumSamples/hihat-808.wav';
import kickElectro from '../Assets/DrumSamples/kick-electro01.wav';
import tom808 from '../Assets/DrumSamples/tom-808.wav';
import kickThump from '../Assets/DrumSamples/kick-thump.wav';
import openHat from '../Assets/DrumSamples/openhat-tight.wav';
import perc808 from '../Assets/DrumSamples/perc-808.wav';
import snare808 from '../Assets/DrumSamples/snare-808.wav';

const DrumPad = () => {

    useEffect(() => {
        getKey();
    }, [])

const playAudio = (id) => {
    let audio = document.getElementById(id);
    let string = document.getElementById("display");
    if(audio){
        audio.play();
        string.innerText = 'You Played ' + audio.title;
    }   
    else{
        console.log('No Audio.')
    }
}

const getKey = () => {
    document.body.addEventListener("keydown", (e) => {
        let pressedKey = e.key;

        if(pressedKey === "q" || pressedKey === "Q" ){
            playAudio("Q");
        }
        else if(pressedKey === 'w' || pressedKey === 'W'){
            playAudio("W")
        }
        else if(pressedKey === 'e' || pressedKey === 'E'){
            playAudio("E")
        }
        else if(pressedKey === 'a' || pressedKey === 'A'){
            playAudio("A")
        }
        else if(pressedKey === 's' || pressedKey === 'S'){
            playAudio("S")
        }
        else if(pressedKey === 'd' || pressedKey === 'D'){
            playAudio("D")
        }
        else if(pressedKey === 'z' || pressedKey === 'Z'){
            playAudio("Z")
        }
        else if(pressedKey === 'x' || pressedKey === 'X'){
            playAudio("X")
        }
        else if(pressedKey === 'c' || pressedKey === 'C'){
            playAudio("C")
        }
        else{
            console.log('Must choose from the following keys: \n Q, W, E, A, S, D, Z, X, C')
        }
    })
}


    return (
        <div id="drum-machine" >
            <div id="display"></div>
                <div id="drum-pad-display">
                <div  className="drum-pad" id="open-hat" onClick={() => playAudio("Q")}  >
                    <span className="key">Q</span>
                    <audio title="Open Hat" className="clip" id="Q" src={openHat} />
                </div>
                <div  className="drum-pad" id="kick-acoustic" onClick={() => playAudio("W")}   >
                    <span className="key">W</span>
                    <audio title="Kick Acoustic" className="clip" id="W" src={kickAcoustic} />
                </div>
                <div  className="drum-pad" id="hi-hat" onClick={() => playAudio("E")}  >
                    <span className="key">E</span>
                    <audio title="Hi Hat808" className="clip" id="E" src={hiHat808} />
                </div>
                <div  className="drum-pad" id="snare-808" onClick={() => playAudio("A")}  >
                    <span className="key">A</span>
                    <audio title="Snare808" className="clip" id="A" src={snare808} />
                </div>
                <div  className="drum-pad" id="perc-808" onClick={() => playAudio("S")} >
                    <span className="key">S</span>
                    <audio title="Perc808" className="clip" id="S" src={perc808} />
                </div>
                <div  className="drum-pad" id="kick-electro" onClick={() => playAudio("D")} >
                    <span className="key">D</span>
                    <audio title="Kick Electro" className="clip" id="D" src={kickElectro} />
                </div>
                <div  className="drum-pad" id="kick-tape" onClick={() => playAudio("Z")} >
                    <span className="key">Z</span>
                    <audio title="Tom808" className="clip" id="Z" src={tom808} />
                </div>
                <div  className="drum-pad" id="kick-old-school" onClick={() => playAudio("X")}  >
                    <span className="key">X</span>
                    <audio title="Kick OldSchool" className="clip" id="X" src={kickOldSchool}  />
                </div>
                <div  className="drum-pad" id="kick-thump" onClick={() => playAudio("C")}  >
                    <span className="key">C</span>
                    <audio title="Kick Thump" className="clip" id="C" src={kickThump} />
                </div>
            </div>
        </div>
    )
}

export default DrumPad
