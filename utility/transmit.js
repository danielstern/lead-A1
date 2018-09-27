import { config } from '../config'

let midiAccess;
export async function transmit(message = [0xFA], time = window.performance.now()) {
    if (!midiAccess) midiAccess = await navigator.requestMIDIAccess({ sysex: true });
    console.log(Array.from(midiAccess.outputs));
    let input = Array.from(midiAccess.outputs).find(([id,output])=>output.name === config.name);
    if (!input) throw new Error(`No midi device with name ${config.name} was found. Please check your midi devices or edit the config file.`)
    let id = input[0];
    // console.log("Sending...",message.map(n=>n.toString(16)),time);
    midiAccess.outputs.get(id)
        .send(message,time)
}