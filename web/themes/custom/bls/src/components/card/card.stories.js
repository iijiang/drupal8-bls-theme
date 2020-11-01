export default {
  title: "Cards"
};

import card from "./card.twig";
import drupalAttribute from "drupal-attribute";
import "./card.scss";

export const card_default = () =>
  card({
    attributes: new drupalAttribute(),
    body: "I am card body",
  });
