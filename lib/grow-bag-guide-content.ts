/** Copy for the coco peat grow bag guide — edit here to update the public page. */

export const growBagGuideMeta = {
  title: "How to use a coco peat grow bag",
  description:
    "Step-by-step guide for Dash Agri Coco peat grow bags: hydration, drainage, recommended plants, planting, nutrients, watering, sunlight, and pro tips.",
};

export const guideIntro =
  "Follow these steps for our pre-filled coco peat grow bag—plain white poly, Dash Agri Coco substrate, and an elongated format suited to patios, balconies, and small greenhouses.";

export const howToUseTitle = "How to Use a Coco Peat Grow Bag";

export const howToUseSteps = [
  {
    title: "Step 1 – Hydrate the Coco Peat",
    points: [
      "Add water to the coco peat grow bag before planting.",
      "Allow the coco peat to absorb water fully.",
    ],
  },
  {
    title: "Step 2 – Make Drainage Holes",
    points: [
      "Create several small holes at the bottom or sides for water drainage.",
    ],
  },
] as const;

export const recommendedPlantsTitle = "Recommended Plants";

export const recommendedPlants = [
  { level: "Easy", plants: ["Coriander", "Mint", "Basil", "Lettuce"] },
  { level: "Medium", plants: ["Strawberries"] },
  { level: "Advanced", plants: ["Chili", "Tomatoes"] },
] as const;

export const plantingInstructions = {
  title: "Planting Instructions",
  points: [
    "Make a small hole.",
    "Place seeds or seedlings.",
    "Cover roots lightly.",
    "Recommended: 1 plant per hole.",
  ],
} as const;

export const nutrientStep = {
  title: "Step 4 – Add Nutrients",
  points: ["Add liquid fertilizer or nutrients after planting."],
} as const;

export const wateringGuide = {
  title: "Watering Guide",
  points: ["Keep moist.", "Do NOT flood with water."],
} as const;

export const sunlightRequirement = {
  title: "Sunlight Requirement",
  value: "4–6 hours sunlight daily",
} as const;

export const proTips = [
  "Support tall plants with sticks.",
  "Raise bag for better drainage.",
  "Rotate for even sunlight.",
  "Great for balconies and patios.",
] as const;

export const closingMessage = {
  heading: "Happy Gardening",
  quote: "Grow Fresh, Eat Healthy!",
} as const;
