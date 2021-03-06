const redirectMap = new Map([
  ["github", "https://github.com/j-dogcoder"],
  ["instagram", "https://instagram.com/jasper_mayone"],
  ["photo-instagram", "https://instagram.com/jasper.mayone.photography"],
  ["reddit", "https://www.reddit.com/user/j-dogcoder"],
  ["stackoverflow", "https://stackoverflow.com/users/15201146/j-dogcoder"],
  ["twitch", "https://www.twitch.tv/Jdogcoder0803"],
  ["twitter", "https://twitter.com/jdogcoder"],
  ["pinterest", "https://www.pinterest.com/jdogcoder/"]
]);

async function handleRequest(req) {
  const location = redirectMap.get(new URL(req.url).pathname.split("/")[1]);
  if (location) {
    return Response.redirect(location, 301);
  }
  return Response.redirect("https://jaspermayone.com/404.html", 301);
}

addEventListener("fetch", async (event) => {
  event.respondWith(handleRequest(event.request));
});
