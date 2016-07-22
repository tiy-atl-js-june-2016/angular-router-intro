// Import AngularJS & 3rd Party Modules
import angular from 'angular';
import 'angular-ui-router';

// Import our Config & Constants
import { config } from './config';
import { appConstant } from './app.constant';

// Import Controllers
import { AddController } from './controllers/add.controller';
import { HomeController } from './controllers/home.controller';
import { SingleController } from './controllers/single.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', appConstant)
  .controller('HomeController', HomeController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController);