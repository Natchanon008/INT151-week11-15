// ---- Your existing dialog function ----
function showDialog(message, onClose = null) {
  const overlay = document.getElementById("dialogOverlay");
  const dialogMessage = document.getElementById("dialogMessage");
  const okBtn = document.getElementById("dialogOkBtn");

  dialogMessage.textContent = message;
  overlay.style.display = "flex";

  okBtn.onclick = () => {
    overlay.style.display = "none";
    if (onClose) onClose();
  };
}

// ---- Attach event to testDialogBtn ----
document.addEventListener("DOMContentLoaded", () => {
  const testBtn = document.getElementById("testDialogBtn");

  testBtn.onclick = () => {
    showDialog("Dialog ทำงานแล้ว", () => {
      const now = new Date();
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const formatted = now.toLocaleString("en-GB", { timeZone: tz });

      document.getElementById("statusMsg").textContent =
        `Current Time: ${formatted} (${tz})`;
    });
  };
});
