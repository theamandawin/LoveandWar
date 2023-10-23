const ChessBoard = [
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
];

const ChessPiece = {
    WHITE_KING: '♔',
    WHITE_QUEEN: '♕',
    WHITE_ROOK: '♖',
    WHITE_BISHOP: '♗',
    WHITE_KNIGHT: '♘',
    WHITE_PAWN: '♙',
    BLACK_KING: '♚',
    BLACK_QUEEN: '♛',
    BLACK_ROOK: '♜',
    BLACK_BISHOP: '♝',
    BLACK_KNIGHT: '♞',
    BLACK_PAWN: '♟',
};

const startGame = function(){
    console.log("Player01 and Player02 have entered the game");
}

function makeMove(board, from, to) {
    }

const game = [
        { piece: ChessPiece.WHITE_PAWN, from: 'e2', to: 'e4' },
        { piece: ChessPiece.BLACK_PAWN, from: 'e7', to: 'e5' },

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},

        { piece: ChessPiece.WHITE_PAWN, from: '', to: ''},
        { piece: ChessPiece.BLACK_PAWN, from: '', to: ''},       
];

for (const move of game) {
    makeMove(ChessBoard, move.from, move.to);

}

for (let row = 0; row < ChessBoard.length; row++) {
    for (let col = 0; col < ChessBoard[row].length; col++) {
      const square = ChessBoard[row][col];
      
      //console.log(`Square ${square}: ${}`);
    }
}