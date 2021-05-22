export const updateMessage = (message, allTopics) => {
  const updatedMessage = message;
  const messageTopic = message.message_topic;
  const updatedTopic = allTopics.find((topic) => topic.title === messageTopic);
  // console.log("updatedTopic", updatedTopic);

  updatedMessage.message_topic = updatedTopic;
  // console.log(updatedMessage);
  // console.log("updatedMessage", updatedMessage);

  return updatedMessage;
};
