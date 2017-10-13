## このリポジトリについて
### Vue.jsで構築したコンポーネントのサンプルアプリです。
Vue.jsのコンポーネントを使ったページ表示の切り替え、ページネーションのサンプルアプリです。
ベースの実装はRuby on RailsでControllerとindex用のviewのみを作成。
その後Vue.jsで実装しています。

説明記事はこちら（本番公開後update）

## 開発環境について
以下環境にて動作確認済みです。
* Mac OS X EI Capitan (10.11.6)
* Ruby 2.3.0
* Vue.js 2.4.1

### その他環境
* Ruby on Rails 5.0.5
* MySQL2

### config/database.ymlについて
git cloneしたらターミナル上で

```
cp config/database.yml.sample config/database.yml
```
としてからconfig/database.ymlをご自身の環境に応じて編集してください。

### .ruby-versionについて
Rubyのバージョンを変更する場合は.ruby-versionファイルを編集してください。

### データベースの作成、migrationの実行について
下記コマンドで行ってください。

```
./bin/rake db:create
```
