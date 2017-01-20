widgets.filter('photoFilterFilter', function() {
  return function(images, igFilter) {
    if (!igFilter) { return images; }
    var filteredImages = [];

    angular.forEach(images, function(image) {
      if (image.filter === igFilter) {
        filteredImages.push(image);
      }
    });

    return filteredImages;
  }
});

widgets.filter('photoHashtagFilter', function() {
  return function(images, igHashtags) {
    if (!igHashtags) { return images; }
    var filteredImages = [];
    var hashtags = {}

    for(var i = 0; i < igHashtags.length; i++){
      hashtags[igHashtags[i]] = true;
    }

    angular.forEach(images, function(image) {
      var include = false;
      for(var i = 0; i < image.tags.length; i++){
        if(hashtags[image.tags[i]]){
          include = true;
          break;
        }
      }
      if(include) filteredImages.push(image);
    });

    return filteredImages;
  }
});
