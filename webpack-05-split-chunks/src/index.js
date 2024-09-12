import "./index.css";
async function getComponent() {
  return import("lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");
      element.innerHTML = _.join(["Hello", "webpack"], " ");
      element.classList.add("hello");
      return element;
    })
    .catch((err) => "An error occurred while loading the component");
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
