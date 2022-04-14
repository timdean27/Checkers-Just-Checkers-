# Checkers

**Live Link:** [Click to Play](https://timdean27.github.io/GA-Checkers-Project-/)

## Checkers
## Playing The Game:
Checkers is a fairly simple game which has brought joy to millions over its long history. 
Sometimes seen as a precursor to learning chess, the most popular version of checkers 
is played on the same eight-by-eight square board with alternating light and dark colors. 
[there are other configurations using different numbers of squares and pieces]

The game assigns 12 uniform pieces to each of two players. 
Each player’s pieces are either red or blue. The pieces are called “Men” initially, 
but can be elevated to “Kings”. Men are placed only on the darker squares of the first three rows on opposite sides of the board. 

#### How To Play
- Player 1 will select a checker color [blue or red].

- Players will alternate turns.

- Players may move to legal squares which are highlighed by purple circles. 

- Play continues until the opponent's pieces are eliminated!


#### Winning The Game:
The goal of the game is to either eliminate all of the opponent’s pieces.

### Code Styles
- JavaScript

- HTML

- CSS


### MVP Goals
- Players alternate moves, and moves must be highlighted as legal

- I would like to display which player has a turn.

- Men can only move to unoccupied, dark colored squares in the direction of the opponent.

- If an eligible square is occupied by an opponent’s piece, and the next square in the diagonal is unoccupied, the player can “jump” the opponent’s piece and take the unoccupied square, removing the opponent’s piece immediately.

- In the same turn, the player may continue to jump the opponent’s pieces as long as jumping conditions are present [the diagonal immediately beside the Man is occupied by an opponent’s Man, and the next square in the diagonal is unoccupied].

- Once a Man reaches the first row of the opponent’s side of the board, he is elevated to “King” and the player’s turn ends. This elevated position is confirmed by placing a crown on the piece.

- Kings follow the same movement and jumping rules as men, with the important distinction that they can move in either direction along diagonals.


### Future Additions:
- Losing situation where player is left with no moves (trapped).

- Make online Multiplayer accessible.

- Make player vs Computer mode.

- Make verson enforce jumps (not optional).
