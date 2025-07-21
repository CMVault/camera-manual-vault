
document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "This image has gone rogue.",
    "Image is still in the darkroom.",
    "We promise an image is coming."
  ];
  const container = document.getElementById("placeholderContainer");
  const silhouette = document.createElement("div");
  silhouette.style.width = "120px";
  silhouette.style.height = "80px";
  silhouette.style.background = "url('assets/images/placeholder_vintage.svg') no-repeat center";
  silhouette.style.backgroundSize = "contain";
  silhouette.style.margin = "20px auto";
  silhouette.style.animation = "bounce 2s infinite";

  const msg = document.createElement("p");
  msg.innerText = messages[0];
  msg.style.textAlign = "center";
  msg.style.fontStyle = "italic";

  container.appendChild(silhouette);
  container.appendChild(msg);

  let index = 1;
  const interval = setInterval(() => {
    if (index < 3) {
      msg.innerText = messages[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 15000);
});
