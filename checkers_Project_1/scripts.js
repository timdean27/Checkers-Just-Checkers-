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
//bluePieces.forEach(bluePiece=>{console.log(bluePiece)})
let redPieces = document.querySelectorAll(".redPiece")
//redPieces.forEach(redPiece=>{console.log(redPiece)})
blueKings = document.querySelectorAll(".blueKing")
redKings = document.querySelectorAll(".redKing")



let turn = 0;
console.log("turn check 1:",turn)
 
function addClickeventToPieces(){
    if(turn === 0){
            bluePieces.forEach(bluePiece=>{
                bluePiece.addEventListener("click", resestWithRemainingPeices)
                //console.log(bluePiece)
            })
                blueKings.forEach(blueKing=>{
                    blueKing.addEventListener("click", resestWithRemainingPeices)
                    console.log(blueKing)          
                })
        console.log("Event Listener was added for Blue:")
        console.log("turn check 2:",turn)
    }
    
    else{
            redPieces.forEach(redPiece=>{
                redPiece.addEventListener("click", resestWithRemainingPeices)
                //console.log(redPiece)
            })
                redKings.forEach(redKing=>{
                    redKing.addEventListener("click", resestWithRemainingPeices)
                    console.log(redKing)
                })
        console.log("Event Listener was added for Red:")
        console.log("turn check 3:",turn)
    }
}

////////////////////
// change the players turn function
//this will be called at the end of a move and activatePieces for the next player
let turnTrackerHTML = document.getElementById("TurnTracker")
turnTrackerHTML.innerText = "Turn Tracker: We Always Start at Blue for now"
// let changeTurnButtonTest = document.querySelector(".ChangeTurn")
// changeTurnButtonTest.addEventListener("click", changeTurnButtonTestFunc)

// function changeTurnButtonTestFunc(){
//     changeWhosTurn()
// }
function changeWhosTurn(){
   
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

// adding Start game button to addClickevent is not outside of a function
document.getElementById("StartGameBTN").addEventListener("click", startGameButtonFunc)
function startGameButtonFunc(){
addClickeventToPieces()
}

// porbelm in prior code was when a piece was removed it remaind inside the forEach add event listener even when bluepice class was removed
// function to remove event listener
// let TestRemoveEventButtonTest = document.querySelector(".TestRemoveEvent")
// TestRemoveEventButtonTest.addEventListener("click", TestRemoveEventButtonTestFunc)

// function TestRemoveEventButtonTestFunc(){removeEventListener()}

function removeEventListenerWhenNotTurn(){
    if(turn === 0){
            bluePieces.forEach(bluePiece=>{
            bluePiece.removeEventListener("click", resestWithRemainingPeices)
             })
            //console.log(bluePiece)
                    blueKings.forEach(blueKing=>{
                    blueKing.removeEventListener("click", resestWithRemainingPeices)
                    console.log(blueKing)
                    })
        
        console.log("Event Listener was removed for Blue")
    }
    else{
            redPieces.forEach(redPiece=>{
            redPiece.removeEventListener("click", resestWithRemainingPeices)
            //console.log(redPiece)
            })
                redKings.forEach(redKing=>{
                redKing.removeEventListener("click", resestWithRemainingPeices)
                console.log(redKing)
                
                })
        console.log("Event Listener was removed for Red:",)
    }

}

function resestWithRemainingPeices(){
    pieceYouWantToMove(event)
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    blueKings = document.querySelectorAll(".blueKing")
    redKings = document.querySelectorAll(".redKing")

    console.log("pices with blueKing class run in resestWithRemainingPeices()",blueKings)
    console.log("pices with redKing class run in resestWithRemainingPeices()",redKings )
}


//identify selceted piece and give class active 
function pieceYouWantToMove(event){
    activatedPiece = event.target.id
    allPieces[activatedPiece].classList.add("activatedPiece")
    console.log(`Activated Piece ID`,activatedPiece)
    console.log(`Activated Piece`,allPieces[activatedPiece])
    //console.log(console.log(`Activated Piece ID+9`,parseInt(activatedPiece)+9))
    console.log(console.log(`Activated Piece ID-14`,activatedPiece-14))
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
let rightForwardUPJump
let leftForwardUPJump
let rightForwardDownJump
let leftForwardDownJump
let pieceWeSingleJumped
let clickWhereWeWantToMove
let spotWeWantToMoveTO
// blue piece wants to move foarwad and to the right this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the right will always be -7 away from the slected when blue is moveing forward 
function checkForOpenSpotsNoJumps(){
    if(turn === 0 ){
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
        if(parseInt(activatedPiece) != 8 && allPieces[activatedPiece-9].classList.contains('hidden') )
            {
                allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceUp = allPieces[activatedPiece-9].id
                console.log(`The piece to the Forward left is open`,leftForwardOpenPieceUp)
                console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
                //return true
            }
    }
// red piece wants to move foarwad and to the right this is the function to test if the piece is currently hidden
//the piece dirrectly to the right will always be +7 away from the slected when bblue is moveing forward
    if(turn === 1 ){
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
        if(parseInt(activatedPiece) != 55 && allPieces[parseInt(activatedPiece)+9].classList.contains('hidden') )
            {
                allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
                console.log(`The piece Down and left is open`,leftForwardOpenPieceDown)
                console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
                //return true
            }
    }
    // clickWhereWeWantToMove = document.querySelectorAll(".PieceYouCanMoveTo")
    //     clickWhereWeWantToMove.forEach(clickWeWantToMove=>{
    //         clickWeWantToMove.addEventListener("click", movePiece)
    //     })

    //trying to run this eventlistener at the end of checkforjumps
    checkForJumps()
}


//function to clear and reset classes after a piece is moved
// this is only for single movements forward going to make seprate function for jumps
function resestAfterPieceIsMoved(){
    
    if(turn == 0 ){
       
        allPieces[spotWeWantToMoveTO].classList.add("bluePiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[activatedPiece].classList.remove("bluePiece")
        checkForKings()
        pieceCount()
        }
    else if(turn == 1 ){
       
        allPieces[spotWeWantToMoveTO].classList.add("redPiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[activatedPiece].classList.remove("redPiece")
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
//working on only single jumps at the moment / similair logic should apply from the checkForOpenSpotsNoJumps function
// jump forward left up will be (id - 18) forward right up (id - 14)
// jump forward left up will be (id + 18) forward right up (id + 14)
function checkForJumps(){
    console.log(allPieces[activatedPiece-18])
    if(turn === 0  && activatedPiece > 15){
        if(allPieces[activatedPiece-14].classList.contains('hidden') && allPieces[activatedPiece-7].classList.contains('redPiece') && parseInt(activatedPiece) > 15)
            {
                allPieces[activatedPiece-14].classList.add("PieceYouCanMoveTo")
                rightForwardUPJump = allPieces[activatedPiece-14].id
                console.log(`You can Jump to the Forward Right UP `,rightForwardUPJump)
                console.log(`You can Jump to the Forward Right UP`,allPieces[rightForwardUPJump])
                //return true
            }
// blue piece wants to Jump forward and to the left this is the fucntion to test if the piece is currently hidden
        if(parseInt(activatedPiece) != 17 && allPieces[activatedPiece-18].classList.contains('hidden')&& allPieces[activatedPiece-9].classList.contains('redPiece') && parseInt(activatedPiece)> 15)
            {
                allPieces[activatedPiece-18].classList.add("PieceYouCanMoveTo")
                leftForwardUPJump = allPieces[activatedPiece-18].id
                console.log(`You can Jump to the Forward left UP`,leftForwardUPJump)
                console.log(`You can Jump to the Forward left UP`,allPieces[leftForwardUPJump])
                //return true
            }
    }
// red piece wants to Jump forward and to the right this is the function to test if the piece is currently hidden
    if(turn === 1 && activatedPiece < 48  ){
        if(allPieces[parseInt(activatedPiece)+14].classList.contains('hidden') && allPieces[parseInt(activatedPiece)+7].classList.contains('bluePiece')  && parseInt(activatedPiece) < 48)
            {
                allPieces[parseInt(activatedPiece)+14].classList.add("PieceYouCanMoveTo")
                rightForwardDownJump = allPieces[parseInt(activatedPiece)+14].id
                console.log(`You can Jump to the Forward Right DOWN `,rightForwardDownJump)
                console.log(`You can Jump to the Forward Right DOWN`,allPieces[rightForwardDownJump])
                //return true
            }
// red piece wants to Jump foarwad and to the left this is the fucntion to test if the piece is currently hidden
        if(parseInt(activatedPiece) != 46 && allPieces[parseInt(activatedPiece)+18].classList.contains('hidden')&& allPieces[parseInt(activatedPiece)+9].classList.contains('bluePiece') && parseInt(activatedPiece) < 48 )
            {
                allPieces[parseInt(activatedPiece)+18].classList.add("PieceYouCanMoveTo")
                leftForwardDownJump = allPieces[parseInt(activatedPiece)+18].id
                console.log(`You can Jump to the Forward left DOWN`,leftForwardDownJump)
                console.log(`You can Jump to the Forward left DOWN`,allPieces[leftForwardDownJump])
                //return true
            }
    }
    clickWhereWeWantToMove = document.querySelectorAll(".PieceYouCanMoveTo")
        clickWhereWeWantToMove.forEach(clickWeWantToMove=>{
            clickWeWantToMove.addEventListener("click", movePiece)
        })
}

// now we need a function to change atrribuites of when piece is jumped
//going to try to pass fucntion to bottom of movePiece function instead of adding in additonal iff conditions

function singleJumpMovePiece(){
    console.log(`The spot you want to Jump to is ${spotWeWantToMoveTO}`,allPieces[spotWeWantToMoveTO])
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardUPJump && allPieces[rightForwardUPJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardUPJump}`, allPieces[rightForwardUPJump])
        pieceWeSingleJumped = allPieces[activatedPiece-7].id
        console.log("pieceWeSingleJumped",pieceWeSingleJumped)
        
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardUPJump  && allPieces[leftForwardUPJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardUPJump}`, allPieces[leftForwardUPJump])
        pieceWeSingleJumped = allPieces[activatedPiece-9].id
        console.log("pieceWeSingleJumped",pieceWeSingleJumped)
        
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardDownJump  && allPieces[rightForwardDownJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardDownJump}`, allPieces[rightForwardDownJump])
        pieceWeSingleJumped = allPieces[parseInt(activatedPiece)+7].id
        console.log("pieceWeSingleJumped",pieceWeSingleJumped)
        
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardDownJump && allPieces[leftForwardDownJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardDownJump}`, allPieces[leftForwardDownJump])
        pieceWeSingleJumped = allPieces[parseInt(activatedPiece)+9].id
        console.log("pieceWeSingleJumped",pieceWeSingleJumped)
        
        resestAfterPieceIsJumpedSingle()
    }
}

//reset after piece is jumped
// we need to find what piece is being jumped first...
function resestAfterPieceIsJumpedSingle(){
    
    if(turn == 0 ){
        
        console.log("pieceWeSingleJumped",pieceWeSingleJumped)
        allPieces[spotWeWantToMoveTO].classList.add("bluePiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[pieceWeSingleJumped].classList.remove("redPiece")
        allPieces[pieceWeSingleJumped].classList.add("hidden")
        allPieces[activatedPiece].classList.remove("bluePiece")
        checkForKings()
        pieceCount()
       
        }
    else if(turn == 1 ){
        
        console.log("pieceWeSingleJumped",pieceWeSingleJumped)
        allPieces[spotWeWantToMoveTO].classList.add("redPiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[pieceWeSingleJumped].classList.remove("bluePiece")
        allPieces[pieceWeSingleJumped].classList.add("hidden")
        allPieces[activatedPiece].classList.remove("redPiece")
        checkForKings()
        pieceCount()
        
        }
    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
        whereWeWantToMove.removeEventListener("click", movePiece)
        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
    })
   
    allPieces[activatedPiece].classList.remove("activatedPiece")
    allPieces[activatedPiece].classList.add("hidden")
    
    
    
    winGameFunc()
}

// keep count of pieces removed and remaining / should just be redPiece and bluePiece .length at each turn change

function pieceCount(){
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    document.getElementById("BluePieceCount").innerText = `Blue Piece Count: ${bluePieces.length}`
    document.getElementById("RedPieceCount").innerText = `Red Piece Count: ${redPieces.length}`
}

//Need win condition for when all pieces of a color are removed
//Need to add logic for when player has no moves leftbut pieces.length > 0 
function winGameFunc(){
    
    if (bluePieces.length == 0){
        console.log("Red Wins")
    } 
    if (redPieces.length == 0){
        console.log("Blue Wins")
    }
    
    changeWhosTurn()
}


// making Kings when blue is on 1,3,5,7 and red is on 56,58,60,62

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