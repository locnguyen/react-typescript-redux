
const context = require.context(__dirname + '/src', true, /\.spec\.tsx/);
context.keys().forEach(context);