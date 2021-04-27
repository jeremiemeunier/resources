function editorTools(name, arg) {
  
  if(typeof arg === 'undefined') {
    arg = '';
  }
  
  switch(name){
    case "createLink": arg = prompt("Quelle est l'adresse du lien ?"); break;
    case "insertImage": arg = prompt("Quelle est l'adresse de l'image ?"); break;
    case "insertVideos":
      results = prompt("Indiquez une URL de vidéos Youtube")
      arg = '<iframe width="100%" height="auto" class="" src="https://www.youtube.com/embed/' + results.substring(32) + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
  }
  
  //Execution of the command
  document.execCommand(name, false, arg);
}

var editor = document.querySelector('[data-editor]');

if(editor !== null) {
  var editorTranslater = document.querySelector('[data-editor-translater]');
  editor.addEventListener('keydown', function() {

    editorTranslater.value = editor.innerHTML;
  })
  
  editor.addEventListener('focusout', function() {

    editorTranslater.value = editor.innerHTML;
  })
}

function EditorAnchor() {
  var sel = document.getSelection().extentNode.parentNode;
  console.log(document.getSelection());
  console.log(sel);
  sel.setAttribute('id', prompt("Quelle ancre souhaitez vous lui attribuer ?"));
}