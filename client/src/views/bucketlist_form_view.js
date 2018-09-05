const PubSub = require('../helpers/pub_sub.js')

const BucketListFormView = function (form) {
  this.form = form;
};

BucketListFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketListFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucketList = this.createBucketList(evt.target);
  PubSub.publish('BucketListView:bucketlist-submitted', newBucketList);
  evt.target.reset();
};

BucketListFormView.prototype.createBucketList = function (form) {
  const newBucketList = {
    name: form.name.value,
    completed: form.completed.value
  };
  console.log("form", form);
  return newBucketList;
};

module.exports = BucketListFormView;
