const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

let storage = {
  counterIs: "Off",
};

function setState(state) {
  chrome.storage.local.set(state);
}

function getState() {
  chrome.storage.local.get().then(onGot);
}

function onLoad() {
  getState();
}
onLoad();

btn1.addEventListener("click", () => {
  storage.counterIs = "On";
  setState({ counterIs: "On" });
  getState();
});

btn2.addEventListener("click", () => {
  storage.counterIs = "Off";
  setState({ counterIs: "Off" });
  getState();
});

function onGot(item) {
  let state = item.counterIs;
  btn1State(state);
}

function btn1State(state) {
  if (state === "On") {
    btn1Opacity();
    return;
  }
  btn2Opacity();
}

function btn1Opacity() {
  btn1.classList.toggle("opacity");
  if (btn2.classList.contains("opacity") === true) {
    btn2.classList.toggle("opacity");
  }
}

function btn2Opacity() {
  btn2.classList.toggle("opacity");
  if (btn1.classList.contains("opacity") === true) {
    btn1.classList.toggle("opacity");
  }
}
