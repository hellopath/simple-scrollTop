module.exports = function(position) {

	function getScrollTop() {
		if(typeof pageYOffset != 'undefined'){
	        //most browsers except IE before #9
	        return pageYOffset;
	    }else{
	        var B= document.body; //IE 'quirks'
	        var D= document.documentElement; //IE with doctype
	        D= (D.clientHeight) ? D : B;
	        return D.scrollTop;
	    }
	}

	function setScrollTop(scrollTop) {
		// Internet Explorer and Firefox
		document.documentElement.scrollTop = scrollTop;
		// Chrome
		document.body.scrollTop = scrollTop;
	}

	if(position == undefined) {
		return getScrollTop()
	}else{
		setScrollTop(position)
	}
}
