import { config } from '../config'

let midiAccess;
export async function transmit(message = [0xFA], time = window.performance.now()) {
    if (!midiAccess) midiAccess = await navigator.requestMIDIAccess({ sysex: true });
    let id = Array.from(midiAccess.outputs).find(([id,output])=>output.name === config.name)[0];
    // console.log("ID?",config.name,Array.from(midiAccess.outputs),id);
    console.log("Sending...",message.map(n=>n.toString(16)),time);
    midiAccess.outputs.get(id)
        .send(message,time)
}