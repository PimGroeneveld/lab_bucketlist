const PubSub = require('../helpers/pub_sub.js');

const BucketListView = function (container) {
  this.container = container
};

BucketListView.prototype.render = function (bucketlist) {
  const bucketlistContainer = document.createElement('div');
  bucketlistContainer.id = 'bucketlist-print';

  const name = this.createName("Name", bucketlist.name);
  console.log('bucketlist', bucketlist);

  bucketlistContainer.appendChild(name);

  const completed = this.createCompleted("Completed", bucketlist.completed);
  bucketlistContainer.appendChild(completed);

  this.container.appendChild(bucketlistContainer)
  // console.log(bucketlist);
};

BucketListView.prototype.createName = function (label, text) {
  // console.log('createName', text);
  const name = document.createElement('h3');
  name.textContent = `${label}: ${text}`;
  return name;
};

BucketListView.prototype.createCompleted = function (label, text) {
  const completed = document.createElement('p');
  completed.textContent = `${label}: ${text}`;
  return completed;


  // console.log(completed);
};

module.exports = BucketListView;
