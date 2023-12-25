interface ITetrisBlock {
  position: { x: number; y: number };
  shape: number[][];
  rightRotate(): void;
  leftRotate(): void;
  move(deltaX: number, deltaY: number): void;
}

abstract class TetrisBlock implements ITetrisBlock {
  position: { x: number; y: number };
  shape: number[][];

  constructor(initialPosition: { x: number; y: number }, shape: number[][]) {
    this.position = initialPosition;
    this.shape = shape;
  }

  rightRotate() {
    const newShape: number[][] = [];
    const N = this.shape.length;
    const M = this.shape[0].length;

    for (let i = 0; i < M; i++) {
      newShape[i] = [];
      for (let j = 0; j < N; j++) {
        newShape[i][j] = this.shape[N - 1 - j][i];
      }
    }

    this.shape = newShape;
  }

  leftRotate() {
    const newShape: number[][] = [];
    const N = this.shape.length;
    const M = this.shape[0].length;

    for (let i = 0; i < M; i++) {
      newShape[i] = [];
      for (let j = 0; j < N; j++) {
        newShape[i][j] = this.shape[j][M - 1 - i];
      }
    }

    this.shape = newShape;
  }

  move(deltaX: number, deltaY: number) {
    this.position.x += deltaX;
    this.position.y += deltaY;
  }
}

export default TetrisBlock;
