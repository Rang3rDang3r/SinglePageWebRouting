export default class {
  constructor() {

  }

  // Set title on view change
  setTitle(title) {
    document.title = title;
  }

  // Provide own html for view
  async getHtml() {
    return "";
  }
}
