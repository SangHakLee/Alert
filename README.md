# Alert Project

## Alarm Desktop App

## Infra

- Electron

## Usage
### Run
```bash
cd Alert
electron .
```

## Electron
### ipcMain
메인 프로세스에서 렌더러 프로세스로 비동기 통신을 합니다.
https://github.com/electron/electron/blob/master/docs-translations/ko-KR/api/ipc-main.md
```javascript
// 메인 프로세스
const {ipcMain} = require('electron')
ipcMain.on('test', (event, arg) => {
  console.log('on event:', event)
  console.log('on arg:', arg)
})
```
```javascript
// 렌더러 프로세스 (웹 페이지)
const {ipcRenderer} = require('electron')
ipcRenderer.send('test', {title:'hak'})
ipcRenderer.on('test', (data) => {
  console.log('data: ', data)
})
```

## Realm
realm 쓰기 위해서
https://github.com/realm/realm-js/issues/765
```bash
npm install electron --save-dev
./node_modules/.bin/electron-rebuild -f -w realm
```

### Realm macOS 번들 설치
https://realm.io/kr/docs/get-started/installation/mac/

`start-object-server.command` 오류 발생 시
```bash
sudo vi /etc/hosts

# /etc/hosts
127.0.0.1   localhost
```

### Realm 오브젝트 서버 설치
https://realm.io/kr/docs/realm-object-server/

`realm-mobile-platform` -> `start-object-server.command`