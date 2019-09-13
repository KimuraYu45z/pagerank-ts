import { Matrix } from "./matrix";
import { Pagerank } from ".";

describe("Pagerank", () => {
  it("getStochasticMatrix, transitionScore", () => {
    const linkMatrix: Matrix = {
      0: {
        1: 0.5,
        2: 0.25,
        3: 1
      },
      1: {
        0: 0.5,
        2: 0.25,
        4: 1
      },
      2: {
        1: 0.5,
        3: 0.25,
        4: 1
      },
      3: {
        1: 0.5,
        2: 0.25,
        4: 1
      },
      4: {
        0: 0.5,
        2: 0.25,
        3: 1
      }
    };
    const stochasticMatrix = Pagerank.getStochasticMatrix(linkMatrix);
    console.log(stochasticMatrix);

    const currentScore = {
      0: 0.1,
      1: 0.2,
      2: 0.3,
      4: 0.35,
      5: 0.05
    };

    const score = Pagerank.transitionScore(stochasticMatrix, currentScore);
    console.log(currentScore);
  });
});
