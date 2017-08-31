//string literal types

let autoComplete: "on" | "off" = "on";
autoComplete = "off";
// string literal types are case sensitive
// the following code will throw an error
// [ts] Type 'ON' is not assignable to type 'autoComplete'
autoComplete = "ON";

// ============================================================
// numeric literal types

type NumberBase = 2 | 8 | 10 | 16;
let base: NumberBase;
base = 2;
// [ts] Type '3' is not assignable to type 'NumberBase'
base = 3;

// ============================================================
// boolean literal types

let autoFocus: true = true;
// [ts] Type 'false' is not assignable to type 'true'
autoFocus = false;

// ============================================================
// enum literal type

enum Protocols {
    HTTP,
    HTTPS,
    FTP
}

type HyperTextProtocol = Protocols.HTTP | Protocols.HTTPS;

let protocol: HyperTextProtocol;
protocol = Protocols.HTTP;
protocol = Protocols.HTTPS;
// [ts] Type 'Protocols.FTP' is not assignable to type 'HyperTextProtocol'
protocol = Protocols.FTP;
