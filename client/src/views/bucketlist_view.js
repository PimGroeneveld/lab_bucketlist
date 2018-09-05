const PubSub = require('../helpers/pub_sub.js');

const BucketListView = function (container) {
  this.container = container
};

BucketListView.prototype.render = function (bucketlist) {
  const bucketlistContainer = document.createElement('div');
  bucketlistContainer.id = 'bucketlist-print'

  const name = this.createName(bucketlist.name);
  bucketlistContainer.appendChild(name);

}

BucketListView.prototype.createName = function (textContent) {
  const name = document.createElement('h3');
  name.textContent = textContent;
  return name;
};
