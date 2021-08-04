chrome.browserAction.onClicked.addListener(function(activeTab)
      {
        var newURL = "http://google.com/";
        chrome.tabs.create({ url: newURL });
      });