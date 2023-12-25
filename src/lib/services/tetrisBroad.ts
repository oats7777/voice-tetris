class TetrisBoard {
  canvas;
  ctx;
  static readonly ROWS = 20;
  static readonly COLS = 10;
  static readonly CELL_SIZE = 30;
  static readonly BORDER_SIZE = 5;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.adjustCanvasSize();
  }

  private adjustCanvasSize() {
    const dpr = window.devicePixelRatio || 1;

    const totalWidth = (TetrisBoard.CELL_SIZE + TetrisBoard.BORDER_SIZE) * TetrisBoard.COLS;
    const totalHeight = (TetrisBoard.CELL_SIZE + TetrisBoard.BORDER_SIZE) * TetrisBoard.ROWS;

    // 물리적 캔버스 크기 설정
    this.canvas.width = totalWidth * dpr;
    this.canvas.height = totalHeight * dpr;

    // CSS를 통해 캔버스의 표시 크기 설정
    this.canvas.style.width = totalWidth + 'px';
    this.canvas.style.height = totalHeight + 'px';

    // 캔버스 컨텍스트 스케일 조정
    this.ctx.scale(dpr, dpr);
  }

  drawBoard() {
    for (let row = 0; row < TetrisBoard.ROWS; row++) {
      for (let col = 0; col < TetrisBoard.COLS; col++) {
        this.drawCell(row, col);
      }
    }
  }

  private drawCell(row: number, col: number) {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(
      col * TetrisBoard.BORDER_SIZE + col * TetrisBoard.CELL_SIZE,
      row * TetrisBoard.BORDER_SIZE + row * TetrisBoard.CELL_SIZE,
      TetrisBoard.CELL_SIZE,
      TetrisBoard.CELL_SIZE
    );
  }
}

export default TetrisBoard;
