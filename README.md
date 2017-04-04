# Alert Project

## Alarm Desktop App

## Infra

- Electron


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