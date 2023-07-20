// const btn = document.querySelector("button");
// btn.addEventListener("click", () =>
//   displayMessage("Brian: Hi there, how are you today?", "chat")
// );

const btn = document.querySelector("button");
btn.addEventListener("click", () => displayMessage("Himansu: Hi how are you"));

function displayMessage(msgText, msgType) {
  const html = document.querySelector("html");

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  html.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.onclick = function () {
    panel.parentNode.removeChild(panel);
  };

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}
