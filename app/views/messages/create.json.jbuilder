json.array! @messages do |message|
  json.content        message.content
  json.image          message.image
  json.message_id     message.id
  json.created_at     message.created_at
  json.user_name      message.users.name
end