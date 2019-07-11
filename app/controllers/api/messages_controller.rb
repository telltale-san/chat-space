class Api::MessagesController < ApplicationController
  def index
    @message=Message.new(messages_param)
    @messages=Message.where("group_id = ? and id > ?", @message.group_id, @message.id)

  end


  private

  def messages_param
    params.permit(:id,:group_id)    
  end


end