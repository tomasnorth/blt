chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("index.html");
  let tab = await chrome.tabs.create({ url });
});

