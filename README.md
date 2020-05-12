# README
rails学習のアウトプットのため、チャットアプリを作成しました。

# 開発環境
- haml
- sass
- jquery
- ruby on rails
- Nginx
- Capistrano
### サーバー
- AWS
### DB
- mysql
### データ管理
- guthub

# 機能
- ユーザー登録機能
- グループ内でのチャット機能
- 複数人によるグループチャット機能
- チャット相手の検索機能
- チャットの履歴表示機能
- 画像送信機能
- チャットの自動更新


devise(gem)を用い、ユーザーアカウントの登録機能を実装しました。
![Alt text](https://gyazo.com/90b0b2d3edbfd9ee67cd7919bd26027b/raw)

チャット相手を検索し、グループを作成します。
![Alt text](https://gyazo.com/d1ee96f3dac9f75d9afd8c452f78da80/raw)

JSでチャットの自動更新機能を実装しました。
![Alt text](https://gyazo.com/6c192e85a63179cd9de68ca642e51901/raw)


# DB設計
# users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

## Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

# messages table
|column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|body|text||
|image|string||
|created_at|timestamps||
|user_id|references|null: false, foreign_key|
|group_id|rferences|null: false, foreign_key|

## Association
- belongs_to :user
- belongs_to :group

# groups table
|Column|Type|Option|
|------|----|------|
|id|integer|null: false|
|name|string|null: false|

## Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :messages

# users_groups table
|Column|Type|Option|
|------|----|------|
|id|integer|null: false|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group
