json.user_name @message.user.name
json.content @message.content
json.image @message.image_url
json.created_at @message.created_at.strftime("%y年%m月%d日 %H時%M分")
