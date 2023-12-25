import TetrisBlock from './tetrisBlock';

class LBlock extends TetrisBlock {
  constructor(initialPosition: { x: number; y: number }) {
    super(initialPosition, [
      [1, 0],
      [1, 0],
      [1, 1]
    ]);
  }
}

export default LBlock;
