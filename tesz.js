import { masodfokuEgyenletMegoldasa } from "./main.js";
export function masodfokuEgyenletMegoldasaTeszt() {
  const teszLISTA = [
    {
      a: 0,
      b: 2,
      c: 3,
      X1: "a változo nem lehet 0!",
      X2: "a változo nem lehet 0!",
    },
    { a: 1.2, b: 4, c: 5, X1: "Nincs megoldás!", X2: "Nincs megoldás!" },
    { a: 4, b: 6, c: 2, X1: -0.5, X2: -1 },
    { a: 1, b: 1, c: 1, X1: "Nincs megoldás!", X2: "Nincs megoldás!" },
    { a: 1, b: 1, c: 2, X1: "Nincs megoldás!", X2: "Nincs megoldás!" },
    { a: 1, b: 2, c: 1, X1: -1, X2: -1 },
    { a: 2, b: 1, c: 1, X1: "Nincs megoldás!", X2: "Nincs megoldás!" },
    { a: 2, b: 3, c: 2, X1: "Nincs megoldás!", X2: "Nincs megoldás!" },
    { a: 1, b: 1, c: -1, X1: 0.6, X2: -1.6 },
    { a: 1, b: -1, c: 1, X1: "Nincs megoldás!", X2: "Nincs megoldás!" },
    { a: -1, b: 1, c: 1, X1: -0.6, X2: 1.6 },
  ];
  teszLISTA.forEach((tesztEset, index) => {
    let eredmeny = masodfokuEgyenletMegoldasa(
      tesztEset.a,
      tesztEset.b,
      tesztEset.c
    );
    console.assert(
      tesztEset.X1 === eredmeny.X1 && tesztEset.X2 === eredmeny.X2,
      `%o`,
      `szamok: ${tesztEset.a} ${tesztEset.b} ${tesztEset.c} vart: ${tesztEset.X1} ${tesztEset.X2} kapott: ${eredmeny.X1} ${eredmeny.X2}`,
      `Híbás a ${index + 1}. tesztnél!`
    );
  });
}
