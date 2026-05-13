/** Copy for the coco peat grow bag planting guide — edit here to update the public page. */

export const growBagGuideMeta = {
  title: "Grow bag planting guide (coco peat)",
  description:
    "How to use coco peat grow bags: suitable crops, preparation, drainage, planting, feeding, watering, and benefits for vegetables, herbs, strawberries, and more.",
};

export const suitableCrops = [
  {
    title: "Vegetables",
    body:
      "Tomatoes (cherry or regular), chili peppers, bell peppers, cucumbers (with support), and eggplant perform well due to the moisture retention and drainage properties of coco peat.",
  },
  {
    title: "Leafy greens",
    body:
      "Lettuce, spinach, kale, and arugula are fast-growing and ideal for continuous harvesting. Multiple plants can be grown per slot.",
  },
  {
    title: "Fruits",
    body: "Strawberries are highly suitable, with one plant per opening.",
  },
  {
    title: "Herbs",
    body: "Basil, mint, coriander, and parsley are ideal for small kitchen garden setups.",
  },
  {
    title: "Flowers",
    body: "Petunias, marigolds, and other small flowering plants can be used for decorative purposes.",
  },
] as const;

export const howToUseSteps = [
  {
    title: "Preparation",
    points: [
      "Hydrate the coco peat by gradually adding water into each opening.",
      "Allow 10–15 minutes for expansion until evenly moist.",
      "Ensure the medium is moist but not waterlogged.",
    ],
  },
  {
    title: "Drainage",
    points: [
      "Create 2–4 small holes at the bottom of the bag to allow excess water to drain.",
      "Proper drainage prevents root rot.",
    ],
  },
  {
    title: "Planting",
    points: [
      "Use one plant per opening.",
      "Make a small hole in the coco peat, place seeds or seedlings, and cover lightly.",
    ],
  },
  {
    title: "Nutrient management",
    points: [
      "Coco peat does not contain nutrients.",
      "Apply liquid fertilizer weekly or mix compost into each planting hole.",
    ],
  },
  {
    title: "Watering",
    points: [
      "Maintain consistent moisture.",
      "Water daily or as required depending on weather conditions.",
      "Avoid overwatering.",
    ],
  },
  {
    title: "Placement",
    points: [
      "Position the grow bag on a flat or slightly elevated surface.",
      "Ensure 4–6 hours of sunlight daily.",
    ],
  },
] as const;

export const benefitsOfCocoPeat = [
  "Clean and easy to handle with no mud or weeds",
  "High water retention with good drainage",
  "Promotes strong root growth due to better aeration",
  "Reduced risk of pests and diseases",
  "Lightweight and suitable for small spaces such as rooftops or balconies",
  "Consistent and uniform growing medium",
] as const;

export const importantConsideration =
  "Coco peat contains no natural nutrients. Regular feeding through fertilizers or organic compost is essential for healthy plant growth.";
