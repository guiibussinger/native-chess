import whitePawn from '../assets/white_pawn.png';
import blackPawn from '../assets/black_pawn.png';
import whiteKnight from '../assets/white_knight.png';
import blackKnight from '../assets/black_knight.png';
import whiteBishop from '../assets/white_bishop.png';
import blackBishop from '../assets/black_bishop.png';
import whiteHook from '../assets/white_hook.png';
import blackHook from '../assets/black_hook.png';
import whiteQueen from '../assets/white_queen.png';
import blackQueen from '../assets/black_queen.png';
import whiteKing from '../assets/white_king.png';
import blackKing from '../assets/black_king.png';

const images = {
  whitePawn,
  blackPawn,
  whiteKnight,
  blackKnight,
  whiteBishop,
  blackBishop,
  whiteHook,
  blackHook,
  whiteQueen,
  blackQueen,
  whiteKing,
  blackKing
};

export const initialPosition = {
  a2: 'whitePawn',
  b2: 'whitePawn',
  c2: 'whitePawn',
  d2: 'whitePawn',
  e2: 'whitePawn',
  f2: 'whitePawn',
  g2: 'whitePawn',
  h2: 'whitePawn',
  a7: 'blackPawn',
  b7: 'blackPawn',
  c7: 'blackPawn',
  d7: 'blackPawn',
  e7: 'blackPawn',
  f7: 'blackPawn',
  g7: 'blackPawn',
  h7: 'blackPawn',
  a1: 'whiteHook',
  h1: 'whiteHook',
  b1: 'whiteKnight',
  g1: 'whiteKnight',
  c1: 'whiteBishop',
  f1: 'whiteBishop',
  d1: 'whiteQueen',
  e1: 'whiteKing',
  a8: 'blackHook',
  h8: 'blackHook',
  b8: 'blackKnight',
  g8: 'blackKnight',
  c8: 'blackBishop',
  f8: 'blackBishop',
  d8: 'blackQueen',
  e8: 'blackKing'
};

export const getSquareImage = name => images[name];
