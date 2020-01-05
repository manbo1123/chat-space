json.user_name @message.user.name
json.content @message.content
json.image @message.image_url
json.created_at @message.created_at.strftime("%y/%m/%d(%a) %H:%M:%S")
json.id @message.id