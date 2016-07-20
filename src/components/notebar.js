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

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ newNoteTitle: event.target.value });
    // console.log(this.newNoteTitle);
  }

  createNote() {
    console.log(this.state.newNoteTitle);
    this.props.newNote(this.state.newNoteTitle);
  }

// newNoteTitle={this.state.newNoteTitle}
  render() {
    return (
      <div>
        <input value={this.state.newNoteTitle} onChange={this.onInputChange} placeholder={"Change title!"} />
        <div onClick={this.createNote}>Create!</div>
      </div>
    );
  }
}

export default NoteBar;
