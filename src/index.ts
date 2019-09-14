import { Matrix } from "./matrix";
import { Vector } from "./vector";

export module Pagerank {
  export function getStochasticMatrix(linkMatrix: Matrix): Matrix {
    const stochasticMatrix = new Matrix();

    for (const src in linkMatrix) {
      let sum = 0;
      for (const dst in linkMatrix[src]) {
        sum += linkMatrix[src][dst];
      }

      stochasticMatrix[src] = new Vector;
      for (const dst in linkMatrix[src]) {
        stochasticMatrix[src][dst] = linkMatrix[src][dst] / sum;
      }
    }

    return stochasticMatrix;
  }

  export function transitionScore(
    currentScoreVector: Vector,
    stochasticMatrix: Matrix
  ): Vector {
    const score = new Vector();

    for (const src in stochasticMatrix) {
      for (const dst in stochasticMatrix) {
        if (score[dst] === undefined) {
          score[dst] = 0;
        }
        const currentScore = currentScoreVector[src] || 0;

        score[dst] += currentScore * stochasticMatrix[src][dst];
      }
    }

    return score;
  }
}
