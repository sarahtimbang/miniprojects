<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Text Editor</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="toolbar">
    <button onclick="execCmd('bold')">Bold</button>
    <button onclick="execCmd('italic')">Italic</button>
    <button onclick="execCmd('underline')">Underline</button>
    <button onclick="execCmd('strikeThrough')">Strike Through</button>
    <button onclick="changeFontSize()">Font Size</button>
    <button onclick="changeBackground()">Background</button>
    <button onclick="insertImage()">Insert Image</button>
    <button onclick="saveAs()">Save As</button>
    <button onclick="startDictation()">Start Dictation</button>
  </div>
  <div id="editor" contenteditable="true"></div>
  <script src="script.js"></script>
</body>
</html>
