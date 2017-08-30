// flow analysis
function trimAndLower(text: string | null | undefined) {
  // (parameter) text: string | null | undefined
  // text;

  if (typeof text === "string") {
      // (parameter) text: string
      // text;

      return text.trim().toLowerCase();
  }
  // (parameter) text: null | undefined
  // text;

  console.log(text);
}

console.log(trimAndLower(" LearnTypeScript.io "));


let foo: number;

// [ts] Variable 'foo' is used before being assigned.
console.log(foo)




// definite assignment analysis
let bar: number | undefined;
let bar = 42;

// let bar: number
// this will allow autocompletion
bar

console.log(bar)

