module.exports = {
  generateRandomString,
  logResponse
};

function generateRandomString(context, events, done) {
  context.vars.randomString = Math.random().toString(36).substring(7);
  return done();
}

function logResponse(requestParams, response, context, ee, next) {
  if (response.statusCode !== 200 && response.statusCode !== 201) {
    console.log(`Error: ${response.statusCode} - ${response.body}`);
  }
  return next();
}
