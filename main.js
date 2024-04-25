import { masodfokuEgyenletMegoldasaTeszt } from "./tesz.js";

console.log(masodfokuEgyenletMegoldasa(1, 2, 1));

// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

export function masodfokuEgyenletMegoldasa(a, b, c) {
  const eredmeny = {};
  let X1;
  let X2;
  if (a === 0) {
    X1 = "a változo nem lehet 0!";
    X2 = "a változo nem lehet 0!";
    eredmeny.X1 = X1;
    eredmeny.X2 = X2;
    return eredmeny;
  }
  if (b * b - 4 * a * c < 0) {
    X1 = "Nincs megoldás!";
    X2 = "Nincs megoldás!";
    eredmeny.X1 = X1;
    eredmeny.X2 = X2;
    return eredmeny;
  }
  let x1 = Math.floor(-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let x2 = Math.floor(-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

  X1 = x1;
  X2 = x2;
  eredmeny.X1 = X1;
  eredmeny.X2 = X2;
  return eredmeny;
}
masodfokuEgyenletMegoldasaTeszt();
