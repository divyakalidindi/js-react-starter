import React, { Component } from 'react';
import Draggable from 'react-draggable';

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
  }


  onDelete() {
    this.props.onDel(this.id);
  }

  handleDrag(e, ui) {
    // const { x, y } = this.state.note;
    // this.setState({
    //   note: {
    //     x: x + ui.deltaX,
    //     y: y + ui.deltaY,
    //     title: this.props.note.title,
    //     zIndex: this.props.note.zIndex,
    //     text: this.props.note.text,
    //   },
    // });
    // this.props.testmethod();
    this.props.updateNote(this.props.id, { x: ui.x, y: ui.y });
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
            </div>
            <div className="pictures">
              <h4>
                <i onClick={this.onDelete} className="fa fa-trash-o" />
                <i className="note-mover fa fa-arrows-alt" />
              </h4>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
