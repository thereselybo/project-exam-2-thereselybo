export const updateMessage = (message, allTopics) => {
  // let updatedMessage = message;
  // const messageTopic = message.message_topic;
  // console.log(messageTopic);

  // const updatedTopic = allTopics.filter(
  //   (topic) => topic.message_topic.title === messageTopic
  // );

  // updatedMessage.messageTopic = updatedTopic;
  // console.log("data", message);
  const updatedMessage = message;
  const messageTopic = message.message_topic;
  // console.log("message", message);
  // console.log("messageTopic", messageTopic);

  // const updatedTopic = messageTopics.forEach((topic) => {
  //   console.log(topic, messageTopic);
  //   if (topic.title === messageTopic) {
  //     return topic;
  //   }
  // });

  const updatedTopic = allTopics.find((topic) => topic.title === messageTopic);
  // console.log("updatedTopic", updatedTopic);

  updatedMessage.message_topic = updatedTopic;
  // console.log(updatedMessage);

  // console.log("updatedMessage", updatedMessage);

  return updatedMessage;
};
