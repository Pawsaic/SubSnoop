document.addEventListener("DOMContentLoaded", () => {
  fetch("resellers.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("reseller-cards");
      data.forEach((site) => {
        const card = document.createElement("div");
        card.className = "card";

        const url = new URL(site.link);
        const faviconURL = `https://www.google.com/s2/favicons?sz=64&domain=${url.hostname}`;

        card.innerHTML = `
          <div class="favicon-inline">
            <img src="${faviconURL}" alt="${site.name} favicon" class="favicon-large" />
          </div>
          <h3>${site.name}</h3>
          <p>From <strong>${site.price}</strong></p>
          <a class="button" href="${site.link}" target="_blank" rel="noopener">Visit Site</a>
        `;
        container.appendChild(card);
      });
    });
});
