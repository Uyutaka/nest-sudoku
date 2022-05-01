export type Element = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// TODO Use this
// export type Line = [Element, Element, Element, Element, Element, Element, Element, Element, Element];
// export type Board = [Line, Line, Line, Line, Line, Line, Line, Line, Line,];

export type Board = [
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
    Element, Element, Element, Element, Element, Element, Element, Element, Element,
];

export type SudokuResponse = {
    readonly question: Board,
    readonly answer: Board,
    readonly remainingQuestion: number,
}
