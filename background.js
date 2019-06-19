let date = Date.now();
let countdownMaxInMin = 20;
let countdownMaxInSec = countdownMaxInMin * 60;
let countdownMaxInMS = countdownMaxInSec * 1000;

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({})],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

chrome.storage.local.set({
  date: date,
  isPaused: false,
  countdownMaxInMin: countdownMaxInMin
});

clearAndCreateAlarm(countdownMaxInMin,countdownMaxInMin);
