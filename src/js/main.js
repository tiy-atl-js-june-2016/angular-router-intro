// Import AngularJS & 3rd Party Modules
import angular from 'angular';
import 'angular-ui-router';

// Import our Config
import { config } from './config';

// Import Controllers
import { AddController } from './controllers/add.controller';
import { HomeController } from './controllers/home.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController);