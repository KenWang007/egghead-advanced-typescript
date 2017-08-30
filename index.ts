enum ShirtSize {
  XS,
  S,
  M,
  L,
  XL
}

function assertNever(value: never): never {
  // throw Error(`Unexpected value '${value}'`)
  // Adjusted for plunker output
  console.log(Error(`Unexpected value '${value}'`));
}

function prettyPrint(size: ShirtSize) {
  switch (size) {
      case ShirtSize.S: console.log("small");
      case ShirtSize.M: return "medium";
      case ShirtSize.L: return "large";
      case ShirtSize.XL: return "extra large";
      // [ts] Argument of type 'ShirtSize.XS' is
      // not assignable to parameter of type 'never'.
      default: return assertNever(size);
  }
}

prettyPrint(ShirtSize.S)
prettyPrint(ShirtSize.XXL)
