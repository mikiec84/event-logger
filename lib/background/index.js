
// content script 

chrome.extension.onMessage.addListener(function (req, sender, sendResponse) {
    log('contentScript.onLoaded', sender);
});

// tabs

chrome.tabs.onCreated.addListener(function (tab) {
    log('tabs.onCreated', tab);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    log('tabs.onUpdated', tabId, changeInfo, tab);
});

chrome.tabs.onMoved.addListener(function (tabId, moveInfo) {
    log('tabs.onMoved', tabId, moveInfo);
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
    log('tabs.onActivated', activeInfo);
});

chrome.tabs.onHighlighted.addListener(function (highlightInfo) {
    log('tabs.onHighlighted', highlightInfo);
});

chrome.tabs.onDetached.addListener(function (tabId, detachInfo) {
    log('tabs.onDetached', tabId, detachInfo);
});

chrome.tabs.onAttached.addListener(function (tabId, attachInfo) {
    log('tabs.onAttached', tabId, attachInfo);
});

chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    log('tabs.onRemoved', tabId, removeInfo);
});

chrome.tabs.onReplaced.addListener(function (addedTabId, removedTabId) {
    log('tabs.onReplaced', addedTabId, removedTabId);
});

// webNavigation

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
    log('webNavigation.onBeforeNavigate', details);
});

chrome.webNavigation.onCommitted.addListener(function (details) {
    log('webNavigation.onCommitted', details);
});

chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    log('webNavigation.onDOMContentLoaded', details);
});

chrome.webNavigation.onCompleted.addListener(function (details) {
    log('webNavigation.onCompleted', details);
});

chrome.webNavigation.onErrorOccurred.addListener(function (details) {
    log('webNavigation.onErrorOccurred', details);
});

chrome.webNavigation.onCreatedNavigationTarget.addListener(function (details) {
    log('webNavigation.onCreatedNavigationTarget', details);
});

chrome.webNavigation.onReferenceFragmentUpdated.addListener(function (details) {
    log('webNavigation.onReferenceFragmentUpdated', details);
});

chrome.webNavigation.onTabReplaced.addListener(function (details) {
    log('webNavigation.onTabReplaced', details);
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    log('webNavigation.onHistoryStateUpdated', details);
});
