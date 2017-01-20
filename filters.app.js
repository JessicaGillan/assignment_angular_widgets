widgets.filter('paginate', function() {
  return function(items, start, length){
    if(items.length < length) return items;

    return items.slice(start, start + length);
  }

});
