


//format options to display words
let list = document.getElementById('list')
let oneByOne = document.getElementById('oneByOne')
let advanced = document.getElementById('advanced')
//level options
let preK = document.getElementById('preK')
let kinder = document.getElementById('kinder')
let firstGr = document.getElementById('firstGr')
let secondGr = document.getElementById('secondGr')
let thirdGr = document.getElementById('thirdGr')
let nouns  = document.getElementById('nouns')

//list of words array

class Constructor{
    constructor(level){
        this._level = level
    }

    get level {
        return this._level
    }

    set level(chosenLevel) {
        this._level = chosenLevel
    }
}

class Dolch extends Constructor{
    constructor(level){
        super(level)
    }
}


 wordList = {
    preK: ['a','and', 'away','big', 'blue', 'can','come','down', 'find', 'for', 'funny', 'go', 'help', 'here', 'I', 'in','is', 'it','jump', 'little', 'look', 'make', 'me', 'my','not', 'one', 'play', 'red', 'run', 'said', 'see','the','three','to','two','up','we','where','yellow','you'],
    kinder: ['all','am' ,'are' ,'at' ,'ate' ,'be','black','brown','but','came','did','do','eat','four','get','good','have','he','into','like','must','new','no','now','on','our','out','please','pretty','ran','ride','saw','say','she','so','soon','that','there','they','this','too','under','want','was','well','went','what','white','who','will','with','yes'],
    firstGr: ['after','again','an','any','as','ask','by','could','every','fly','from','give','going','had','has','her','him','his','how','just','know','let','live','may','of','old','once','open','over','put','round','some','stop','take','thank','them','then','think','walk','were','when'],
    secondGr:['always','around','because','been','before','best','both','buy','call','cold','does',"don't",'fast','first','five','found','gave','goes','green','its','made','many','off','or','pull','read','right','sing','sit','sleep','tell','their','these','those','upon','us','use','very','wash','which','why','wish','work','would','write','your'],
    thirdGr: ['about','better','bring','carry','clean','cut','done','draw','drink','eight','fall','far','full','got','grow','hold','hot','hurt','if','keep','kind','laugh','light','long','much','myself','never','only','own','pick','seven','shall','show','six','small','start','ten','today','together','try','warm'],
    nouns:['apple','baby','back','ball','bear','bed','bell','bird','birthday','boat','box','boy','bread','brother','cake','car','cat','chair','chicken','children','Christmas','coat','corn','cow','day','dog','doll','door','duck','egg','eye','farm','farmer','father','feet','fire','fish','floor','flower','game','garden','girl','goodbye','grass','ground','hand','head','hill','home','horse','house','kitty','leg','letter','man','men','milk','money','morning','mother','name','nest','night','paper','party','picture','pig','rabbit','rain','ring','robin','Santa Claus','school','seed','sheep','shoe','sister','snow','song','squirrel','stick','street','sun','table','thing','time','top','toy','tree','watch','water','way','wind','window','wood']
}


let formatArr = [list,oneByOne,advanced]
let levelsArr = [preK,kinder,firstGr,secondGr,thirdGr,nouns]
let selected = {value:''}
let array = {value:''}
//function for default list
const showList = (event) => {
    document.getElementById('wordList').innerText =''
    selected.value = event.target.id
    console.log(`selected = ${event.target.id}`)
    array.value = wordList[selected.value]
    console.log(`array = ${array}`)

    array[value].forEach ( obj => {
        const li = document.createElement('li')
        li.textContent = obj
        document.getElementById('wordList').appendChild(li)
      })

}
//EVENT LISTENER FOR LEVEL BUTTONS
levelsArr.forEach(item => {
    item.addEventListener('click',showList)
})
//EVENT LISTENER FOR DISPLAY FORMAT
formatArr.forEach(item => {
    item.addEventListener('click',singleWord)
})

document.getElementById('next').addEventListener('click',nextWord)
document.getElementById('back').addEventListener('click',prevWord)
let num=''

function singleWord (){
    num=0;
    document.getElementById('wordList').innerText =''
    const li = document.createElement('li')
    li.textContent = wordList.preK[num]
    document.getElementById('wordList').appendChild(li)
}

    function nextWord(){//function for when user clicks next, increases 'num' and gets the data
        if (num < wordList.preK.length){//CHANGE ARRAY TO VARIABLE 
            num++
            document.getElementById('wordList').innerText =''
            const li = document.createElement('li')
            li.textContent = wordList.preK[num]//CREATE VARIABLE FOR SELECTED LEVEL
            document.getElementById('wordList').appendChild(li)
        }
    }

    function prevWord(){
        if (num >= 0){
            num--
            document.getElementById('wordList').innerText =''
            const li = document.createElement('li')
            li.textContent = wordList.preK[num]//CREATE VARIABLE FOR SELECTED LEVEL
            document.getElementById('wordList').appendChild(li)
        }
    }
