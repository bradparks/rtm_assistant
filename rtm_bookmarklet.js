//http://www.rememberthemilk.com/forums/tips/3133/

javascript:(function(){h='m.rememberthemilk.com';p='/add';if(window.getSelection){t=window.getSelection();}else%20if(document.getSelection){t=document.getSelection();}else%20if(document.selection){t=document.selection.createRange().text;};cp='http://'+h+p+'?name='+((null==t||t==""||t==undefined)?encodeURIComponent(document.title):t)+'&url='+encodeURIComponent(location.href);w=window.open(cp,'addwindow','status=no,toolbar=no,width=250,height=560,resizable=yes');setTimeout(function(){w.focus();},500);})();
