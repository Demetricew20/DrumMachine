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
    const [audioSource, setAudioSource] = useState([
        {
            name: 'Kick OldSchool',
            key: "Q",
            src: kickOldSchool
        },
        {
            name: 'Kick Acoustic',
            key: "W",
            src: kickAcoustic
        },
        {
            name: 'Hi Hat808',
            key: "E",
            src: hiHat808
        },
        {
            name: 'Kick Electro',
            key: "A",
            src: kickElectro
        },
        {
            name: 'Tom808',
            key: "S",
            src: tom808
        },
        {
            name: 'Kick Thump',
            key: "D",
            src: kickThump
        },
        {
            name: 'Open Hat',
            key: "Z",
            src: kickOldSchool
        },
        {
            name: 'Perc808',
            key: "X",
            src: perc808
        },
        {
            name: 'Snare808',
            key: "C",
            src: snare808
        },


    ])

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

const mapDrumPads = () => {
    return(
        audioSource.map((source, i) => {
            return (
                <div key={i} className="drum-pad" id={`audio${i}`} onClick={() => playAudio(source.key)}   >
                <span className="key">{source.key}</span>
                        <audio title={source.name} className="clip" id={source.key} src={source.src} />
                </div>
                )  
        })
    )
}


    return (
        <div id="drum-machine" >
            <div id="display"></div>
                <div id="drum-pad-display">
                    {mapDrumPads()}
                </div>
        </div>
    )
}

export default DrumPad
