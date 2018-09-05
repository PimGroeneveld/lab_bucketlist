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
  PubSub.publish('SightingView:sighting-submitted', newSighting);
  evt.target.reset();
};

SBucketListFormView.prototype.createBucketList = function (form) {
  const newBucketList = {
    name: form.name.value,
    status: form.status.value,
  };

  return newBucketList;
};

module.exports = BucketListFormView;
