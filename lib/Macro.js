import { transmit } from '../utility'
import { Message } from './Message'
export const Macro = {
    async BANK_PROGRAM_SELECT(bank = 0x00, program = 0x00, channel = 0x00) {
        await transmit(Message.BANK_SELECT_MSB(0x00, channel));
        await transmit(Message.BANK_SELECT_LSB(bank, channel));
        await transmit(Message.PROGRAM_CHANGE(program, channel));
    }
};