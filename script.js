document.addEventListener("DOMContentLoaded", () => {
  fetch("resellers.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("reseller-cards");
      data.forEach((site) => {
        const card = document.createElement("div");
        card.className = "card";

        // Extract domain for favicon
        const url = new URL(site.link);
        const faviconURL = `https://www.google.com/s2/favicons?sz=64&domain=${url.hostname}`;

        card.innerHTML = `
          <h3>
            <img src="${faviconURL}" alt="${site.name} favicon" class="favicon" />
            ${site.name}
          </h3>
          <p>From <strong>${site.price}</strong></p>
          <a class="button" href="${site.link}" target="_blank" rel="noopener">Visit Site</a>
        `;
        container.appendChild(card);
      });
    });
});
