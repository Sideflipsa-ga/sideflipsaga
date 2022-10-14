function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

for (var i=0; i<10; i++) {
    console.log( random_rgba() );
    document.body.style.backgroundColor = rgba;
}
