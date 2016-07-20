import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Note extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: this.notes.title,
      x: this.notes.x,
      y: this.notes.y,
      zIndex: this.notes.zIndex,
      isEditing: false,
      activeDrags: 0,
    };
  }

// examples from react-draggable github posted on assignment page

  onStart() {
    this.setState({ activeDrags: ++this.state.activeDrags });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.note;
    this.setState({
      note: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  }


// provided by Tim on assignment page
  render() {
    return (
      <Draggable
        handle=".note-mover"
        grid={[25, 25]}
        defaultPosition={{ x: 20, y: 20 }}
        position={{ x: this.note.state.x, y: this.note.state.y }}
        onStart={this.onStart}
        onDrag={this.handleDrag}
        onStop={this.onStop}
      >
        <div className=".note-mover">
          <h1>${this.state.note.title}</h1>
          <i onClick={this.onDeleteClick} className="fa fa-trash-o" />
        </div>
      </Draggable>
    );
  }
}

export default Note;
