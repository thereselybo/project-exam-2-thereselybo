export const updateMessage = (message, allTopics) => {
  const updatedMessage = message;
  const messageTopic = message.message_topic;
  const updatedTopic = allTopics.find((topic) => topic.title === messageTopic);

  updatedMessage.message_topic = updatedTopic;

  return updatedMessage;
};
