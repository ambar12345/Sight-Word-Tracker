


//format options to display words
let list = document.getElementById('list')
let oneByOne = document.getElementById('oneByOne')
//level options
let preK = document.getElementById('preK')
let kinder = document.getElementById('kinder')
let firstGr = document.getElementById('firstGr')
let secondGr = document.getElementById('secondGr')
let thirdGr = document.getElementById('thirdGr')
let nouns  = document.getElementById('nouns')


wordList = {
    preK: ['a','and', 'away','big', 'blue', 'can','come','down', 'find', 'for', 'funny', 'go', 'help', 'here', 'I', 'in','is', 'it','jump', 'little', 'look', 'make', 'me', 'my','not', 'one', 'play', 'red', 'run', 'said', 'see','the','three','to','two','up','we','where','yellow','you'],
    kinder: ['all','am' ,'are' ,'at' ,'ate' ,'be','black','brown','but','came','did','do','eat','four','get','good','have','he','into','like','must','new','no','now','on','our','out','please','pretty','ran','ride','saw','say','she','so','soon','that','there','they','this','too','under','want','was','well','went','what','white','who','will','with','yes'],
    firstGr: ['after','again','an','any','as','ask','by','could','every','fly','from','give','going','had','has','her','him','his','how','just','know','let','live','may','of','old','once','open','over','put','round','some','stop','take','thank','them','then','think','walk','were','when'],
    secondGr:['always','around','because','been','before','best','both','buy','call','cold','does',"don't",'fast','first','five','found','gave','goes','green','its','made','many','off','or','pull','read','right','sing','sit','sleep','tell','their','these','those','upon','us','use','very','wash','which','why','wish','work','would','write','your'],
    thirdGr: ['about','better','bring','carry','clean','cut','done','draw','drink','eight','fall','far','full','got','grow','hold','hot','hurt','if','keep','kind','laugh','light','long','much','myself','never','only','own','pick','seven','shall','show','six','small','start','ten','today','together','try','warm'],
    nouns:['apple','baby','back','ball','bear','bed','bell','bird','birthday','boat','box','boy','bread','brother','cake','car','cat','chair','chicken','children','Christmas','coat','corn','cow','day','dog','doll','door','duck','egg','eye','farm','farmer','father','feet','fire','fish','floor','flower','game','garden','girl','goodbye','grass','ground','hand','head','hill','home','horse','house','kitty','leg','letter','man','men','milk','money','morning','mother','name','nest','night','paper','party','picture','pig','rabbit','rain','ring','robin','Santa Claus','school','seed','sheep','shoe','sister','snow','song','squirrel','stick','street','sun','table','thing','time','top','toy','tree','watch','water','way','wind','window','wood']
}
let levelsArr = [preK,kinder,firstGr,secondGr,thirdGr,nouns]
let formatArr = [list,oneByOne]


class whichList {
    constructor(level,format){
        this._level = level
        this._format = format
    }

    get level() {
        return this._level
    }

    get format() {
        return this._format
    }

  set level(chosenLevel){
      this._level=chosenLevel
  }

  set format(chosenDisplay) {
     this._format = chosenDisplay
  }

//function that shows words once level is chosen, if statement shows in list, else goes to single word function
goWords() {
    document.getElementById('wordsHere').innerText =''
        if (this._format == 'list' || this._format == undefined){
        wordList[this._level].forEach ( obj => {
            const li = document.createElement('li')
            li.textContent = obj
            document.getElementById('wordsHere').appendChild(li)
            document.getElementById('next').classList.add('displayOff')
            document.getElementById('back').classList.add('displayOff')
          })}
          else if (this._format =='oneByOne'){
              console.log("uno por uno")
            this.singleWords(num)
          }
        }

//function for showing one word at a time
    singleWords(num){
        document.getElementById('wordsHere').innerText =''
        document.getElementById('next').classList.remove('displayOff')
        if (num>0){
            document.getElementById('back').classList.remove('displayOff')
        }
        const li = document.createElement('li')
        li.textContent = wordList[this._level][num]
        document.getElementById('wordsHere').appendChild(li)
        
    }
  

}

let choice = new whichList()   

changeLevelYo = (event) => {
choice.level=event.target.id
console.log(choice.level)
console.log(choice.format)
choice.goWords()
}

changeFormatYo = (event) => {
choice.format = event.target.id
console.log(choice.format)
console.log('changeFormatYo running')
choice.goWords()
}

let num=0;
nextWord = () => {
    num++
    choice.singleWords(num)
    console.log('next')
} 

prevWord = () => {
    num--
    choice.singleWords(num)
    console.log('back')
}



//event listeners for all levels
levelsArr.forEach(item => {
    item.addEventListener('click',changeLevelYo)
})
//event listeners for 2 formats
formatArr.forEach(item => {
    item.addEventListener('click',changeFormatYo)
})

//event listenr for next button
document.getElementById('next').addEventListener('click',nextWord)
//envet listener for back button
document.getElementById('back').addEventListener('click',prevWord)



