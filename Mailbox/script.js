function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}


const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})
//drag and drop file upload
function dragOverHandler(ev) {
	console.log('File(s) in drop zone');
	content.classList.add("contentDrag");
	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();
  }

  function dropHandler(ev) {
	console.log('File(s) dropped');
	content.classList.remove("contentDrag");
	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();

	if (ev.dataTransfer.items) {
	  // Use DataTransferItemList interface to access the file(s)
	  for (var i = 0; i < ev.dataTransfer.items.length; i++) {
		// If dropped items aren't files, reject them
		if (ev.dataTransfer.items[i].kind === 'file') {
		  var file = ev.dataTransfer.items[i].getAsFile();
		alert('... file[' + i + '].name = ' + file.name);
		}
	  }
	} else {
	  // Use DataTransfer interface to access the file(s)
	  for (var i = 0; i < ev.dataTransfer.files.length; i++) {
		alert('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
	  }
	}
	// Pass event to removeDragData for cleanup
	removeDragData(ev)
  }

  function removeDragData(ev) {
	content.classList.remove("contentDrag");
	if (ev.dataTransfer.items) {
	  // Use DataTransferItemList interface to remove the drag data
	  ev.dataTransfer.items.clear();
	}
  }
  //print email
  function printDiv(id) {
	var print = document.getElementById(id).innerHTML;
	var original = document.body.innerHTML;
	document.body.innerHTML = print;
	window.print();
	document.body.innerHTML = original;
}