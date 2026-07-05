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

  const isExternalLink = (href) => /^https?:\/\//.test(href);

  const decorateExternalLink = (link) => {
    if (isExternalLink(link.href)) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
  };

  const createLink = (item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    link.className = item.style === "primary" ? "button primary" : "button secondary";
    decorateExternalLink(link);
    return link;
  };

  const renderActions = () => {
    const target = document.querySelector("[data-actions]");
    target.replaceChildren(...config.actions.map(createLink));
  };

  const renderStats = () => {
    const target = document.querySelector("[data-stats]");
    const stats = config.stats.map((stat) => {
      const item = document.createElement("li");
      const value = document.createElement("strong");
      const label = document.createElement("span");

      value.textContent = stat.value;
      label.textContent = stat.label;
      item.append(value, label);

      return item;
    });

    target.replaceChildren(...stats);
  };

  const renderFeatures = () => {
    const target = document.querySelector("[data-features]");
    const cards = config.features.map((feature) => {
      const article = document.createElement("article");
      const icon = document.createElement("span");
      const title = document.createElement("h3");
      const text = document.createElement("p");

      article.className = "feature-card";
      icon.className = "card-icon";
      icon.textContent = feature.icon;
      title.textContent = feature.title;
      text.textContent = feature.text;
      article.append(icon, title, text);

      return article;
    });

    target.replaceChildren(...cards);
  };

  const renderGallery = () => {
    const target = document.querySelector("[data-gallery]");
    const cards = config.gallery.map((item) => {
      const article = document.createElement("article");
      const label = document.createElement("span");
      const title = document.createElement("h3");
      const text = document.createElement("p");

      article.className = "work-card";
      label.textContent = item.label;
      title.textContent = item.title;
      text.textContent = item.text;
      article.append(label, title, text);

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
      decorateExternalLink(link);
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
  renderStats();
  renderFeatures();
  renderGallery();
  renderSteps();
  renderContactLinks();
  setupThemeToggle();
})();
