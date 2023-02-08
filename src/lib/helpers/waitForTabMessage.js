
/*
  response objects should look like:

  {
    status: "response",
    type: "some string"
  }
*/

const waitForTabMessage = (key) => {
  return new Promise((resolve) => {
    const listener = (data, sender, sendResponse) => {
      if (typeof data === "object" && data.status === "response" && data.type === key) {
        chrome.runtime.onMessage.removeListener(listener);
        resolve([data, sender, sendResponse]);
      }
    }
    chrome.runtime.onMessage.addListener(listener);
  })
}

export default waitForTabMessage;