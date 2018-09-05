const PubSub = require('../helpers/pub_sub.js');
const BucketListView = require('./bucketlist_view.js');

const BucketListGridView = function (container) {
  this.container = container;
};

BucketListGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    this.render(evt.detail);
  })
};

BucketListGridView.prototype.render = function (bucketlist) {
  this.container.innerHTML = '';
  const bucketlistView = new BucketListView(this.container);
  bucketlist.forEach((bucketlist) => {
    bucketlistView.render(bucketlist)
  })
};

module.exports = BucketListGridView;
