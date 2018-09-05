const BucketListFormView = require('./views/bucketlist_form_view.js');
const BucketListGridView = require('./views/bucketlist_grid_view.js');
const BucketList = require('./models/bucketlist.js');

document.addEventListener('DOMContentLoaded', () => {

  // const bucketlistForm = document.querySelector('form#bucketlist-form');
  // const bucketlistFormView = new BucketListFormView(bucketlistForm);
  // bucketlistFormView.bindEvents();
  //
  // const bucketlistContainer = document.querySelector('div#bucketlist-printed');
  // const bucketlistGridView = new BucketListGridView(bucketlistContainer);
  // bucketlistGridView.bindEvents();

  const bucketlist = new BucketList();
  bucketlist.bindEvents();
  bucketlist.getData();
})
