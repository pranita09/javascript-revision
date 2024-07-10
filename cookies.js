// Cookies are small pieces of data stored on the user's computer by their web browser.
// They are used to remember information about the user, such as login status, preferences, and other data that needs to persist across page reloads and visits.
// Cookies are key-value pairs and have an expiration date, after which they are automatically deleted by the browser.

// set cookie
document.cookie =
  "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// get cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const username = getCookie("username");
console.log(username); // Outputs: 'JohnDoe'

// delete cookie - it's expiration date

// Setting Multiple Attributes

// expires: Sets the expiration date of the cookie.
// max-age: Sets the maximum age of the cookie in seconds.
// path: Specifies the URL path that must exist in the requested URL for the browser to send the Cookie header.
// domain: Specifies the domain that must exist in the requested URL.
// secure: Indicates that the cookie should only be transmitted over secure protocols such as HTTPS.
// httponly: Indicates that the cookie is inaccessible to JavaScript's Document.cookie API, and can only be sent to the server.

document.cookie =
  "username=JohnDoe; max-age=3600; path=/; domain=example.com; secure; httponly";

// Using js-cookie library
Cookies.set("username", "JohnDoe", { expires: 7, path: "/" });
console.log(Cookies.get("username"));
Cookies.remove("username", { path: "/" });
