const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url) {
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
};


BucketList.prototype.bindEvents = function() {
  PubSub.subscribe('BucketListView:bucketlist-submitted', (evt) => {
    this.postBucketList(evt.detail);
  })
};

BucketList.prototype.postBucketList = function(bucketlist) {
  this.request.post(bucketlist)
  .then((bucketlist) => {
    PubSub.publish('BucketList:data-loaded', bucketlist);
  })
  .catch(console.error)
}


BucketList.prototype.getData = function () {
  this.request.get()
  .then((bucketlist) => {
    PubSub.publish('BucketList:data-loaded', bucketlist);
  })
  .catch(console.error)
}

module.exports = BucketList;
