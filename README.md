# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# users table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|user_name|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

## Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups
