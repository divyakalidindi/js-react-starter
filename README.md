#Readme - HW #3 Part 1
####Page: http://divyanotes.surge.sh/


A post-it note app that creates notes that can display contents (markdown, text, and gifs) and can be dragged, edited, and deleted.

We used React to make separate components, one for notes, one for the notebar (where notes were created), and one for the App.

### Inserting Gif
![](http://g.recordit.co/7Yk2AXRuHG.gif)

### Editing Markdown
![](http://g.recordit.co/z9gRva28X6.gif)

### Deleting
![](http://g.recordit.co/nY6aIf6qbd.gif)

### Issues
One problem I encountered was the resizing of the notes when larger images or gifs were put in. I fixed this by changing the css file, ultimately making the text area inherit the width and height, as well as resize both fields, and I also changed position of the note to `fixed`.

Another problem was when the note was being dragged, the position was not being updated correctly; this happened because I did not include the updateNote method in the render function in app.js. 
