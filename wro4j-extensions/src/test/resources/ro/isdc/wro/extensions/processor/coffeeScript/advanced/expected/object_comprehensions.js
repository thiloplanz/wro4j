(function() {
  var age, ages, child, yearsOld;

  yearsOld = {
    max: 10,
    ida: 9,
    tim: 11
  };

  ages = (function() {
    var results;
    results = [];
    for (child in yearsOld) {
      age = yearsOld[child];
      results.push(child + " is " + age);
    }
    return results;
  })();

}).call(this);