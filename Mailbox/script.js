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

//make #body editable
const content = document.getElementById('body');
content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('#dropZone');
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

//print email
function printDiv(id) {
	var print = document.getElementById(id).innerHTML;
	var original = document.body.innerHTML;
	document.body.innerHTML = print;
	window.print();
	document.body.innerHTML = original;
}

//saving message to file
const filename = document.getElementById('filename');
const mailContent = document.getElementById('message');
function fileHandle(value) {
	if(value === 'new') {
		mailContent.innerHTML = '';
		filename.value = 'untitled';
	} else if(value === 'txt') {
		const blob = new Blob([content.innerText])
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a');
		link.href = url;
		link.download = `${filename.value}.txt`;
		link.click();
	} else if(value === 'pdf') {
		html2pdf(content).save(filename.value);
	}
}
//grag and drop upload
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
	const dropZoneElement = inputElement.closest(".drop-zone");
  
	dropZoneElement.addEventListener("click", (e) => {
	  inputElement.click();
	});
  
	inputElement.addEventListener("change", (e) => {
	  if (inputElement.files.length) {
		updateThumbnail(dropZoneElement, inputElement.files[0]);
	  }
	});
  
	dropZoneElement.addEventListener("dragover", (e) => {
	  e.preventDefault();
	  dropZoneElement.classList.add("drop-zone--over");
	});
  
	["dragleave", "dragend"].forEach((type) => {
	  dropZoneElement.addEventListener(type, (e) => {
		dropZoneElement.classList.remove("drop-zone--over");
	  });
	});
  
	dropZoneElement.addEventListener("drop", (e) => {
	  e.preventDefault();
  
	  if (e.dataTransfer.files.length) {
		inputElement.files = e.dataTransfer.files;
		updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
	  }
  
	  dropZoneElement.classList.remove("drop-zone--over");
	});
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
	// First time - remove the prompt
	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
	  dropZoneElement.querySelector(".drop-zone__prompt").remove();
	}
  
	// First time - there is no thumbnail element, so lets create it
	if (!thumbnailElement) {
	  thumbnailElement = document.createElement("div");
	  thumbnailElement.classList.add("drop-zone__thumb");
	  dropZoneElement.appendChild(thumbnailElement);
	}
  
	thumbnailElement.dataset.label = file.name;
  
	// Show thumbnail for image files
	if (file.type.startsWith("image/")) {
	  const reader = new FileReader();
  
	  reader.readAsDataURL(file);
	  reader.onload = () => {
		thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
	  };
	} else {
	  thumbnailElement.style.backgroundImage = null;
	}
  }
  

