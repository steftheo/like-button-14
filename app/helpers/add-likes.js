import Ember from 'ember';

export function addLikes(params/*, hash*/) {
  const likes = params[0];
  return Math.round(likes + 1);
}

export default Ember.Helper.helper(addLikes);
