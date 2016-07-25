import React, { Component } from 'react';
import Immutable from 'immutable';
import Note from './note';
import NoteBar from './notebar';
import * as firebasedb from './firebasedb';

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
  }

  componentWillMount() {
    // this.createNewNote('Welcome!');
  }

  componentDidMount() {
    firebasedb.fetchNotes(notes => {
      const temp = Immutable.Map(notes);
      this.setState({ notes: temp });
    });
  }

  deleteNote(id) {
    // this.setState({
    //   notes: this.state.notes.delete(id),
    // });
    firebasedb.delNotes(id);
  }

  updateNote(id, fields) {
    // this.setState({
    //   notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    // });
    firebasedb.updateNotes(id, fields);
  }

  createNewNote(title) {
    // const id = this.noteId;
    const note = {
      title,
      text: '',
      x: 20,
      y: 20,
      zIndex: this.noteId,
    };
    // this.noteId++;
    // this.setState({
    //   notes: this.state.notes.set(id, note),
    // });
    firebasedb.makeNotes(note);
  }

  render() {
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
