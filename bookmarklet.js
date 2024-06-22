
(
    function(window, document) {

matchstr1 = 'matchme1';
matchstr2 = 'matchme2';
matchstr3 = 'matchme3';

if (window.location.href.indexOf("github.com") >=0)
{
matchstr1 = '/issues/';
matchstr2 = '/pull/';
matchstr3 = '/discussions/';
}
if (window.location.href.indexOf("kaggle.com") >=0)
{
matchstr1 = 'https://www.kaggle.com/code/';
matchstr2 = '/discussion/';
}
if (window.location.href.indexOf("gitlab.com") >=0)
{
matchstr1 = '/merge_requests/';
}



openLinks=true; /* or write links to new win */

nopenStr="3";
skipStr="0";
splitChar=" ";
nopenStrOrig = prompt("open N links, <N pinned discussions/notebooks to skip>:");
if (nopenStrOrig.indexOf(splitChar)>=0) {
    nopenStr = nopenStrOrig.split(splitChar)[0];
    skipStr = nopenStrOrig.split(splitChar)[1];
} else {
    nopenStr=nopenStrOrig;
}
console.log("blet_open_selected_links_kaggle.ns6blet:5 nopenStr="+JSON.stringify(nopenStr));
console.log("blet_open_selected_links_kaggle.ns6blet:6 skipStr="+JSON.stringify(skipStr));

var n_to_open, dl, dll, i;
dl = document.links;
dll = dl.length;

skipn =parseInt(skipStr);
skipped=0;
j=0;
n=parseInt(nopenStr);
n = n <=0 ? 1 : n;
console.log("blet_open_selected_links_kaggle.ns6blet:18 skipn="+JSON.stringify(skipn));
console.log("blet_open_selected_links_kaggle.ns6blet:19 j="+JSON.stringify(j));
console.log("blet_open_selected_links_kaggle.ns6blet:20 n="+JSON.stringify(n));

            if (!openLinks) {
              newWin = window.open();
            }


var seen= new Set();

for (i=0; i< dll && j < n; i++){
    let url=dl[i].href;
    console.log("blet_open_selected_links_kaggle.ns6blet:29 i="+JSON.stringify(i));/*or use custome log fn snippet*/

    if (
        (
            url.indexOf(matchstr1) >= 0
                || url.indexOf(matchstr2) >= 0
                || url.indexOf(matchstr3) >= 0
        )
            && url.indexOf("#") == -1 /*eg new comments link*/
            && url.indexOf("pt1001") == -1
            && !seen.has(url)
    )
    {
        if (skipped < skipn){
            skipped++;
        }else {
            if (url.indexOf("/comments") >= 0)
            {
                url = url.substring(0,url.length-9);
            }
            console.log("blet_open_selected_links_kaggle.ns6blet:29  url="+JSON.stringify( url));/*or use custome log fn snippet*/

            seen.add(url);
            if (openLinks) {
            window.open(url);
            }
            else
            {
              newWin.document.write('<a href=\'' +url+ '\'>'+dl[i].innerHTML+'</a><br>");
              console.log('<a href=\'' +url+ '\'>'+dl[i].innerHTML+'</a><br>");
            }

            j++;
        }
    }else{
        console.log("fail check: blet_open_selected_links_kaggle.ns6blet:29  url="+JSON.stringify( url));/*or use custome log fn snippet*/

    }
}

            if (!openLinks) {
              newWin = document.close();
            }

    })(window, document);
