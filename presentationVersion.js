const body = document.querySelector("body")
const chessBoardContainer = document.querySelector("#chessBoardContainer")

let allSqauresArry =[]
let darkSqauresArry =[]
let lightSqauresArry =[]
let allPiecesArray =[]
let nullPieceArray =[]
let PotentialyUseablePieceArray =[]

//making sqaures on board

for(let i =0 ; i <= 64-1 ; i ++){
    let makeSquare = document.createElement('div')
        makeSquare.classList.add('square')
        makeSquare.setAttribute("id",`SQ${i}`)
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
 
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            darkSqauresArry.push(a)
            allSquares[a].classList.add(`darkSQaure#${a}`)
            allSquares[a].classList.add('darkSQaures')
 
        }
        else{
            lightSqauresArry.push(a)
            allSquares[a].classList.add(`lightSQaure#${a}`)
            allSquares[a].classList.add('lightSQaures')

        }
        a++
    }
}

//adding pieces to squares

    let allnullPieces
    let makePiece
    let allPieces
    let makeTakenPiecered
    let makeTakenPieceblue
    let redTakenPiece
    let blueTakenPiece
function makeAllGamePices(){
for(let i =0 ; i <= 64-1 ; i ++){
    makePiece = document.createElement('div')
        makePiece.classList.add('pieces')
        makePiece.setAttribute("id",`${i}`)
        makePiece.innerText= `${i}`
        
        allSquares[i].appendChild(makePiece)
}
allPieces = document.querySelectorAll('.pieces')

let b = 0
for(let i =0 ; i <= 7 ; i ++){
    
    for(let j =0 ; j <= 7 ; j ++){
        
        if(j % 2 != 0 && i % 2 === 0){
            allPiecesArray.push(b)
            PotentialyUseablePieceArray.push(b)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            allPiecesArray.push(b)
            PotentialyUseablePieceArray.push(b)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else{
            allPiecesArray.push('nullPiece')
            nullPieceArray.push(b)
            allPieces[b].classList.add('nullPiece') 
        }
        b++
    }  
}


//setting up starting positions

for(i =0; i <= allPieces.length-1 ; i ++){
    

    if(i== 1||i== 3||i== 5|| i== 7 || i== 8||i==10||i==12|| i==14 ||i== 17||i==19||i==21|| i==23){
        //allPieces[i].classList.add("pieceON")
        allPieces[i].classList.add("redPiece")
    }
    else if(i== 40||i== 42||i== 44|| i== 46 || i== 49||i==51||i==53|| i==55 ||i== 56||i==58||i==60|| i==62){
        
        allPieces[i].classList.add("bluePiece")
        }
        
    else{ 
        allPieces[i].classList.add("hidden")
    }
}
allnullPieces = document.querySelectorAll(`.nullPiece`)
allnullPieces.forEach(nullPiece=>{
    nullPiece.classList.remove("hidden")
    
    
})
 

redPieceHolder = document.getElementById("RedPieceHolder")
for(i =0; i < 12 ; i ++){
    makeTakenPiecered = document.createElement('div')
    makeTakenPiecered.classList.add('redTakenPieceOff')
    makeTakenPiecered.setAttribute("id",`${i}`)
    redPieceHolder.appendChild(makeTakenPiecered)
}
bluePieceHolder= document.getElementById("BluePieceHolder")
for(i =0; i < 12 ; i ++){
    makeTakenPieceblue = document.createElement('div')
    makeTakenPieceblue.classList.add('blueTakenPieceOff')
    makeTakenPieceblue.setAttribute("id",`${i}`)
    bluePieceHolder.appendChild(makeTakenPieceblue)
}
redTakenPiece = document.querySelectorAll('.redTakenPieceOff')
blueTakenPiece = document.querySelectorAll('.blueTakenPieceOff')


}

makeAllGamePices()
TheWholegame()

////ResetGameFunction 
let restartGameBTN = document.getElementById("RestartGameBTN")

restartGameBTN.addEventListener("click", resestGame)
function resestGame(){
    console.log("Resest Game")
    allPieces.forEach(removePiece =>{
        removePiece.remove()
    })
    redTakenPiece.forEach(removeRedTakenPiece  =>{
        removeRedTakenPiece.remove()
    })
    blueTakenPiece.forEach(removeBlueTakenPiece  =>{
        removeBlueTakenPiece.remove()
    })
    document.getElementById("BluePieceCount").innerText = `Blue Piece Count: 12`
    document.getElementById("RedPieceCount").innerText = `Red Piece Count: 12`
    
    makeAllGamePices()
    TheWholegame()
 
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function TheWholegame(){
    //console.log(allPieces[1])
    //console.log(redTakenPiece[1])
//Add addEventListener depending on turn
let bluePieces
let redPieces
let blueKings
let redKings
let turn

document.getElementById("BlueStartGameBTN").addEventListener("click", startGameAsBlueFunc)
function startGameAsBlueFunc(){
    
    turn = 0
    turnTrackerHTML.innerText = "Blue Starts"
    turnTrackerHTML.style.color="blue"
    
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    blueKings = document.querySelectorAll(".redKing")
    redKings = document.querySelectorAll(".blueKing")
    
addClickeventToPieces()
}

document.getElementById("RedStartGameBTN").addEventListener("click", startGameAsRedFunc)
function startGameAsRedFunc(){
    
    turn = 1
    console.log("turn check 1:",turn)
    turnTrackerHTML.innerText = "Red Starts"
    turnTrackerHTML.style.color="red"
    
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    blueKings = document.querySelectorAll(".redKing")
    redKings = document.querySelectorAll(".blueKing")
    
addClickeventToPieces()
}


function addClickeventToPieces(){

    document.getElementById("RedStartGameBTN").removeEventListener("click", startGameAsRedFunc)
    document.getElementById("BlueStartGameBTN").removeEventListener("click", startGameAsBlueFunc)
    

    if(turn === 0){
            bluePieces.forEach(bluePiece=>{
                bluePiece.addEventListener("click", resetWithRemainingPeices)
                
            })
                blueKings.forEach(blueKing=>{
                    blueKing.addEventListener("click", resetWithRemainingPeices)
                    console.log(blueKing)          
                })
        console.log("Event Listener was added for Blue:")
    }
    
    else{
            redPieces.forEach(redPiece=>{
                redPiece.addEventListener("click", resetWithRemainingPeices)
                
            })
                redKings.forEach(redKing=>{
                    redKing.addEventListener("click", resetWithRemainingPeices)
                    console.log(redKing)
                })
        console.log("Event Listener was added for Red:")
    }

}


////////////////////
// change the players turn function
//this will be called at the end of a move and activatePieces for the next player
let turnTrackerHTML = document.getElementById("TurnTracker")
turnTrackerHTML.innerText = "Chose a Color"

function changeWhosTurn(){
    pieceWasMoved = false
    if(turn == 0){
        turnTrackerHTML.innerText = "Turn Tracker: Red"
        turnTrackerHTML.style.color="red"
        
        turn = 1;
    }
    else{
        turnTrackerHTML.innerText = "Turn Tracker: Blue"
        turnTrackerHTML.style.color = "blue"
        turn = 0;
    }
    addClickeventToPieces()
}


// function to remove event listener

function removeEventListenerWhenNotTurn(){
    if(turn === 0){
            bluePieces.forEach(bluePiece=>{
            bluePiece.removeEventListener("click", resetWithRemainingPeices)
             })
            
                    blueKings.forEach(blueKing=>{
                    blueKing.removeEventListener("click", resetWithRemainingPeices)
                    console.log(blueKing)
                    })
        
        console.log("Event Listener was removed for Blue")
    }
    else{
            redPieces.forEach(redPiece=>{
            redPiece.removeEventListener("click", resetWithRemainingPeices)
            
            })
                redKings.forEach(redKing=>{
                redKing.removeEventListener("click", resetWithRemainingPeices)
                console.log(redKing)
                
                })
        console.log("Event Listener was removed for Red:",)
    }

}

function resetWithRemainingPeices(){
    pieceYouWantToMove(event)
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    blueKings = document.querySelectorAll(".blueKing")
    redKings = document.querySelectorAll(".redKing")

}


//identify selceted piece and give class active 
function pieceYouWantToMove(event){
    activatedPiece = event.target.id
    allPieces[activatedPiece].classList.add("activatedPiece")
  
    console.log(`Activated Piece`,allPieces[activatedPiece])
    
    removeEventListenerWhenNotTurn()
   
    checkForOpenSpotsNoJumps()

    document.querySelector(".activatedPiece").addEventListener("click", DoubleClickedActivatedPiece)
    
}

function DoubleClickedActivatedPiece(){
    
    allPieces[activatedPiece].classList.remove("activatedPiece")
    allPieces[activatedPiece].removeEventListener("click", DoubleClickedActivatedPiece)

    console.log("you double clicked the active piece")
    
    
    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
        whereWeWantToMove.removeEventListener("click", movePiece)
        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
    })

    addClickeventToPieces()
}


////////establish variables 
let rightForwardOpenPieceUP
let leftForwardOpenPieceUp
let rightForwardOpenPieceDown
let leftForwardOpenPieceDown
let rightForwardUPJump
let leftForwardUPJump
let rightForwardDownJump
let leftForwardDownJump
let pieceWeSingleJumped
let clickWhereWeWantToMove
let spotWeWantToMoveTO
let bottomRowPlus55 = [55,56,58,60,62]
let bottomRow = [56,58,60,62]
let topRowPlus8 = [1,3,5,7,8]
let topRow =[1,3,5,7]
let checkedForDoubleJumps = false


// blue piece wants to move foarwad and to the right this is the fucntion to test if the piece is currently hidden

function checkForOpenSpotsNoJumps(){

    if(turn === 0 ){
        if(allPieces[activatedPiece].classList.contains('blueKing')){
            console.log("We are in function checkForOpemSpotsNoJumps and the activateied piece is king ",allPieces[activatedPiece] )
            
            if( (topRow.some(num => num == parseInt(activatedPiece)) == false) && allPieces[activatedPiece-7].classList.contains('hidden'))
            {
                allPieces[activatedPiece-7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceUP = allPieces[activatedPiece-7].id
                
                console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceUP])
               
            }
            if( (topRowPlus8.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-9 ,"hidden") )
                {
                    allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
                    leftForwardOpenPieceUp = allPieces[activatedPiece-9].id

                    console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
                   
                }
            if( (bottomRow.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(7 ,"hidden"))
                {
                    allPieces[parseInt(activatedPiece)+7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+7].id
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceDown])
                    
                }
            if( (bottomRowPlus55.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(9 ,"hidden") )
                {
                    allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
                    
                    console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
                } 
        }

        else{
            if(allPieces[activatedPiece-7].classList.contains('hidden'))
                {
                    allPieces[activatedPiece-7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceUP = allPieces[activatedPiece-7].id
                    
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceUP])
                    
                }
// blue piece wants to move foarwad and to the left this is the function to test if the piece is currently hidden

            if(parseInt(activatedPiece) != 8 && allPiecesClassContFunc(-9 ,"hidden"))
                {
                    allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceUp = allPieces[activatedPiece-9].id
                    //console.log(`The piece to the Forward left is open`,leftForwardOpenPieceUp)
                    console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
                   
                }
        }
    }
// red piece wants to move foarwad and to the right this is the function to test if the piece is currently hidden

    if(turn === 1 ){
        if(allPieces[activatedPiece].classList.contains('redKing')){
      
            if( (topRow.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc( -7 ,"hidden"))
                {
                    allPieces[activatedPiece-7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceUP = allPieces[activatedPiece-7].id
                    
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceUP])
                    
                }
            if( (topRowPlus8.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-9 ,"hidden") )
                {
                    allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceUp = allPieces[activatedPiece-9].id
                    
                    console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
                    
                }
            if( (bottomRow.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(7 ,"hidden"))
                {
                    allPieces[parseInt(activatedPiece)+7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+7].id
                    
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceDown])
                    
                }
            if( (bottomRowPlus55.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(9 ,"hidden") )
                {
                    allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
                    
                    console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
                
                }
        }

        
        else{
            if(allPiecesClassContFunc(7 ,"hidden"))
                {
                    allPieces[parseInt(activatedPiece)+7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+7].id
                   
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceDown])
                    
            }
// red piece wants to move foarwad and to the left this is the fucntion to test if the piece is currently hidden
            if(parseInt(activatedPiece) != 55 && allPiecesClassContFunc(9 ,"hidden") )
                {
                    allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
                    
                    console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
                   
                }
        }
    }
  
    checkForJumps()
}


//function to clear and reset classes after a piece is moved
function resestAfterPieceIsMoved(){
    pieceWasMoved = true
    allPieces[activatedPiece].classList.remove("activatedPiece")
    allPieces[activatedPiece].removeEventListener("click", DoubleClickedActivatedPiece)
    if(turn == 0 && allPieces[activatedPiece].classList.contains("bluePiece")){
       
        allPieces[spotWeWantToMoveTO].classList.add("bluePiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[activatedPiece].classList.remove("bluePiece")
        checkForKings()
        pieceCount()
        }

    else if(turn == 0 && allPieces[activatedPiece].classList.contains("blueKing")){
       
            allPieces[spotWeWantToMoveTO].classList.add("blueKing")
            allPieces[spotWeWantToMoveTO].classList.remove("hidden")
            allPieces[activatedPiece].classList.remove("blueKing")
            checkForKings()
            pieceCount()
            }


    else if(turn == 1 && allPieces[activatedPiece].classList.contains("redPiece")){
                allPieces[spotWeWantToMoveTO].classList.add("redPiece")
                allPieces[spotWeWantToMoveTO].classList.remove("hidden")
                allPieces[activatedPiece].classList.remove("redPiece")
                checkForKings()
                pieceCount()
                }
    else if(turn == 1 && allPieces[activatedPiece].classList.contains("redKing") ){
       
        allPieces[spotWeWantToMoveTO].classList.add("redKing")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[activatedPiece].classList.remove("redKing")
        checkForKings()
        pieceCount()
        }


    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
        whereWeWantToMove.removeEventListener("click", movePiece)
        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
    })

    allPieces[activatedPiece].classList.remove("activatedPiece")
    allPieces[activatedPiece].classList.add("hidden")
    rightForwardOpenPieceUP = 0
    leftForwardOpenPieceUp = 0
    rightForwardOpenPieceDown = 0
    leftForwardOpenPieceDown = 0
    rightForwardUPJump = 0
    leftForwardUPJump = 0
    rightForwardDownJump = 0
    leftForwardDownJump= 0
    spotWeWantToMoveTO = 0
    winGameFunc()
}

let pieceWasMoved = false

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
    singleJumpMovePiece()
}

//Function to check for avaliable jump spaces

let bottomTwoRowsPlus40 = [40,49,51,53,55,56,58,60,62]
let bottomTwoRowsPlus46 = [46,49,51,53,55,56,58,60,62]
let topTwoRowsPlus23 = [1,3,5,7,8,10,12,14,23]
let topTwoRowsPlus17  =[1,3,5,7,8,10,12,14,17]


function checkForJumps(){

    if(turn === 0 && allPieces[activatedPiece].classList.contains('blueKing')){
            
                if( (topTwoRowsPlus23.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(-14 ,"hidden")&& (allPiecesClassContFunc(-7 ,"redPiece") || allPiecesClassContFunc(-7 ,"redKing")))
                    {
                        allPieces[activatedPiece-14].classList.add("PieceYouCanMoveTo")
                    rightForwardUPJump = allPieces[activatedPiece-14].id
                        console.log(`You can Jump to the Forward Right UP `,rightForwardUPJump)
                        console.log(`You can Jump to the Forward Right UP`,allPieces[rightForwardUPJump])
                    
                    }
                if( (topTwoRowsPlus17.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-18 ,"hidden")&& (allPiecesClassContFunc(-9 ,"redPiece")  || allPiecesClassContFunc(-9 ,"redKing")))
                    {
                        allPieces[activatedPiece-18].classList.add("PieceYouCanMoveTo")
                    leftForwardUPJump = allPieces[activatedPiece-18].id
                        console.log(`You can Jump to the Forward left UP`,leftForwardUPJump)
                        console.log(`You can Jump to the Forward left UP`,allPieces[leftForwardUPJump])
                        
                    }
                if( (bottomTwoRowsPlus40.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(14 ,"hidden")&& (allPiecesClassContFunc(7,"redPiece")  || allPiecesClassContFunc(7 ,"redKing")))
                    {
                        allPieces[parseInt(activatedPiece)+14].classList.add("PieceYouCanMoveTo")
                    rightForwardDownJump = allPieces[parseInt(activatedPiece)+14].id
                        console.log(`You can Jump to the Forward Right DOWN `,rightForwardDownJump)
                        console.log(`You can Jump to the Forward Right DOWN`,allPieces[rightForwardDownJump])
                        
                    }
                if( (bottomTwoRowsPlus46.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(18 ,"hidden")&& (allPiecesClassContFunc(9 ,"redPiece")  || allPiecesClassContFunc(9 ,"redKing")))
                    {
                        allPieces[parseInt(activatedPiece)+18].classList.add("PieceYouCanMoveTo")
                    leftForwardDownJump = allPieces[parseInt(activatedPiece)+18].id
                        console.log(`You can Jump to the Forward left DOWN`,leftForwardDownJump)
                        console.log(`You can Jump to the Forward left DOWN`,allPieces[leftForwardDownJump])
                        
                    }
             
    }

        
        else if(turn === 0  && activatedPiece > 15){
                if(allPieces[activatedPiece-14].classList.contains('hidden') && parseInt(activatedPiece) > 15 && (allPiecesClassContFunc(-7 ,"redPiece")  || allPiecesClassContFunc(-7 ,"redKing")) )
                    {
                        allPieces[activatedPiece-14].classList.add("PieceYouCanMoveTo")
                        rightForwardUPJump = allPieces[activatedPiece-14].id
                        console.log(`You can Jump to the Forward Right UP `,rightForwardUPJump)
                        console.log(`You can Jump to the Forward Right UP`,allPieces[rightForwardUPJump])
                        
                    }
// blue piece wants to Jump forward and to the left this is the fucntion to test if the piece is currently hidden
                if(parseInt(activatedPiece) != 17 && allPieces[activatedPiece-18].classList.contains('hidden')&& parseInt(activatedPiece)> 15 && (allPiecesClassContFunc(-9 ,"redPiece")  || allPiecesClassContFunc(-9 ,"redKing")))
                    {
                        allPieces[activatedPiece-18].classList.add("PieceYouCanMoveTo")
                        leftForwardUPJump = allPieces[activatedPiece-18].id
                        console.log(`You can Jump to the Forward left UP`,leftForwardUPJump)
                        console.log(`You can Jump to the Forward left UP`,allPieces[leftForwardUPJump])
                        
                    }
            }
          
        
// red piece wants to Jump forward and to the right this is the function to test if the piece is currently hidden
    if(turn === 1 && allPieces[activatedPiece].classList.contains('redKing')){
 
        if( (topTwoRowsPlus23.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(-14 ,"hidden")&& (allPiecesClassContFunc(-7 ,"bluePiece")  || allPiecesClassContFunc(-7 ,"blueKing")))
            {
                allPieces[activatedPiece-14].classList.add("PieceYouCanMoveTo")
            rightForwardUPJump = allPieces[activatedPiece-14].id
                console.log(`You can Jump to the Forward Right UP `,rightForwardUPJump)
                console.log(`You can Jump to the Forward Right UP`,allPieces[rightForwardUPJump])
                
            }
        if( (topTwoRowsPlus17.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-18 ,"hidden")&& (allPiecesClassContFunc(-9 ,"bluePiece")  || allPiecesClassContFunc(-9 ,"blueKing")))
            {
                allPieces[activatedPiece-18].classList.add("PieceYouCanMoveTo")
            leftForwardUPJump = allPieces[activatedPiece-18].id
                console.log(`You can Jump to the Forward left UP`,leftForwardUPJump)
                console.log(`You can Jump to the Forward left UP`,allPieces[leftForwardUPJump])
                
            }
        if( (bottomTwoRowsPlus40.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(14 ,"hidden")&& (allPiecesClassContFunc(7 ,"bluePiece")  || allPiecesClassContFunc(7 ,"blueKing")))
            {
                allPieces[parseInt(activatedPiece)+14].classList.add("PieceYouCanMoveTo")
            rightForwardDownJump = allPieces[parseInt(activatedPiece)+14].id
                console.log(`You can Jump to the Forward Right DOWN `,rightForwardDownJump)
                console.log(`You can Jump to the Forward Right DOWN`,allPieces[rightForwardDownJump])
                
            }
        if( (bottomTwoRowsPlus46.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(18 ,"hidden")&& (allPiecesClassContFunc(9 ,"bluePiece")  || allPiecesClassContFunc(9 ,"blueKing")))
            {
                allPieces[parseInt(activatedPiece)+18].classList.add("PieceYouCanMoveTo")
            leftForwardDownJump = allPieces[parseInt(activatedPiece)+18].id
                console.log(`You can Jump to the Forward left DOWN`,leftForwardDownJump)
                console.log(`You can Jump to the Forward left DOWN`,allPieces[leftForwardDownJump])
                
            }

    }

    
        else if(turn === 1 && activatedPiece < 48  ){
            if(allPieces[parseInt(activatedPiece)+14].classList.contains('hidden')&& parseInt(activatedPiece) < 48 && (allPiecesClassContFunc(7 ,"bluePiece")  || allPiecesClassContFunc(7 ,"blueKing")))
                {
                    allPieces[parseInt(activatedPiece)+14].classList.add("PieceYouCanMoveTo")
                    rightForwardDownJump = allPieces[parseInt(activatedPiece)+14].id
                    console.log(`You can Jump to the Forward Right DOWN `,rightForwardDownJump)
                    console.log(`You can Jump to the Forward Right DOWN`,allPieces[rightForwardDownJump])
                    
                }
    // red piece wants to Jump foarwad and to the left this is the fucntion to test if the piece is currently hidden
            if(parseInt(activatedPiece) != 46 && allPieces[parseInt(activatedPiece)+18].classList.contains('hidden')&& parseInt(activatedPiece) < 48 && (allPiecesClassContFunc(9 ,"bluePiece")  || allPiecesClassContFunc(9 ,"blueKing")))
                {
                    allPieces[parseInt(activatedPiece)+18].classList.add("PieceYouCanMoveTo")
                    leftForwardDownJump = allPieces[parseInt(activatedPiece)+18].id
                    console.log(`You can Jump to the Forward left DOWN`,leftForwardDownJump)
                    console.log(`You can Jump to the Forward left DOWN`,allPieces[leftForwardDownJump])
                    
                }
        }


        clickWhereWeWantToMove = document.querySelectorAll(".PieceYouCanMoveTo")
        clickWhereWeWantToMove.forEach(clickWeWantToMove=>{
            clickWeWantToMove.addEventListener("click", movePiece)
        })
        

    if (clickWhereWeWantToMove.length == 0){
        console.log("No Jumps avaliable")
        NoMovesAvaliablefunc()
        
    }
    if(rightForwardUPJump == 0 && leftForwardUPJump == 0 && rightForwardDownJump == 0 && leftForwardDownJump==0) 
    {noOpenJumps = true}
    else{noOpenJumps = false}

    
}


// now we need a function to change atrribuites of when piece is jumped

function singleJumpMovePiece(){
    console.log(`The spot you want to Jump to is ${spotWeWantToMoveTO}`,allPieces[spotWeWantToMoveTO])
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardUPJump && allPieces[rightForwardUPJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardUPJump}`, allPieces[rightForwardUPJump])
        pieceWeSingleJumped = allPieces[activatedPiece-7].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        pieceHoder()
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardUPJump  && allPieces[leftForwardUPJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardUPJump}`, allPieces[leftForwardUPJump])
        pieceWeSingleJumped = allPieces[activatedPiece-9].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        pieceHoder()
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardDownJump  && allPieces[rightForwardDownJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardDownJump}`, allPieces[rightForwardDownJump])
        pieceWeSingleJumped = allPieces[parseInt(activatedPiece)+7].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        pieceHoder()
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardDownJump && allPieces[leftForwardDownJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardDownJump}`, allPieces[leftForwardDownJump])
        pieceWeSingleJumped = allPieces[parseInt(activatedPiece)+9].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        pieceHoder()
        resestAfterPieceIsJumpedSingle()
    }

    
}

//reset after piece is jumped
function resestAfterPieceIsJumpedSingle(){

    pieceWasMoved = true
    allPieces[activatedPiece].classList.remove("activatedPiece")
    allPieces[activatedPiece].removeEventListener("click", DoubleClickedActivatedPiece)

    console.log("Piece We jumped to allPieces[spotWeWantToMoveTO] in resetPieceAfter jump func",allPieces[spotWeWantToMoveTO])
    console.log("Trying to run check for double Jumps func")

        if(turn == 0 && allPieces[activatedPiece].classList.contains("bluePiece")){
           cleanInnerSingleJumpFunc("bluePiece","redKing","redPiece")
        }     
        else if(turn == 0 && allPieces[activatedPiece].classList.contains("blueKing")){
            cleanInnerSingleJumpFunc("blueKing","redKing","redPiece") 
        }
        else if(turn == 1 && allPieces[activatedPiece].classList.contains("redPiece")){
            
            cleanInnerSingleJumpFunc("redPiece","blueKing","bluePiece")
        }
        else if(turn == 1 && allPieces[activatedPiece].classList.contains("redKing")){

            cleanInnerSingleJumpFunc("redKing","blueKing","bluePiece")
            
        }

                if (noOpenJumps == false){
                    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
                        whereWeWantToMove.removeEventListener("click", movePiece)
                        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
                    })
                activatedPiece = spotWeWantToMoveTO
                allPieces[activatedPiece].classList.add("activatedPiece")
                checkForDoubleJumps()
                }

                else if (noOpenJumps == true){
                    checkForKings()
                    pieceCount()

                    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
                        whereWeWantToMove.removeEventListener("click", movePiece)
                        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
                    })
                    allPieces[activatedPiece].classList.remove("activatedPiece")
                    noOpenJumps = false
                    winGameFunc()
                }

        pieceCount()
        
           
}

function NoMovesAvaliablefunc(){
    if (pieceWasMoved == true){
    checkForKings()
    pieceCount()

    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
        whereWeWantToMove.removeEventListener("click", movePiece)
        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
    })
    allPieces[activatedPiece].classList.remove("activatedPiece")
    noOpenJumps = false
    winGameFunc()
    }
    else{
        console.log("piece cant be moved")
    }

}

// keep count of pieces removed and remaining / should just be redPiece and bluePiece .length at each turn change

function pieceCount(){
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    blueKings = document.querySelectorAll(".blueKing")
    redKings = document.querySelectorAll(".redKing")
    document.getElementById("BluePieceCount").innerText = `Blue Piece Count: ${bluePieces.length+blueKings.length}`
    document.getElementById("RedPieceCount").innerText = `Red Piece Count: ${redPieces.length+redKings.length}`
    
}

//Need win condition for when all pieces of a color are removed
function winGameFunc(){
    
    if (bluePieces.length+blueKings.length == 0){
        
        console.log("Red Wins")
        turnTrackerHTML.innerText = "Red Wins!!!"
        turnTrackerHTML.style.color="red"
        
    } 
    else if (redPieces.length+redKings.length == 0){
        
        console.log("Blue Wins")
        turnTrackerHTML.innerText = "Blue Wins!!!"
        turnTrackerHTML.style.color="blue"
        
    }
    else{
    changeWhosTurn()
    }
}


function checkForKings(){

    if(allPieces[1].classList.contains("bluePiece") || allPieces[3].classList.contains("bluePiece")|| allPieces[5].classList.contains("bluePiece")|| allPieces[7].classList.contains("bluePiece")){
        console.log("Make Blue Piece King",allPieces[spotWeWantToMoveTO])
        allPieces[spotWeWantToMoveTO].classList.add("blueKing")
        allPieces[spotWeWantToMoveTO].classList.remove("bluePiece")
    }
    if(allPieces[56].classList.contains("redPiece") || allPieces[58].classList.contains("redPiece")|| allPieces[60].classList.contains("redPiece")|| allPieces[62].classList.contains("redPiece")){
        console.log("Make Red Piece King",allPieces[spotWeWantToMoveTO])
        allPieces[spotWeWantToMoveTO].classList.add("redKing")
        allPieces[spotWeWantToMoveTO].classList.remove("redPiece")
    }
    
}

function checkForDoubleJumps(){
    noOpenJumps = false
    checkForJumps()
}

/// creating piece holders

function pieceHoder(){
        if(turn == 0){
            redTakenPiece
                redTakenPiece[redPieces.length+redKings.length-1].classList.add('redTakenPieceON')
        }
        else if (turn == 1){
            blueTakenPiece[bluePieces.length+blueKings.length-1].classList.add('blueTakenPieceON')
        }        
    }
    
//// functions to shorten code 

function allPiecesClassContFunc(num, pieceClass){
    return allPieces[parseInt(activatedPiece)+num].classList.contains(pieceClass)
}

function cleanInnerSingleJumpFunc(classWeAre,oppKing,oppPiece){
    console.log("pieceWeSingleJumped",pieceWeSingleJumped)
allPieces[spotWeWantToMoveTO].classList.add(classWeAre)
allPieces[spotWeWantToMoveTO].classList.remove("hidden")
console.log(allPieces[spotWeWantToMoveTO])
    if(allPieces[pieceWeSingleJumped].classList.contains(oppKing)){
        allPieces[pieceWeSingleJumped].classList.remove(oppKing)
        allPieces[pieceWeSingleJumped].classList.add("hidden")
    }
    else{
    allPieces[pieceWeSingleJumped].classList.remove(oppPiece)
    allPieces[pieceWeSingleJumped].classList.add("hidden")
    }
allPieces[activatedPiece].classList.remove(classWeAre)
allPieces[activatedPiece].classList.remove("activatedPiece")
allPieces[activatedPiece].classList.add("hidden")
}
}//the whole game
