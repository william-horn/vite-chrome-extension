
// imports
import { EnumCollection, EnumItem } from "../enum/Enum";


// types
export const BotStatusType = new EnumCollection({
  Active: new EnumItem({ value: 0 }),
  Inactive: new EnumItem({ value: 1 })
});

export const BotRequestType = new EnumCollection({
  Service: new EnumItem({ value: 2 }),
  Content: new EnumItem({ value: 3 })
});

export const BotProgressionType = new EnumCollection({
  Resume: new EnumItem({ value: 4 }),
  Step: new EnumItem({ value: 5 }),
  Cycle: new EnumItem({ value: 6 }),
  Exit: new EnumItem({ value: 7 }),
});

// methods
const getStatus = function() {
  return this._status;
}

const setStatus = function(status) {
  this._status = status;
}

const checkStatus = function(status) {
  return this.getStatus() === status;
}

const run = async function(options) {
  if (!this._sourceGenerator) throw Error("Must call Bot.program() before running");
  if (this.checkStatus(BotStatusType.Active)) return;
  this.setStatus(BotStatusType.Active);
}

const cycle = function() {
  this._progression = BotProgressionType.Cycle;
}

const step = function() {
  this._progression = BotProgressionType.Step;
}

const program = function(run_sourceGenerator) {
  const exec = run_sourceGenerator();
  this._sourceGenerator = exec;
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
  cycle,
  step,
  program,
});

setInterval(() => {

}, 100);


export default Bot;
