const storyContent = {
  seed: {
    meta: "2019 · Detroit, MI",
    title: "Breaking ground indoors",
    body:
      "Founder Amara Johnson hacked together the first Root rig after juggling three jobs and craving fresh food through lake-effect winters. The prototype lived on a fire escape, watering itself with recycled mason jars and a hacked aquarium pump.",
  },
  prototype: {
    meta: "2020 · Community kitchens",
    title: "From mason jars to modular pods",
    body:
      "The Root crew co-designed with culinary collectives and school cafeterias, building nutrient cartridges that snap in without tools. Early testers clocked 30% faster germination compared to standard soil kits.",
  },
  launch: {
    meta: "2021 · Public debut",
    title: "Root One ships to first 5,000 growers",
    body:
      "A sold-out preorder funded our first manufacturing run in Ohio using recycled ocean-bound plastics. We kept prices under $200 by simplifying electronics and prioritizing replaceable components.",
  },
  scale: {
    meta: "2023 · Going global",
    title: "Localized light recipes for 28 countries",
    body:
      "Root OS now auto-adjusts LED warmth to mimic regional daylight and preserve flavor profiles. Partnerships with repair collectives keep maintenance in-community and affordable.",
  },
  future: {
    meta: "2025 · What's next",
    title: "Root Cooperative campuses",
    body:
      "We're launching neighborhood grow labs that blend hydroponic education, zero-waste refills, and culinary pop-ups powered by Root harvests. The mission stays the same: flavor, dignity, and food autonomy for all.",
  },
};

const steps = document.querySelectorAll("[data-story]");
const metaField = document.querySelector("#story-meta");
const titleField = document.querySelector("#story-title");
const bodyField = document.querySelector("#story-body");

let activeStory = "seed";

const setStory = (key) => {
  const next = storyContent[key];
  if (!next) return;
  activeStory = key;
  metaField.textContent = next.meta;
  titleField.textContent = next.title;
  bodyField.textContent = next.body;
};

steps.forEach((step) => {
  step.addEventListener("click", () => {
    const key = step.dataset.story;
    if (!key || key === activeStory) return;

    steps.forEach((el) => {
      const isActive = el === step;
      el.classList.toggle("is-active", isActive);
      el.setAttribute("aria-selected", String(isActive));
    });

    setStory(key);
  });
});

const tourButton = document.querySelector("#tour-button");

tourButton?.addEventListener("click", () => {
  const hero = document.querySelector(".hero-media");
  hero?.classList.add("pulse");
  setTimeout(() => hero?.classList.remove("pulse"), 1200);
});
