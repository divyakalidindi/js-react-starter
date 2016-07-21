import React, { Component } from 'react';
// import Welcome from './welcome';
import Immutable from 'immutable';
import Note from './note';
import NoteBar from './notebar';

// example class based component (smart component)
export default class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map(),
    };
    this.noteId = 1;

    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
    this.testmethod = this.testmethod.bind(this);
  }

  componentWillMount() {
    this.createNewNote('testing');
  }
  deleteNote(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  testmethod() {
    console.log('came here');
  }
  updateNote(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
  }

  createNewNote(title) {
    console.log(title);
    const id = this.noteId;
    const note = {
      title,
      text: '',
      x: 20,
      y: 20,
      zIndex: this.noteId,
    };
    console.log(id);
    this.noteId++;
    this.setState({
      notes: this.state.notes.set(id, note),
    });
  }


  render() {
    this.testmethod();
    console.log(this.state.notes);
    return (
      <div>
        <NoteBar newNote={this.createNewNote} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return (
            <Note updateNote={this.updateNote}
              onDel={this.deleteNote} note={note} key={id} id={id}
            />
          );
        }
      )}
      </div>
  );
  }}
