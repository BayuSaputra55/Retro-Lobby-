const playerName = document.querySelector("#playerName");
const gameSelect = document.querySelector("#gameSelect");
const sessionMode = document.querySelector("#sessionMode");
const inviteBox = document.querySelector("#inviteBox");
const inviteCode = document.querySelector("#inviteCode");
const inviteDescription = document.querySelector("#inviteDescription");
let currentInvite = "";

function makeCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 4; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return "RETRO-" + out;
}

document.querySelector("#createButton").addEventListener("click", () => {
  const name = playerName.value.trim() || "Player 1";
  const game = gameSelect.options[gameSelect.selectedIndex].text;
  const mode = sessionMode.options[sessionMode.selectedIndex].text;
  currentInvite = makeCode();
  inviteCode.textContent = currentInvite;
  inviteDescription.textContent = `${name} menyiapkan ${mode} untuk ${game}.`;
  inviteBox.hidden = false;
  inviteBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

document.querySelector("#copyButton").addEventListener("click", async () => {
  const name = playerName.value.trim() || "Player 1";
  const game = gameSelect.options[gameSelect.selectedIndex].text;
  const mode = sessionMode.options[sessionMode.selectedIndex].text;
  const text = `Retro Lobby invite (DEMO)\nKode: ${currentInvite}\nHost: ${name}\nGame: ${game}\nMode: ${mode}\n\nCatatan: ini hanya kode demo lokal, bukan room online aktif. Hubungkan melalui RetroArch Netplay sesuai panduan Pokémon Quetzal.`;
  try {
    await navigator.clipboard.writeText(text);
    document.querySelector("#copyButton").textContent = "COPIED ✓";
    setTimeout(() => document.querySelector("#copyButton").textContent = "COPY INVITE TEXT", 1800);
  } catch {
    window.prompt("Salin teks undangan ini:", text);
  }
});
