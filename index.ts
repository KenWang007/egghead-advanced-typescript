const person = {
  fullName: "Marius Schulz",
  blog: "https://blog.mariusschulz.com",
  twitter: "@mariusschulz"
};

// rest element must be last
const { fullName, ...socialMedia } = person;

console.log(fullName);
console.log(socialMedia.twitter);

// ============================================================

const defaultStyles = {
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal"
};

const userStyles = {
  color: "#111111",
  fontWeight: 700
};

const styles = {
  ...defaultStyles,
  ...userStyles
};

// ============================================================

const todo = {
  text: "Water the flowers",
  completed: false,
  tags: ["garden"]
};

const shallowCopy = { ...todo };
shallowCopy.text = "Mow the lawn";
shallowCopy.tags.push("weekend");

console.log(shallowCopy.text);
console.log(todo.text);
