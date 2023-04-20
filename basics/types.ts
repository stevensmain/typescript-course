// Principal types
const myName: string = "Juan Doe";
const yearsOld: number = 32;
const single: boolean = true;
const hobbies: string[] = ["Programming", "Video games", "Movies"];
const description: object = {
  eyes: "brown",
  height: "190cm",
  weight: "82kg",
};
function saludar(): void {
  console.log("Hello");
}

// Type unknown can be of any type
let response: any = "";
response = 12;
response = true;

// Type unknown can be of any type
let response2: unknown;
response2 = true;

const response3: null = null;
const response4: undefined = undefined;

// Our types
type ApiResponse = string | undefined;

// Combine types
let response5: number | undefined;
response5?.toString();

let response6: ApiResponse;

// Type assertions
let message: any = "";
let messageLowerCase = (message as string).toUpperCase();
let messageUpperCase = <string>message.toUpperCase();

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.toggleAttribute("class");
