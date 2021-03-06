/**
 * @ngdoc function
 * @name superProductivity.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the superProductivity
 */

(function () {
  'use strict';

  angular
    .module('superProductivity')
    .controller('HelpCtrl', HelpCtrl);

  /* @ngInject */
  function HelpCtrl($mdDialog, theme, $state, IS_ELECTRON, template, $localStorage) {
    let vm = this;
    vm.task = {};
    vm.theme = theme;
    vm.IS_ELECTRON = IS_ELECTRON;
    vm.keys = $localStorage.keys;

    if (template === 'PAGE') {
      vm.helpTpl = 'scripts/dialogs/help/help-' + $state.current.name + '.html';
    } else {
      vm.helpTpl = 'scripts/dialogs/help/help-' + template + '.html';
    }

    vm.cancel = () => {
      $mdDialog.hide();
    };

    vm.exampleTask = {
      title: 'Example task',
      timeSpent: moment.duration(1, 'hour'),
      timeEstimate: moment.duration(2, 'hour'),
      progress: 50,
      showNotes: true,
      isUpdated: true,
      originalComments: [
        '[admin]: yes comments from Jira are shown too <3',
        '[user]: really? that could be useful!'
      ],
      originalChangelog: [
        {
          author: 'Some Author',
          created: moment(),
          items: [
            {
              field: 'jiraField',
              toString: 'Changed to value'
            }
          ]
        }
      ],
      originalAttachment: [
        'Attachment loaded from jira'
      ],
      status: 'IN_PROGRESS',
      originalStatus: {
        name: 'In Progress'
      },
      notes: `**Some example notes**
      
      * supports markdown
      * list item
      `
    };
    vm.exampleTasks = [
      {
        title: 'Example task'
      }
    ]
  }
})();
