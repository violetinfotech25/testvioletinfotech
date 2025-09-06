class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hi! How can I help you?");
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  showWebsiteOptions() {
    const message = this.createChatBotMessage(
      "Please choose the type of website you'd like to know about:",
      {
        widget: "websiteOptionsWidget" // Define this widget to show buttons/options
      }
    );
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  handleOption1() { // Static website
    const message1 = this.createChatBotMessage("You chose Static website.");
    const message2 = this.createChatBotMessage(
      "A static website is a simple website consisting of fixed content, usually HTML, CSS, and images."
    );
    const message3 = this.createChatBotMessage(
      "Our Static Website Package includes:\n- Up to 5 pages\n- Responsive design\n- Basic SEO\n- Deployment & hosting setup"
    );

    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message1, message2, message3],
    }));
  }

  handleOption2() { // Dynamic website
    const message1 = this.createChatBotMessage("You chose Dynamic website.");
    const message2 = this.createChatBotMessage(
      "Dynamic websites are interactive and can change content based on user interactions or backend data."
    );
    const message3 = this.createChatBotMessage(
      "Our Dynamic Website Package includes:\n- CMS integration\n- User authentication\n- Database connectivity\n- Custom features"
    );

    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message1, message2, message3],
    }));
  }

  handleOption3() { // E-commerce website
    const message1 = this.createChatBotMessage("You chose E-commerce website.");
    const message2 = this.createChatBotMessage(
      "E-commerce websites allow you to sell products or services online with secure payment gateways."
    );
    const message3 = this.createChatBotMessage(
      "Our E-commerce Package includes:\n- Product catalog\n- Shopping cart\n- Payment gateway integration\n- Order tracking"
    );

    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message1, message2, message3],
    }));
  }

  handleOption4() { // Portfolio website
    const message1 = this.createChatBotMessage("You chose Portfolio website.");
    const message2 = this.createChatBotMessage(
      "Portfolio websites showcase your work and achievements, great for freelancers and creatives."
    );
    const message3 = this.createChatBotMessage(
      "Our Portfolio Package includes:\n- Project galleries\n- About & contact pages\n- Responsive design\n- Social media integration"
    );

    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message1, message2, message3],
    }));
  }
}

export default ActionProvider;