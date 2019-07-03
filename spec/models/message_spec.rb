require "rails_helper"

describe Message do
  describe "#create" do
    context "valid" do

      it "is valid with content" do
        message=build(:message,image:nil)
        expect(message).to be_valid
      end

      it "is valid with image" do
        message=build(:message,content:nil)
        expect(message).to be_valid
      end

      it "is valid with message and image" do
        message=build(:message)
        expect(message).to be_valid
      end

    end
    
    context "invalid" do

      it "is invalid without message and image" do
        message=build(:message,image:nil,content:nil)
        message.valid?
        expect(message.errors[:content]).to include("")
      end

      it "is invalid without group_id" do
      end

      it "is invalid without user_id" do
      end

    end

  end

end