// Import Dashboard.js file
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import PageError from "./views/PageError.js";

// Stops Page Refresh
const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  // Create array for routes
  const routes = [
    // When you go to the route path, run this function
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
    { path: "/404", view: PageError }
  ];

  // Test Each route for potential match
  const potentialMatches = routes.map(route => {
    // Set JSON
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  });

  // Set match to show true value of isMatch
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  // Check to see if no match
  // If no, send to 404
  if (!match) {
    match = {
      route: routes[3],
      isMatch: true,
    }
    // Tests in console.log
    console.log("Page Not Found");
  }

  // Create new instance
  const view = new match.route.view();

  // Pull html function from linked view js file
  document.querySelector("#app").innerHTML = await view.getHtml();

  // Check if match == true
  console.log(match.route.view);
};

// Allow History to run
window.addEventListener("popstate", router);

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  // On link click
  document.body.addEventListener("click", e => {
    // If nav contains data-link attribute
    if (e.target.matches("[data-link]")) {
      // Dont refresh page
      e.preventDefault();
      // Load as single page app
      navigateTo(e.target.href);
    }
  })

  // Run function
  router();
})
