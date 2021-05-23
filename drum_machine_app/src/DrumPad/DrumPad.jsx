import React, {useEffect, useState} from 'react';
import './DrumPad.css';
import kickOldSchool from '../Assets/DrumSamples/kick-oldschool.mp3';
import kickAcoustic from '../Assets/DrumSamples/kick-acoustic01.wav';
import hiHat808 from '../Assets/DrumSamples/hihat-808.wav';
import kickElectro from '../Assets/DrumSamples/kick-electro01.wav';
import kickTape from '../Assets/DrumSamples/kick-tape.wav';
import kickThump from '../Assets/DrumSamples/kick-thump.wav';
import openHat from '../Assets/DrumSamples/openhat-tight.wav';
import perc808 from '../Assets/DrumSamples/perc-808.wav';
import snare808 from '../Assets/DrumSamples/snare-808.wav';

const DrumPad = () => {

    useEffect(() => {
        getKey();
    }, [])

const playAudio = (source) => {
    let audio = new Audio(source);
    audio.play();
    
}

const onKeyDown = (e) => {
    console.log(e.keyCode);
}

const getKey = () => {
    document.body.addEventListener("keydown", (e) => {
        let pressedKey = e.key;

        if(pressedKey === "q" || pressedKey === "Q" ){
            playAudio(openHat);
        }
        else if(pressedKey === 'w' || pressedKey === 'W'){
            playAudio(kickAcoustic)
        }
        else if(pressedKey === 'e' || pressedKey === 'E'){
            playAudio(hiHat808)
        }
        else if(pressedKey === 'a' || pressedKey === 'A'){
            playAudio(snare808)
        }
        else if(pressedKey === 's' || pressedKey === 'S'){
            playAudio(perc808)
        }
        else if(pressedKey === 'd' || pressedKey === 'D'){
            playAudio(kickElectro)
        }
        else if(pressedKey === 'z' || pressedKey === 'Z'){
            playAudio(kickTape)
        }
        else if(pressedKey === 'x' || pressedKey === 'X'){
            playAudio(kickOldSchool)
        }
        else if(pressedKey === 'c' || pressedKey === 'C'){
            playAudio(kickThump)
        }
        else{
            console.log('pressed key....')
        }
    })
}


    return (
        <div id="drum-machine" onKeyPress={onKeyDown}>
            <div id="display">
                <div  className="drum-pad" id="drum-pad-1" onClick={() => playAudio(openHat)}  >
                    <p className="drum-selection">Open Hat</p>
                    <span className="key">Press Q</span>
                    <audio className="clip" id="Q" src={openHat} />
                </div>
                <div  className="drum-pad" id="drum-pad-2" onClick={() => playAudio(kickAcoustic)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={kickAcoustic} />
                </div>
                <div  className="drum-pad" id="drum-pad-3" onClick={() => playAudio(hiHat808)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={hiHat808} />
                </div>
                <div  className="drum-pad" id="drum-pad-4" onClick={() => playAudio(snare808)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={snare808} />
                </div>
                <div  className="drum-pad" id="drum-pad-5" onClick={() => playAudio(perc808)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={perc808} />
                </div>
                <div  className="drum-pad" id="drum-pad-6" onClick={() => playAudio(kickElectro)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={kickElectro} />
                </div>
                <div  className="drum-pad" id="drum-pad-7" onClick={() => playAudio(kickTape)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={kickTape} />
                </div>
                <div  className="drum-pad" id="drum-pad-8" onClick={() => playAudio(kickOldSchool)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={kickOldSchool} />
                </div>
                <div  className="drum-pad" id="drum-pad-9" onClick={() => playAudio(kickThump)}  >
                    <span className="drum-selection"></span>
                    <span className="key">Q</span>
                    <audio className="clip" id="Q" src={kickThump} />
                </div>
            </div>
        </div>
    )
}

export default DrumPad
