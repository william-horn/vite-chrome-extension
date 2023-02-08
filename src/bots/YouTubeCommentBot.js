
import Bot, { 
  BotStatusType, 
  BotServiceRequest,
  BotContentRequest,
} from "../lib/Bot";

const YCB = new Bot({ name: "YouTubeCommentBot" });

async function* bot_main(options) {
  console.log("Bot has started running...");

  while (true) {
    console.log("First click button");
    // *if _stepCheckpoint returns Resume, keep executing...
    // *if _stepCheckpoint returns Cycle, keep executing...
    // *if _stepCheckpoint returns Step, then yield
    yield YCB._stepCheckpoint();

    console.log("Now copying text...");
    yield YCB._stepCheckpoint();
  }

  console.log("Bot finished");

  yield YCB._cycleCheckpoint();
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
