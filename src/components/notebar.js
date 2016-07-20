import React, { Component } from 'react';

class NoteBar extends Component {
  constructor(props) {
    super(props);
    this.state = { newNoteTitle: '' };
    // this.createNewNote = this.createNewNote.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      newNoteTitle: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input newNoteTitle={this.state.newNoteTitle} onChange={this.onInputChange} placeholder={"Change title!"} />
        <div noteClicked={this.createNewNote}>"Submit!"</div>
      </div>
    );
  }
}

export default NoteBar;
