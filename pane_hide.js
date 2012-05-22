// "THE BEER-WARE LICENSE" (Revision 42):
// <thenoviceoof@gmail.com> wrote this stuff. As long as you retain this
// notice you can do whatever you want with this stuff. If we meet some
// day, and you think this stuff is worth it, you can buy me a beer in
// return.  - Nathan Hwang

var editor = document.getElementById("docs-editor");
var workspace = document.getElementById("workspace");
var pane = editor.getElementsByTagName("td")[0];

pane.style.display = "none";
// a hack, since we can't get at the code that centers
workspace.style.width = "100%";
