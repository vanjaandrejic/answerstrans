const obj = {
  a: [
    {
      b: {
        v: [
          {
            g: [1, 2, 3],
          },
          {
            d: true,
            find: "Not",
          },
        ],
      },
    },
    {
      c: ["one", "two", "three"],
      d: [
        {
          a: "",
        },
        {
          find: "that",
        },
      ],
    },
  ],
  find: "hard",
};


"use strict";
const words = [];
function findWord(obj) {
    if (Object.keys(obj).includes('find')) {
        words.push(obj.find);
    }
    if (typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
            findWord(obj[key]);
        });
    }
    else if (Array.isArray(obj)) {
        obj.forEach(o => {
            findWord(o);
        });
    }
}
findWord(obj);
console.log(words);

