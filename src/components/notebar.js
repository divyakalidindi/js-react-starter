import React, { Component } from 'react';

class NoteBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  // using event
  onInputChange(event) {
    this.setState({ newNoteTitle: event.target.value });
  }

  createNote() {
    this.props.newNote(this.state.newNoteTitle);
  }

  render() {
    return (
      <div>
        <input value={this.state.newNoteTitle} onChange={this.onInputChange} placeholder={"new note title"} />
        <button onClick={this.createNote}>create</button>
      </div>
    );
  }
}

export default NoteBar;
