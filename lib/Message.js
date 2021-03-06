import { StatusCode } from './StatusCode';
import { ControlCode } from './ControlCode'

export const Message = {
    NOTE_ON(note = 44, velocity = 0x7f, channel = 0x00){return [StatusCode.NOTE_ON + channel, note, velocity]},
    NOTE_OFF(note = 44, velocity = 0x7f, channel = 0x00){return [StatusCode.NOTE_OFF + channel, note, velocity]},
    PROGRAM_CHANGE(program = 0x00, channel = 0x00){return [StatusCode.PROGRAM_CHANGE + channel, program]},
    CONTROL_CHANGE(CC = 0xFF, value = 0x7F, channel = 0x00){return [StatusCode.CONTROL_CHANGE + channel, CC, value]},
    BANK_SELECT_MSB(bankMSB = 0x00, channel = 0x00){return [StatusCode.CONTROL_CHANGE + channel, ControlCode.BANK_SELECT_MSB, bankMSB]},
    BANK_SELECT_LSB(bankLSB = 0x00, channel = 0x00){return [StatusCode.CONTROL_CHANGE + channel, ControlCode.BANK_SELECT_LSB, bankLSB]},
};