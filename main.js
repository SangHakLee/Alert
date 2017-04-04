const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// realm 쓰기 위해서
// https://github.com/realm/realm-js/issues/765
// npm install electron --save-dev
// ./node_modules/.bin/electron-rebuild -f -w realm
const Realm = require('realm')

const Alarm = {name: 'Alarm', properties: {
  id: {type: 'int', optional: false},
  title: {type: 'string', optional: true}
}}

const db = new Realm({schema: [Alarm]})
let alarm = db.objects('Alarm')

db.write( () => {
  console.log('alarm',alarm.length)
  // let id = alarm[alarm.length-1].id  || 1
  let id = alarm[alarm.length-1] ? alarm[alarm.length-1].id : 1
  db.create('Alarm', {id: id+1, title: 'Test'})
})

console.log(db.objects('Alarm'))

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  // win.loadURL('https://github.com')

  // 개발자 콘솔 열기
  win.webContents.openDevTools()

  // window 닫힐 때
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
