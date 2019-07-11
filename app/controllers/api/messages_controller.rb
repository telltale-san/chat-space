class Api::MessagesController < ApplicationController
  def index
    @message=Message.new(messages_param)
    @messages=Message.where(group_id:"#{@message.group_id}",id:@message.id+1..Float::INFINITY)

  end


  private

  def messages_param
    params.permit(:id,:group_id)    
  end


end