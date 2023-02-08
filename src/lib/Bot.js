
// imports
import { EnumCollection, EnumItem } from "../enum/Enum";


// types
export const BotStatusType = new EnumCollection({
  Active: new EnumItem({ value: 100 }),
  Inactive: new EnumItem({ value: 101 })
});

export const BotRequestType = new EnumCollection({
  Service: new EnumItem({ value: 200 }),
  Content: new EnumItem({ value: 201 })
});

export const BotProgressionType = new EnumCollection({
  Resume: new EnumItem({ value: 300 }),
  Step: new EnumItem({ value: 301 }),
  Cycle: new EnumItem({ value: 302 }),
});

// methods
const getStatus = () => {
  return this._status;
}

const setStatus = (status) => {
  this._status = status;
}

const checkStatus = (status) => {
  return this.getStatus() === status;
}

const run = async (options) => {
  if (checkStatus(BotStatusType.Active)) return;
  setStatus(BotStatusType.Active);

}

const _checkProgressionType = (pt) => {
  if (this._progression !== pt) return BotProgressionType.Resume;
  return pt;
}

const _stepCheckpoint = () => {
  return _checkProgressionType(BotProgressionType.Step);
}

const _cycleCheckpoint = () => {
  return _checkProgressionType(BotProgressionType.Cycle);
}

const cycle = () => {
  this._progression = BotProgressionType.Cycle;
}

const nextStep = () => {
  this._progression = BotProgressionType.Step;
}

// constructor
const Bot = function(options={}) {
  this._name = options.name || "Bot";
  this._progression = BotProgressionType.Resume;
  this._status = BotStatusType.Inactive;
}

Object.assign(Bot.prototype, {
  getStatus,
  checkStatus,
  setStatus,
  run,
  _stepCheckpoint,
  _cycleCheckpoint
});


export default Bot;
