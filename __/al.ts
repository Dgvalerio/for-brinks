// matrizes
type Matriz = number[][];

interface IMatriz {
  soma: (X: Matriz, Y: Matriz) => Matriz;
  produtoPorEscalar: (X: Matriz, a: number) => Matriz;
  produto: (X: Matriz, Y: Matriz) => Matriz;
  transposta?: (X: Matriz) => Matriz;
  eIgual?: (X: Matriz, Y: Matriz) => boolean;
}

const matriz: IMatriz = {
  soma: (X: Matriz, Y: Matriz): Matriz =>
    X.map((linha, i) => linha.map((coluna, j) => coluna + Y[i][j])),
  produtoPorEscalar: (X: Matriz, a: number): Matriz =>
    X.map((linha) => linha.map((coluna) => coluna * a)),
  produto: (X: Matriz, Y: Matriz): Matriz => {
    if (X[0].length !== Y.length) {
      console.log('Tamanho inválido');

      return [];
    }

    return [...new Array(X.length)].map((_, i) =>
      [...new Array(Y[0].length)].map((_, j) =>
        X[i].reduce((aux, val, k) => aux + val * Y[k][j], 0)
      )
    );
  },
};

const mesmaOrdem = (X: Matriz, Y: Matriz): boolean =>
  X.length === Y.length && X[0].length === Y[0].length;

const A: Matriz = [
  [10, 8],
  [6, 4],
];

const B: Matriz = [
  [5, 2],
  [8, 5],
];

console.log(matriz.soma(A, B));
console.log(mesmaOrdem(A, B));

console.log(
  matriz.produtoPorEscalar(
    [
      [2, 5],
      [7, 1],
      [3, -2],
    ],
    4
  )
);

console.log(matriz.produto(A, [[12000], [20000]]));

console.log(
  matriz.produto(
    [
      [2, 5],
      [1, 7],
    ],
    [
      [-1, 3],
      [1, 0],
    ]
  )
);

console.log(
  matriz.produto(
    [
      [2, 3, 5],
      [-1, 4, 1],
    ],
    [
      [10, 2],
      [8, -5],
      [4, 6],
    ]
  )
);

matriz.transposta = (X: Matriz): Matriz =>
  [...Array(X[0].length)].map((_, i) =>
    [...Array(X.length)].map((_, j) => X[j][i])
  );

console.log(
  'Transposta',
  matriz.transposta([
    [1, 2],
    [5, 6],
    [7, -1],
  ])
);

const lista1 = () => {
  const questao1 = () => {
    const a = [
      [2, -1],
      [1, 1],
      [3, 4],
    ];
    const b = [[5], [-2]];
    const c = [
      [1, -1, 0],
      [5, 2, 3],
    ];
    const CA = matriz.produto(c, a);
    const AB = matriz.produto(a, b);

    return { CA, AB };
  };

  const questao2 =
    'Prove que se a Matriz A tem ordem 1 x n e AA^t = [a], então a >= 0';

  const questaoExtra =
    'Prove que a matriz identidade I_(nxn) é a única matriz tal que IA = AI = A, para qualquer matriz A_(nxn)';

  console.log('CA: ', questao1().CA);
  console.log('AB: ', questao1().AB);
  console.log('2: ', questao2);
  console.log('extra: ', questaoExtra);
};

const lista2 = () => {
  const questao1 = () => {
    const s = [
      [1, 2],
      [0, 1],
    ];
    const b1 = [
      [1, 1],
      [0, 1],
    ];
    const b2 = [
      [-1, -1],
      [0, -1],
    ];
    const B1 = matriz.produto(b1, b1);
    const B2 = matriz.produto(b2, b2);

    return { s, B1, B2 };
  };
};

// const x = 7;
// const y = 2;
// const z = 1;
//
// console.log({
//   1: x + y + z === 10,
//   2: 2 * x + y + 4 * z === 20,
//   3: x - y + z === 6,
// });

// const x = 3;
// const y = -3;
// const z = 1;
//
// console.log({
//   1: 2 * x - 2 * y + z === 13,
//   2: x + y - z === -1,
//   3: x - y - 2 * z === 4,
// });

const r = matriz.produto(
  [
    [7, 3, 5],
    [0, 0 - 1 / 4, 1 / 4],
    [1, 1 / 2, 1 / 2],
  ],
  [
    [-1, 4, 8],
    [1, -6, -7],
    [1, -2, -7],
  ]
);

matriz.eIgual = (X, Y): boolean => JSON.stringify(X) === JSON.stringify(Y);

console.log(
  'r=',
  r,
  matriz.eIgual(r, [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
