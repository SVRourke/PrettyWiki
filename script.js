// remove all scripts and styles and stylesheet links
const links = document.querySelectorAll("link");
const styles = document.querySelectorAll("style");
const scripts = document.querySelectorAll("script");

console.log("LINKS", links);
console.log("Styles", styles);
console.log("scripts", scripts);

for (const style of styles) {
  style.disabled = true;
}
for (const script of scripts) {
  script.remove();
}
for (const link of links) {
  const rel = link.attributes.rel.nodeValue;
  if (rel === "stylesheet") {
    link.disabled = true;
    // link.remove();
  }
}

const sideBar = document.querySelector("div#mw-panel");
const nav = document.querySelector("nav#p-personal");
sideBar.remove();
nav.remove();

console.log("LINKS", links);
console.log("Styles", styles);
console.log("scripts", scripts);
