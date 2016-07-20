import React, { Component } from 'react';
import Welcome from './welcome';
import Immutable from 'immutable';
import Note from './note';
import NoteBar from './notebar';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map(),
    };
    this.noteId = 0;
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  updateNote() {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
  }

  createNewNote(title) {
    // const id = this.noteId;
    const note = {
      title: '',
      text: '',
      x: 0,
      y: 0,
      // zIndex: this.noteId,
      zIndex: 0,
    };
  this.noteId++;
  this.setState( {
    notes: this.state.notes.set(id, note),
  });
}

render() {
  return (
    <div>
      <NoteBar newNote = {title => this.createNewNote(title)}
      {this.states.notes.entrySeq().map(([id, note]) => {
        return (
          <Note note={note} key = {id} id = {id}/>
        );
      }
    )}
    </div>
  );
}}

export default App;
