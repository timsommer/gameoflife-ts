/**
 * GoL.Cell contains the cell position
 * @author Tim Sommer
 * @namespace GoL
 * @class Cell
 */
var GoL;
(function (GoL) {
    var Cell = (function () {
        function Cell(row, column) {
            this.row = row;
            this.column = column;
        }
        return Cell;
    })();
    GoL.Cell = Cell;
})(GoL || (GoL = {}));
//# sourceMappingURL=cell.js.map