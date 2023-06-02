import { Message } from 'enmity';

function handleMessages(message: Message) {
  const { content } = message;
  const urlRegex = /(^|[^/])(www\.[\S]+(\b|$))/gim;
  const modifiedContent = content.replace(urlRegex, '$1https://$2');
  message.content = modifiedContent;
}

export default function HttpsLinkPlugin() {
  return {
    onMessage: handleMessages,
  };
}
