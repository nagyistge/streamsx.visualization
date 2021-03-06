import sideNavTemplate from './sidenav.html';

export const sideNavComponent = {
  bindings: {
    items: '=',
    itemsControl: '=',
    item: '=',
    itemControls: '=',
    parentItems: '=',
    readOnly: '<'
  },
  templateUrl: sideNavTemplate,
  controller: ['$timeout', '$scope', function($timeout, $scope) {
    let self = this;
    (this.init = () => {
      self.showAreYouSure = false; // no we do not want to delete this... and we don't want to see deletion option...
    })();

    $scope.$watch('$ctrl.item.name', (newVal) => {
      self.newItemName = newVal;
    });

    this.brieflyShowAreYouSure = () => {
      self.showAreYouSure = true;
      self.briefTimer = $timeout(() => {
        self.showAreYouSure = false;
      }, 3000); // 3 seconds
    };

    this.brieflyShowExported = () => {
      self.showExported = true;
      self.briefTimer = $timeout(() => {
        self.showExported = false;
      }, 3000); // 3 seconds
    };

    this.deleteItem = () => {
      $timeout.cancel(self.briefTimer);
      self.itemControls.deleteItem();
    };
  }]
}
