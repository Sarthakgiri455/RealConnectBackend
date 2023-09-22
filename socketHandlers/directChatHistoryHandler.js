const Conversation = require("../models/conversation");
const chatUpdates = require("./updates/chat");

const directChatHistoryHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId } = data;
    console.log('reached till getting the history handler');
    console.log(receiverUserId);
    console.log(userId);

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] }
      
    });
    console.log("conversation direct "+conversation);

    if (conversation) {
      chatUpdates.updateChatHistory(conversation._id.toString(), socket.id);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = directChatHistoryHandler;
