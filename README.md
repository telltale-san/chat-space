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

# DB設計


## membersテーブル

|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key:true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## usersテーブル

|column|type|options|
|------|----|-------|
|name|string|null: false, add_index|
|e-mail|string|null: false, unique: true|

### Association
has_many :groups, thrrough: :members
has_many :messages

## groupsテーブル

|column|type|options|
|------|----|-------|
|name|string|null: false|

### Association
has_many :users, through: :members
has_many :messages


## messagesテーブル

|column|type|options|
|------|----|-------|
|body|text|add_index|
|image|string|add_index|
|group_id|integer|null: false,foregn_key:true|
|user_id|integer|null: false,foregn_key:true|

### Association
- belongs_to :group
- belongs_to :user






