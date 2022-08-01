/**
 * Get windows size
 *
 * @param {number} width
 *
 * @param {number} height
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}


/**
 * Resize window
 *
 * @param {number} w
 *
 * @param {number} h
 */
Size.prototype.resize = function(w, h) {
  this.width = w;
  this.height = h;
};


/**
 * Get windows position
 *
 * @param {number} x
 *
 * @param {number} y
 */
export function Position(x = 0, y = 0) {
  this.x =x;
  this.y = y;
}

/**
 * Move windows position
 *
 * @param {number} newX
 *
 * @param {number} newY
 */
Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
};


/**
 * Program Window Class
 *
 */
export class ProgramWindow {
/**
 *  ProgramWindow constructor
 *
 * @param {func} screenSize
 *
 * @param {func} size
 *
 * @param {func} position
 */
  constructor(screenSize, size, position) {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
 *  ProgramWindow resize function
 *
 * @param {func} newSize
 *
 */
  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));
    this.size.resize(newWidth, newHeight);
  }

  /**
 *  ProgramWindow move function
 *
 * @param {func} newPosition
 *
 */
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));
    this.position.move(newX, newY);
  }
}

/**
 *  changeWindow function
 *
 * @param {func} programWindow
 *
 * @return {func} programWindow updated
 */
export function changeWindow(programWindow) {
  programWindow.move(new Position());
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
