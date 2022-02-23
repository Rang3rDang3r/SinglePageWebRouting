// Run AbstractView js commands
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  // Set title for page
  constructor() {
    // Call super Constructor for dashboard
    super();
    this.setTitle("Settings");
  }

  // Sets HTML for view
  async getHtml() {
    return `
      <h1>Edit Settings</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p><a href="/" data-link>Dashboard</a>
    `;
  }
}
