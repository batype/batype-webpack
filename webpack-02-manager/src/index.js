import _ from "lodash";
import "./index.css";
import Batype from "./batype.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // 输出 `TOML Example`
console.log(toml.owner.name); // 输出 `Tom Preston-Werner`

console.log(yaml.title); // 输出 `YAML Example`
console.log(yaml.owner.name); // 输出 `Tom Preston-Werner`

console.log(json.title); // 输出 `JSON5 Example`
console.log(json.owner.name); // 输出 `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Batype;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
