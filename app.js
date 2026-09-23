const apps = [
  { name: "Animal Sounds", bundleId: "com.smartbabyapps.animalsounds", version: "2.0", platform: "iOS", minimumOS: "3.1", fileSize: "19.8 MB" },
  { name: "SoundTouch", bundleId: "com.yourcompany.SoundTouch", version: "1.4", platform: "iOS", minimumOS: "3.0", fileSize: "155.5 MB" },
  { name: "Tozzle", bundleId: "com.nodeflexion.Tozzle", version: "3.7", platform: "iOS", minimumOS: "3.1.3", fileSize: "112.6 MB" },
  { name: "AutismXpress", bundleId: "X7WS995LSR.com.StudioEmotion.AutismXpress", version: "1.0", platform: "iOS", minimumOS: "3.1.2", fileSize: "7.4 MB" },
  { name: "Lunchbox", bundleId: "com.thup.MonkeyPreschool", version: "1.4", platform: "iOS", minimumOS: "3.0", fileSize: "13.7 MB" },
  { name: "Peek-a-Zoo", bundleId: "com.duckduckmoosedesign.peekazoo", version: "1.1.1", platform: "iOS", minimumOS: "3.0", fileSize: "19.1 MB" },
  { name: "Michigan Nature Sounds", bundleId: "com.yourcompany.MichiganNatureSounds", version: "1.0", platform: "iOS", minimumOS: "3.0", fileSize: "24.6 MB" },
  { name: "Peek-a-Zoo", bundleId: "com.tbd.pazCLL", version: "1.0", platform: "iOS", minimumOS: "3.0", fileSize: "24.6 MB" },
  { name: "Artsee", bundleId: "com.britejar.artsee", version: "1.1", platform: "iOS", minimumOS: "2.2", fileSize: "12.4 MB" },
  { name: "Angry Birds", bundleId: "com.rovio.AngryBirdsHalloween", version: "1.5.3", platform: "iOS", minimumOS: "3.0", fileSize: "16.8 MB" },
  { name: "Farm Flip Fun", bundleId: "lv.yapp.farmflipfun", version: "1.0", platform: "iOS", minimumOS: "3.0", fileSize: "10.6 MB" },
  { name: "Farm Story", bundleId: "com.teamlava.farmstory", version: "1.2", platform: "iOS", minimumOS: "3.0", fileSize: "19.9 MB" },
  { name: "Stickers", bundleId: "com.nightanddaystudios.ericcarlestickers", version: "1.0", platform: "iOS", minimumOS: "5.0", fileSize: "206.1 MB" },
  { name: "Forest", bundleId: "com.nightanddaystudios.peekabooforest", version: "1.1.0", platform: "iOS", minimumOS: "3.1.3", fileSize: "25.6 MB" },
  { name: "Virtuoso", bundleId: "com.peterb.virtuosopianofree", version: "3.1.2", platform: "iOS", minimumOS: "4.0", fileSize: "19.9 MB" },
  { name: "ABC Tracer", bundleId: "com.appzoo.ABCTracer", version: "1.8", platform: "iOS", minimumOS: "2.2.1", fileSize: "20.9 MB" },
  { name: "Peek Wild", bundleId: "com.nightanddaystudios.peekaboowild", version: "2.0.1", platform: "iOS", minimumOS: "3.1.3", fileSize: "9.8 MB" },
  { name: "Peekaboo", bundleId: "com.nightanddaystudios.peekaboobarn", version: "2.0", platform: "iOS", minimumOS: "2.2", fileSize: "3.6 MB" },
  { name: "Finding Sight", bundleId: "my.finding3", version: "2.1", platform: "iOS", minimumOS: "3.2", fileSize: "34 MB" },
  { name: "ArtikPix", bundleId: "com.rinnapps.artikpix.iap", version: "1.2.4", platform: "iOS", minimumOS: "3.1", fileSize: "41.4 MB" }
];

const appList = document.getElementById("app-list");
const searchInput = document.getElementById("search-input");
const platformFilter = document.getElementById("platform-filter");
const installBtn = document.getElementById("install-btn");
const modal = document.getElementById("app-modal");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const closeModal = document.getElementById("close-modal");

const state = {
  query: "",
  platform: "all"
};

let deferredPrompt = null;

function getFilteredApps() {
  return apps.filter((app) => {
    const matchesQuery =
      app.name.toLowerCase().includes(state.query) ||
      app.bundleId.toLowerCase().includes(state.query);
    const matchesPlatform = state.platform === "all" || app.platform === state.platform;
    return matchesQuery && matchesPlatform;
  });
}

function renderAppList() {
  const filteredApps = getFilteredApps();

  if (!filteredApps.length) {
    appList.innerHTML = '<div class="empty-state">No apps match your current search.</div>';
    return;
  }

  appList.innerHTML = filteredApps
    .map(
      (app) => `
        <button class="app-card" type="button" data-bundle-id="${app.bundleId}">
          <h3>${app.name}</h3>
          <div class="meta">
            <span><strong>Version:</strong> ${app.version}</span>
            <span><strong>Bundle ID:</strong> ${app.bundleId}</span>
            <span><strong>File size:</strong> ${app.fileSize}</span>
          </div>
        </button>
      `
    )
    .join("");

  appList.querySelectorAll(".app-card").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedApp = apps.find((app) => app.bundleId === button.dataset.bundleId);
      if (selectedApp) {
        openModal(selectedApp);
      }
    });
  });
}

function openModal(app) {
  modalTitle.textContent = app.name;
  modalDetails.innerHTML = `
    <div>
      <dt>App name</dt>
      <dd>${app.name}</dd>
    </div>
    <div>
      <dt>Bundle ID</dt>
      <dd>${app.bundleId}</dd>
    </div>
    <div>
      <dt>Version</dt>
      <dd>${app.version}</dd>
    </div>
    <div>
      <dt>Platform</dt>
      <dd>${app.platform}</dd>
    </div>
    <div>
      <dt>Minimum OS</dt>
      <dd>${app.minimumOS}</dd>
    </div>
    <div>
      <dt>File size</dt>
      <dd>${app.fileSize}</dd>
    </div>
  `;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeAppModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderAppList();
});

platformFilter.addEventListener("change", (event) => {
  state.platform = event.target.value;
  renderAppList();
});

closeModal.addEventListener("click", closeAppModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeAppModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeAppModal();
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) {
    alert("To add this app to your Home Screen, open the page in Safari and tap Share > Add to Home Screen.");
    return;
  }

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`Install prompt outcome: ${outcome}`);
  deferredPrompt = null;
  installBtn.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}

renderAppList();
