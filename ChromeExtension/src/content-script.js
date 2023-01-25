chrome.storage.onChanged.addListener((cb) => {
  let counterState = Object.values(cb)[0].newValue;
  stateIsGot(counterState);
});

function getState() {
  chrome.storage.local.get().then(onGot);
}
function onGot(item) {
  let state = item.counterIs;
  stateIsGot(state);
}

function onLoad() {
  getState();
}
onLoad();

function stateIsGot(counterState) {
  if (counterState === "On") {
    const divEl = document.createElement("div");
    script = document.createElement("script");
    script2 = document.createElement("script");
    script = document.createElement("script");
    script2 = document.createElement("script");
    const jsUrl1 = chrome.runtime.getURL("app.js");
    const jsUrl2 = chrome.runtime.getURL("chunk-vendors.js");
    const cssUrl = chrome.runtime.getURL("content-script.css");

    script.src = jsUrl1;
    script2.src = jsUrl2;

    document.getElementsByTagName("head")[0].appendChild(script);
    document.getElementsByTagName("head")[0].appendChild(script2);

    divEl.style.all = "initial";
    divEl.id = "myDiv";
    divEl.style.position = "fixed";
    divEl.style.zIndex = "999999";

    const linkEl = document.createElement("link");
    linkEl.id = "link";
    linkEl.href = cssUrl;
    linkEl.rel = "stylesheet";
    divEl.append(linkEl);

    const divApp = document.createElement("div");
    divApp.id = "app";
    divEl.append(divApp);
    document.body.prepend(divEl);
    return;
  }
  const divEl = document.getElementById("myDiv");
  if (divEl !== null) {
    divEl.remove();
  }
}
