var _ = require('lodash');

var localEnvVars = {
  TITLE:          'Practice To Do App',
  SAFE_TITLE:     'practice-todo-app',
  COOKIE_SECRET:  'notsosecretnowareyou',
  SESSION_SECRET: 'anotherfoolishsecret',
  TOKEN_SECRET:   'andafinalsecretsadasitis'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
