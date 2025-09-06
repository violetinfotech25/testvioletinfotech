import { createChatBotMessage } from "react-chatbot-kit";
import WebsiteOptionsWidget from "../components/widgets/WebsiteOptionsWidget";

const config = {
  botName: "SupportBot",
  initialMessages: [
    createChatBotMessage("Hello! How can I help you today?", {}),
  ],
  widgets: [
    {
      widgetName: "websiteOptionsWidget",
      widgetFunc: (props: any) => <WebsiteOptionsWidget {...props} />,
      props: {},
      mapStateToProps: [],
    },
  ],
};

export default config;