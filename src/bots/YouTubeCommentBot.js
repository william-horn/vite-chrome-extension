
import Bot, { 
  BotStatusType, 
  BotProgressionType,
  BotServiceRequest,
  BotContentRequest,
} from "../lib/Bot";

const YCB = new Bot({ 
  name: "YouTubeCommentBot",
  steps: [
    clickButton,
    findName,
    submitData
  ]
});

const cycle1 = YCB.createCycle();

cycle1.addStep(() => {
  const button = document.querySelector("something");
  button.click();

});

cycle2.addStep(() => {

});


async function* bot_main(options) {
  console.log("Bot has started running...");

  while (true) {
    console.log("First click button");

    yield BotProgressionType.Step;

    console.log("Now copying text...");

    yield BotProgressionType.Step;

    console.log("Restarting...");

    yield BotProgressionType.Cycle;
  }

  console.log("Bot finished");

  yield BotProgressionType.Exit;
}

YCB.program(bot_main);

YCB.onServiceRequest(async (request, sender, sendResponse) => {
  switch (request) {

  }
});

YCB.onContentRequest(async (request, sender, sendResponse) => {
  switch (request) {

  }
});

export default YCB;
