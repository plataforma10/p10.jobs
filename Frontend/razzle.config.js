const dotenv = require('dotenv');
const fs = require('fs');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config;
    var env;

    if (dev) {
    	env = dotenv.config().parsed;
    } else {
  		env = dotenv.parse(fs.readFileSync('.env.production'))  	
    }

  	appConfig.plugins.push(
      new webpack.DefinePlugin(
      { 
        'process.env.HOST_BACK': JSON.stringify(env.HOST_BACK),
        'process.env.PORT': JSON.stringify(env.PORT),
        'process.env.Facebook': JSON.stringify(env.Facebook) || "/",
        'process.env.Twitter': JSON.stringify(env.Twitter) || "/",
        'process.env.Linkedin': JSON.stringify(env.Linkedin) || "/",
        'process.env.Instagram': JSON.stringify(env.Instagram) || "/"
      })
	);
	
	return appConfig;
  },
};