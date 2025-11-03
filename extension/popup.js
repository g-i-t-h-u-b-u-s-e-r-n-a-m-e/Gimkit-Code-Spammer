// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");

  startButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: function() {
          const textBox = document.querySelector('input.sc-dntSTA.eowPqe');

          function startBot() {
            textBox.value = getRandomNumber();
            const enterEvent = new KeyboardEvent('keydown', {
              bubbles: true,
              cancelable: true,
              view: window,
              key: 'Enter',
              keyCode: 13,
              code: 'Enter',
              which: 13
            });
            textBox.dispatchEvent(enterEvent);
          }

          function getRandomNumber() {
            return Math.floor(Math.random() * (999999 - 10000 + 1)) + 1000;
          }

          window.botRunning = true;
          window.botInterval = setInterval(startBot, 10);
        }
      });
      startButton.style.display = "none";
    });
  });
});
