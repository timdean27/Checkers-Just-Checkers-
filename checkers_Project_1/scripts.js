const body = document.querySelector("body")
const chessBoardContainer = document.querySelector("#chessBoardContainer")

let allSqauresArry =[]
let darkSqauresArry =[]
let lightSqauresArry =[]
let allPiecesArray =[]
let nullPieceArray =[]
let PotentialyUseablePieceArray =[]

for(let i =0 ; i <= 64-1 ; i ++){
    let makeSquare = document.createElement('div')
        makeSquare.classList.add('square')
        makeSquare.setAttribute("id",`SQ${i}`)
        makeSquare.innerText= `${i}`
        allSqauresArry.push(i)
        chessBoardContainer.appendChild(makeSquare)
}
let allSquares = document.querySelectorAll('.square')

let a = 0
for(let i =0 ; i <= 7 ; i ++){
    
    for(let j =0 ; j <= 7 ; j ++){
        
        if(j % 2 != 0 && i % 2 === 0){
            darkSqauresArry.push(a)
            allSquares[a].classList.add(`darkSQaure#${a}`)
            allSquares[a].classList.add('darkSQaures')
            //console.log(a)
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            darkSqauresArry.push(a)
            allSquares[a].classList.add(`darkSQaure#${a}`)
            allSquares[a].classList.add('darkSQaures')
            //console.log(a)
        }
        else{
            lightSqauresArry.push(a)
            allSquares[a].classList.add(`lightSQaure#${a}`)
            allSquares[a].classList.add('lightSQaures')
            //console.log(a)
        }
        a++
    }
}

//adding pieces to squares
//adding pieces to squares
//adding pieces to squares


for(let i =0 ; i <= 64-1 ; i ++){
    let makePiece = document.createElement('div')
        makePiece.classList.add('pieces')
        makePiece.setAttribute("id",`${i}`)
        makePiece.innerText= `${i}`
        
        allSquares[i].appendChild(makePiece)
}
let allPieces = document.querySelectorAll('.pieces')

let b = -1
for(let i =0 ; i <= 7 ; i ++){
    
    for(let j =0 ; j <= 7 ; j ++){
        b = b+1
        if(j % 2 != 0 && i % 2 === 0){
            allPiecesArray.push(b)
            PotentialyUseablePieceArray.push(b)
            //allPieces[b].classList.add(`PotentialyUseablePiece#${b}`)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            allPiecesArray.push(b)
            PotentialyUseablePieceArray.push(b)
            //allPieces[b].classList.add(`PotentialyUseablePiece#${b}`)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else{
            allPiecesArray.push('nullPiece')
            nullPieceArray.push(b)
            //allPieces[b].classList.add(`nullPiece#${b}`)
            allPieces[b].classList.add('nullPiece') 
        }
        
    }
}

console.log(allPiecesArray)

//setting up starting positions
//indentifying all activePieces

        //Print out all PotentialyUseablePieces
// let allPotentialyUseablePieces = document.querySelectorAll(`.PotentialyUseablePieces`)
// allPotentialyUseablePieces.forEach(PotentialyUseablePiece=>{console.log("list of all useable pieeces",PotentialyUseablePiece)})

for(i =0; i <= allPieces.length-1 ; i ++){
    

    if(i== 1||i== 3||i== 5|| i== 7 || i== 8||i==10||i==12|| i==14 ||i== 17||i==19||i==21|| i==23){
        //allPieces[i].classList.add("pieceON")
        allPieces[i].classList.add("redPiece")
    }
    else if(i== 40||i== 42||i== 44|| i== 46 || i== 49||i==51||i==53|| i==55 ||i== 56||i==58||i==60|| i==62){
        //allPieces[i].classList.add("pieceON")
        allPieces[i].classList.add("bluePiece")
        }
        
    else{
        //allPieces[i].classList.add("pieceOFF")
        allPieces[i].classList.add("hidden")
    }
}
let allnullPieces = document.querySelectorAll(`.nullPiece`)
allnullPieces.forEach(nullPiece=>{
    nullPiece.classList.remove("hidden")
    nullPiece.classList.remove("pieceOFF")
})

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//Add addEventListener depending on turn
let bluePieces = document.querySelectorAll(".bluePiece")
let redPieces = document.querySelectorAll(".redPiece")
let turn = 0;
console.log("turn check 1:",turn)
 
function addClickeventToPieces(){
    if(turn === 0){
        bluePieces.forEach(bluePiece=>{
        bluePiece.addEventListener("click", resestWithRemainingPeices)
        //console.log(bluePiece)
        
        
    })
    console.log("Event Listener was added for Blue:")
    console.log("turn check 2:",turn)
    }

    else{
        redPieces.forEach(redPiece=>{
        redPiece.addEventListener("click", resestWithRemainingPeices)
        //console.log(redPiece)
        
        
        })
        console.log("Event Listener was added for Red:")
        console.log("turn check 3:",turn)
    }
}

////////////////////
// change the players turn function
//this will be called at the end of a move and activatePieces for the next player
let changeTurnButtonTest = document.querySelector(".ChangeTurn")
changeTurnButtonTest.addEventListener("click", changeTurnButtonTestFunc)

function changeTurnButtonTestFunc(){
    changeWhosTurn()
}
function changeWhosTurn(){
    if(turn == 0){
        turn = 1;
    }
    else{
        turn = 0;
    }
    addClickeventToPieces()
}
addClickeventToPieces()



// porbelm in prior code was when a piece was removed it remaind inside the forEach add event listener even when bluepice class was removed
// function to remove event listener
// let TestRemoveEventButtonTest = document.querySelector(".TestRemoveEvent")
// TestRemoveEventButtonTest.addEventListener("click", TestRemoveEventButtonTestFunc)

// function TestRemoveEventButtonTestFunc(){removeEventListener()}

function removeEventListenerWhenNotTurn(){
    if(turn === 0){
            bluePieces.forEach(bluePiece=>{
            bluePiece.removeEventListener("click", resestWithRemainingPeices)
            console.log(bluePiece)
            
        })
        console.log("Event Listener was removed for Blue")
    }
    else{
            redPieces.forEach(redPiece=>{
            redPiece.removeEventListener("click", resestWithRemainingPeices)
            console.log(redPiece)
            
            })
        console.log("Event Listener was removed for Red:",)
    }

}

function resestWithRemainingPeices(){
    pieceYouWantToMove(event)
}


//identify selceted piece and give class active 
function pieceYouWantToMove(event){
    activatedPiece = event.target.id
    allPieces[activatedPiece].classList.add("activatedPiece")
    console.log(`Activated Piece ID`,activatedPiece)
    console.log(`Activated Piece`,allPieces[activatedPiece])
    //console.log(console.log(`Activated Piece ID+9`,parseInt(activatedPiece)+9))
    console.log(console.log(`Activated Piece ID-7`,activatedPiece-7))
    removeEventListenerWhenNotTurn()
    //changeWhosTurn() // this should be added once piece is selected to move to 
    checkForOpenSpotsNoJumps()
}

//lets try this again...
//check avaliable spaces...no jumps..left front right front
//for blue forward right is id-7 // red forward right is id +9
//for blue forward left  id-9 // red forward right is id +7
// piece ID we want to move is activatedPiece with activatedPiece class
let rightForwardOpenPieceUP
let leftForwardOpenPieceUp
let rightForwardOpenPieceDown
let leftForwardOpenPieceDown
let clickWhereWeWantToMove
let spotWeWantToMoveTO
// blue piece wants to move foarwad and to the right this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the right will always be -7 away from the slected when blue is moveing forward 
function checkForOpenSpotsNoJumps(){
    if(allPieces[activatedPiece-7].classList.contains('hidden'))
    {
        allPieces[activatedPiece-7].classList.add("PieceYouCanMoveTo")
        rightForwardOpenPieceUP = allPieces[activatedPiece-7].id
        console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceUP)
        console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceUP])
        //return true
    }
// blue piece wants to move foarwad and to the left this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the left will always be -7 away from the slected when bblue is moveing forward 
    if(allPieces[activatedPiece-9].classList.contains('hidden'))
    {
        allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
        leftForwardOpenPieceUp = allPieces[activatedPiece-9].id
        console.log(`The piece to the Forward left is open`,leftForwardOpenPieceUp)
        console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
        //return true
    }
// red piece wants to move foarwad and to the right this is the function to test if the piece is currently hidden
//the piece dirrectly to the right will always be +7 away from the slected when bblue is moveing forward 
    if(allPieces[parseInt(activatedPiece)+7].classList.contains('hidden'))
    {
        allPieces[parseInt(activatedPiece)+7].classList.add("PieceYouCanMoveTo")
        rightForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+7].id
        console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceDown)
        console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceDown])
        //return true
    }
// red piece wants to move foarwad and to the left this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the left will always be +9 away from the slected when bblue is moveing forward 
    if(allPieces[parseInt(activatedPiece)+9].classList.contains('hidden'))
    {
        allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
        leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
        console.log(`The piece Down and left is open`,leftForwardOpenPieceDown)
        console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
        //return true
    }

    clickWhereWeWantToMove = document.querySelectorAll(".PieceYouCanMoveTo")
        clickWhereWeWantToMove.forEach(clickWeWantToMove=>{
            clickWeWantToMove.addEventListener("click", movePiece)
        })
}


//function to clear and reset classes after a piece is moved
function resestAfterPieceIsMoved(){
    if(turn == 0 ){
        allPieces[spotWeWantToMoveTO].classList.add("bluePiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        }
    else if(turn == 1 ){
        allPieces[spotWeWantToMoveTO].classList.add("redPiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        }
    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
        whereWeWantToMove.removeEventListener("click", movePiece)
        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
    })
    allPieces[activatedPiece].classList.remove("activatedPiece")
    allPieces[activatedPiece].classList.add("hidden")
    changeWhosTurn()  
}


//Write function to move to identified pieces // no jumps yet
function movePiece(event){
    
    spotWeWantToMoveTO = event.target.id
    console.log(`The spot you want to move to is ${spotWeWantToMoveTO}`,allPieces[spotWeWantToMoveTO])
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardOpenPieceUP && allPieces[rightForwardOpenPieceUP].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardOpenPieceUP}`, allPieces[rightForwardOpenPieceUP])
        resestAfterPieceIsMoved()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardOpenPieceUp  && allPieces[leftForwardOpenPieceUp].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardOpenPieceUp }`, allPieces[leftForwardOpenPieceUp])
        resestAfterPieceIsMoved()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardOpenPieceDown && allPieces[rightForwardOpenPieceDown].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardOpenPieceDown}`, allPieces[rightForwardOpenPieceDown])
        resestAfterPieceIsMoved()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardOpenPieceDown && allPieces[leftForwardOpenPieceDown].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardOpenPieceDown}`, allPieces[leftForwardOpenPieceDown])
        resestAfterPieceIsMoved()
    }
    
}

