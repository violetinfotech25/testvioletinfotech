class MessageParser {
  actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
  const lower = message.toLowerCase();
  
  if (lower.includes("static")) {
    this.actionProvider.handleOption1(); // show static website details
  } else if (lower.includes("dynamic")) {
    this.actionProvider.handleOption2(); // show dynamic website details
  } else if (lower.includes("e-commerce") || lower.includes("ecommerce")) {
    this.actionProvider.handleOption3(); // show e-commerce details
  } else if (lower.includes("portfolio")) {
    this.actionProvider.handleOption4(); // show portfolio details
  } else if (lower.includes("website")) {
    this.actionProvider.showWebsiteOptions(); // show website type options
  } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    this.actionProvider.greet();
  } else {
    // fallback or generic response
  }
}
}

export default MessageParser;
