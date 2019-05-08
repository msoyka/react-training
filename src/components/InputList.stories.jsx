import React from "react";
import { storiesOf } from "@storybook/react";
import InputList from "./InputList";

const listItems = [
  { name: "firstname", value: "John" },
  { name: "lastname", value: "Wick" }
];

storiesOf("InputList", module).add("Default", () => (
  <InputList type="unordered" listItems={listItems} />
));
