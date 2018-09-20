function test(){
    console.log("test()");
}
    var id = setTimeout(test, 1000);

    var head = document.querySelector('head');
    var script = document.createElement('script');
    script.src = 'app2.js';
    // <script src='app1.js'></script>
    head.appendChild(script);