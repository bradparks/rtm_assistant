var openRtmWindow = function(tab, selection, date)
{
	var name = selection || tab.title

	var rtmUrl='http://m.rememberthemilk.com/add?name=' +
		encodeURIComponent(name) + '&url=' + encodeURIComponent(tab.url) +
		'&due=' + date

	window.open(rtmUrl, 'addwindow',
		'status=no,toolbar=no,width=250,height=560,resizable=yes')
}

chrome.browserAction.onClicked.addListener(function(tab)
{
	chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"},
		function(result)
		{
			var text = result && result[0]
			var date = text && chrono.parseDate(text)
			openRtmWindow(tab, text, date)
		})
});
