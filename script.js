document.addEventListener("DOMContentLoaded", () => {
  fetch("resellers.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("reseller-cards");
      data.forEach((site) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${site.name}</h3>
          <p>From <strong>${site.price}</strong></p>
          <a class="button" href="${site.link}" target="_blank">Visit Site</a>
        `;
        container.appendChild(card);
      });
    });
});
