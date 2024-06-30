chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      localStorage.clear()
      location.reload() // Optionally, reload the page to see the changes immediately
    },
  })
})
