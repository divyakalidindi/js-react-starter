import React, { Component } from 'react';
import Draggable from 'react-draggable';
import textarea from 'react-textarea-autosize';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);
    // init component state
    this.state = {
      isEditing: false,
    };

    this.handleDrag = this.handleDrag.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.updateText = this.updateText.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderEdits = this.renderEdits.bind(this);
  }

  onDelete() {
    this.props.onDel(this.props.id);
  }

  handleDrag(e, ui) {
    this.props.updateNote(this.props.id, { x: ui.x, y: ui.y });
  }

  updateText(event) {
    this.props.updateNote(this.props.id, { text: event.target.value });
  }

  renderText() {
    if (this.state.isEditing) {
      return <textarea value={this.props.note.text} onChange={this.updateText} />;
    } else {
      return <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />;
    }
  }

  renderEdits() {
    if (this.state.isEditing) {
      return <i onClick={() => this.setState({ isEditing: false })} className="fa fa-check fa-2x" />;
    } else {
      return <i onClick={() => this.setState({ isEditing: true })} className="fa fa-pencil fa-2x" />;
    }
  }

// provided by Tim on assignment page
  render() {
    const title = this.props.note.title;
    const { x, y } = this.props.note;
    return (
      <Draggable
        handle=".note-mover"
        grid={[25, 25]}
        defaultPosition={{ x: 20, y: 20 }}
        position={{ x, y }}
        onStart={this.onStart}
        onDrag={this.handleDrag}
        onStop={this.onStop}
      >
        <div className="main">
          <div className="title-bar">
            <h1>{title}</h1>
            {this.renderEdits()}
            <i onClick={this.onDelete} className="fa fa-trash-o fa-2x" />
            <i className="note-mover fa fa-arrows-alt fa-2x" id="move" />
          </div>
          <div className="text-area">
            {this.renderText()}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
