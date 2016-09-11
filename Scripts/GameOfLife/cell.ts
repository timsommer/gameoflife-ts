/**
 * GoL.Cell contains the cell position
 * @author Tim Sommer
 * @namespace GoL
 * @class Cell
 */
namespace GoL {
  export class Cell {

    row: number;
    column: number;

    constructor(row: number, column: number) {

      this.row = row;
      this.column = column;
    }
  }
}