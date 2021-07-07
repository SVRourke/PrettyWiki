chrome.commands.onCommand.addListener((shortcut) => {
  console.log("Reloading.......");

  if (shortcut.includes("+M")) {
    chrome.runtime.reload();
  }
});
