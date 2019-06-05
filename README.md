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
|user|references|null: false, foreign_key:true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## usersテーブル

|column|type|options|
|------|----|-------|
|name|string|null: false, index: true|
|e-mail|string|null: false, unique: true|

### Association
has_many :groups, through: :members
has_many :messages
has_many :members

## groupsテーブル

|column|type|options|
|------|----|-------|
|name|string|null: false|

### Association
has_many :users, through: :members
has_many :messages
has_many :members


## messagesテーブル

|column|type|options|
|------|----|-------|
|body|text||
|image|string||
|group|references|null: false,foregn_key:true|
|user|references|null: false,foregn_key:true|

### Association
- belongs_to :group
- belongs_to :user
