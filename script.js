(function () {
  const config = window.SITE_CONFIG;

  if (!config) {
    throw new Error("SITE_CONFIG was not found. Check that site.config.js loads before script.js.");
  }

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && value) {
      element.textContent = value;
    }
  };

  const applyTheme = (theme) => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  const createLink = (item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    link.className = item.style === "primary" ? "button primary" : "button secondary";
    return link;
  };

  const renderActions = () => {
    const target = document.querySelector("[data-actions]");
    target.replaceChildren(...config.actions.map(createLink));
  };

  const renderFeatures = () => {
    const target = document.querySelector("[data-features]");
    const cards = config.features.map((feature) => {
      const article = document.createElement("article");
      article.className = "feature-card";
      article.innerHTML = `
        <span class="card-icon">${feature.icon}</span>
        <h3>${feature.title}</h3>
        <p>${feature.text}</p>
      `;
      return article;
    });
    target.replaceChildren(...cards);
  };

  const renderGallery = () => {
    const target = document.querySelector("[data-gallery]");
    const cards = config.gallery.map((item, index) => {
      const article = document.createElement("article");
      article.className = "gallery-card";
      article.style.setProperty("--gallery-index", index + 1);
      article.innerHTML = `
        <span>${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      return article;
    });
    target.replaceChildren(...cards);
  };

  const renderSteps = () => {
    const target = document.querySelector("[data-steps]");
    const steps = config.steps.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    });
    target.replaceChildren(...steps);
  };

  const renderContactLinks = () => {
    const target = document.querySelector("[data-contact-links]");
    const links = config.contact.links.map((item) => {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      return link;
    });
    target.replaceChildren(...links);
  };

  const setupThemeToggle = () => {
    const button = document.querySelector("[data-theme-toggle]");
    button.addEventListener("click", () => {
      document.body.classList.toggle("night-mode");
    });
  };

  document.title = config.name;
  applyTheme(config.theme);
  setText("[data-site-name]", config.name);
  setText("[data-eyebrow]", config.eyebrow);
  setText("[data-hero-title]", config.heroTitle);
  setText("[data-description]", config.description);
  setText("[data-tagline]", config.tagline);
  setText("[data-intro]", config.intro);
  setText("[data-contact-title]", config.contact.title);
  setText("[data-contact-text]", config.contact.text);
  renderActions();
  renderFeatures();
  renderGallery();
  renderSteps();
  renderContactLinks();
  setupThemeToggle();
})();

