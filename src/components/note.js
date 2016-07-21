import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      // id: props.noteId,
      // note: props.note,
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
      return <Textarea value={this.props.note.text} onChange={this.updateText} />;
    } else {
      return <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />;
    }
  }

  renderEdits() {
    if (this.state.isEditing) {
      return <i onClick={() => this.setState({ isEditing: false })} className="fa fa-check fa-3x" />;
    } else {
      return <i onClick={() => this.setState({ isEditing: true })} className="fa fa-pencil fa-3x" />;
    }
  }

// del={(id) => this.props.deleteNote(id)}
// provided by Tim on assignment page
  render() {
    console.log(this.props.note);
    const title = this.props.note.title;
    const { x, y, zIndex } = this.props.note;
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
            <div className="title">
              <h1>{title}</h1>
              {this.renderEdits()}
            </div>
            <div className="pictures">
              <h4>
                <i onClick={this.onDelete} className="fa fa-trash-o fa-3x" id="trash" />
                <i className="note-mover fa fa-arrows-alt fa-3x" id="move" />
              </h4>
            </div>
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
