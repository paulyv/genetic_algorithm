var initial_fitness = 0;
var delta_fitness = 0;
var percentage_done = 0;

$(document).ready(function() {

    $("#button").bind('click', function(){
      var target = $('#string').val();
      //var source = Array(target.length + 1).join("x");
      var source = generateRandomSource(target.length);
      $('#result').text(' ');
      $('.progress').css('visibility', 'visible');
      start(source, target);
    });
});

function generateRandomSource(len) {
  var possible_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#€%&/(),.!=?+-_*^';
  var starting_str = '';
  for(var i = 0; i < len; i++) {
    starting_str += possible_chars.charAt(Math.floor(Math.random() * possible_chars.length));
  }
  return starting_str;
}

function start(source, target) {
  var fitval = fitness(source, target);
  initial_fitness = fitval;
  var count = 0;

  var interval = setInterval(function() {
  count++;

  var m = mutate(source);
  var fitval_m = fitness(m, target);

  if(fitval_m === 0) {
    clearInterval(interval);
    var secs = (count * 35) / 1000;
    $('#result').text("Done in " + secs + " seconds.");
  }

  if(fitval_m < fitval) {
     fitval = fitval_m;
     source = m;
    // $('#genetic').text(count + " " + fitval_m + " " + m);
     $('#evo').text(count);
     $('#fit').text(fitval_m);
     $('#cur').text(m);

     delta_fitness = (initial_fitness - fitval_m);
     percentage_done = (delta_fitness / initial_fitness) * 100;

     $('.progress-bar').css('width', percentage_done + '%').attr('aria-valuenow', percentage_done);
     $('.progress-bar').text(percentage_done.toFixed(1) + '%');
  }
}, 35);
}

function fitness(source, target) {
  var fitval = 0;
  for (var i = 0; i < source.length; i++) {
    fitval += Math.abs(source.charCodeAt(i) - target.charCodeAt(i));
  }
  return fitval;
}

function mutate(source) {
  var charpos = Math.floor(Math.random() * (source.length));
  var parts = source.split("");
  var delta = Math.random() < 0.5 ? -1 : 1;
  var new_char = String.fromCharCode(source.charCodeAt(charpos) + delta);
  parts[charpos] = new_char;
  return parts.join('');
}
