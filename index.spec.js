import { Message } from './lib/Message';
import { describe, it, fit, delay, beforeEach, afterEach } from 'highground';
console.log(beforeEach,afterEach);
import { time, transmit } from './utility'
import { ControlCode } from './lib/ControlCode'
describe("Nord AI Tests",()=>{
    const s = 0xff;
    let start;
    beforeEach(async ()=>{
        start = time();
        // await transmit(Message.BANK_SELECT_MSB(0x00));
        // await transmit(Message.BANK_SELECT_LSB(0));
        // await transmit(Message.PROGRAM_CHANGE(0x00));
        // await delay(250);
    });
    //
    // it("Play a scale",async ()=>{
    //     let noteIndex = 35;
    //     for (let i = 0; i <= 0xf; i++) {
    //         transmit(Message.NOTE_ON(noteIndex + i, 0x7f, 0x00), start + i * s);
    //         transmit(Message.NOTE_OFF(noteIndex + i, 0x7f, 0x00), start + i * s + s);
    //     }
    //     await delay(s * 0xf);
    // });
    //
    // it("Program select",async()=>{
    //     for (let i = 0; i < 10; i++) {
    //         transmit(Message.PROGRAM_CHANGE(i), start + i*s*2);
    //         transmit(Message.NOTE_ON(0x30, 0x7f, 0x00), start + i*s*2 + s);
    //         transmit(Message.NOTE_OFF(0x30, 0x7f, 0x00), start + i*s*2 + s*2);
    //     }
    //     await delay(s * 0xf);
    // });
    //
    // it("Bank select ",async()=>{
    //     for (let i = 0; i < 8; i++) {
    //         await transmit(Message.BANK_SELECT_MSB(0x00));
    //         await transmit(Message.BANK_SELECT_LSB(i));
    //         await transmit(Message.PROGRAM_CHANGE(0x00));
    //         await delay(s);
    //         await transmit(Message.NOTE_ON(0x30, 0x7f, 0x00));
    //         await transmit(Message.NOTE_OFF(0x30, 0x7f, 0x00), window.performance.now() + s * 0x04);
    //         await delay(s * 0x04);
    //     }
    // })
    //
    it("Arp Run",async ()=>{
        await transmit(Message.CONTROL_CHANGE(ControlCode.ARP_RUN, 127),start);
        await transmit(Message.CONTROL_CHANGE(ControlCode.ARP_RUN, 0),start + 1000);
        await transmit(Message.CONTROL_CHANGE(ControlCode.ARP_RUN, 127),start + 2000);
        await transmit(Message.CONTROL_CHANGE(ControlCode.ARP_RUN, 0),start + 3000);
        for (let note of [0x30,0x34,0x38]) {
            await transmit(Message.NOTE_ON(note, 0x7f, 0x00));
            await transmit(Message.NOTE_OFF(note, 0x7f, 0x00), start + 4000);
        }
        await delay(4000);
    })


});