var editor = document.getElementById("docs-editor");
var workspace = document.getElementById("workspace");
var pane = editor.getElementsByTagName("td")[0];

pane.style.display = "none";
// a hack, since we can't get at the code that centers
workspace.style.width = "100%";
