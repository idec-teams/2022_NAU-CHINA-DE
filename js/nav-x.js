// var chgnav, chgli, num, nownum;
// num = -1;
// chgnav = setInterval(allchg, 8)

function chg() {
    allchg();
    var h1 = document.getElementById("h1");
    var h2 = document.getElementById("h2");
    var h3 = document.getElementById("h3");
    var h4 = document.getElementById("h4");
    var h5 = document.getElementById("h5");
    hgt1 = h1.offsetTop;
    hgt2 = h2.offsetTop;
    hgt3 = h3.offsetTop;
    hgt4 = h4.offsetTop;
    hgt5 = h5.offsetTop;
    hgt = document.documentElement.scrollTop;
    var navul = document.getElementsByClassName("navul")[0];
    navwidth = parseInt(window.getComputedStyle(navul, null)['width']);
    if (hgt < hgt1 - 10) {
        var nav;
        // alert(navwidth);
        for (i = 1; i <= 5; i++) {
            nav = document.getElementById("nav" + i);
            nav.className = 'uli cntli';
        }
    } else
    if (hgt >= hgt1 - 10 && hgt < hgt2 - 10) {
        var nav = document.getElementById("nav1");
        nav.className = 'longli';
        // if(parseInt(nva.style.width))
        for (i = 1; i <= 5; i++) {
            if (i != 1) {
                nav = document.getElementById("nav" + i);
                nav.className = 'uli cntli';
            }

        }
    } else
    if (hgt >= hgt2 - 10 && hgt < hgt3 - 10) {
        var nav = document.getElementById("nav2");
        nav.className = 'longli';
        for (i = 1; i <= 5; i++) {
            if (i != 2) {
                nav = document.getElementById("nav" + i);
                nav.className = 'uli cntli';
            }

        }
    } else
    if (hgt >= hgt3 - 10 && hgt < hgt4 - 10) {
        var nav = document.getElementById("nav3");
        nav.className = 'longli';
        for (i = 1; i <= 5; i++) {
            if (i != 3) {
                nav = document.getElementById("nav" + i);
                nav.className = 'uli cntli';
            }

        }
    } else
    if (hgt >= hgt4 - 10 && hgt < hgt5 - 10) {
        var nav = document.getElementById("nav4");
        nav.className = 'longli';
        for (i = 1; i <= 5; i++) {
            if (i != 4) {
                nav = document.getElementById("nav" + i);
                nav.className = 'uli cntli';
            }

        }
    } else
    if (hgt >= hgt5 - 10) {
        var nav = document.getElementById("nav5");
        nav.className = 'longli';
        for (i = 1; i <= 5; i++) {
            if (i != 5) {
                nav = document.getElementById("nav" + i);
                nav.className = 'uli cntli';
            }

        }
    }
}

function allchg() {
    var list = document.getElementsByClassName("cntli");
    var listnum = list.length;
    var tlist = [];
    for (i = 0; i < listnum; i++) {
        tlist.push(document.getElementById("h" + (i + 1)));
    }
    hgt = document.documentElement.scrollTop;
    if (hgt < tlist[0].offsetTop) {
        for (i = 1; i <= listnum; i++) {
            document.getElementById("nav" + i).className = 'uli cntli';
        }
    } else {
        for (i = 1; i < listnum; i++) {
            if (hgt >= tlist[i - 1].offsetTop - 10 && hgt < tlist[i].offsetTop - 10) {
                // alert(i);
                document.getElementById("nav" + (i)).className = 'longli cntli';
                for (j = 1; j <= listnum; j++) {
                    if (j != i) {
                        document.getElementById("nav" + j).className = 'uli cntli';

                    }

                }
            }
        }
        if (hgt >= tlist[listnum - 1].offsetTop - 10) {
            // alert("nav"+(listnum));
            document.getElementById("nav" + (listnum)).className = 'longli cntli';
            for (i = 1; i < listnum; i++) {
                document.getElementById("nav" + i).className = 'uli cntli';
            }
        }
    }
}

// function al() {
//     var a = document.getElementById("h1");
//     var b = document.getElementById("h2");
//     alert(a)
//     alert(a.offsetTop);
//     alert(b.offsetTop);
// }