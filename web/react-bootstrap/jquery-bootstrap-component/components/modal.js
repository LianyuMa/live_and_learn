'use strict';

var BootstrapModal = React.createClass({
  componentDidMount : function () {
    // When the component is mount into the DOM
    $(this.refs.root).modal({keyboard: true, show: false});

    // Capture the Bootstrap is mount events
    $(this.refs.root).on('hidden.bs.modal', this.handleHidden);
  },
  componentWillUnmount: function() {
    $(this.refs.root).off('hidden.bs.modal', this.handleHidden);
  },
  close: function () {
    $(this.refs.root).modal('hide');
  },
  open: function () {
    $(this.refs.root).modal('show');
  },
  render: function () {
    var confirmButton = null;
    var cancelButton = null;
    if (this.props.confirm) {
      confirmButton = (
        <bootstrapButton onClick={this.handleConfirm} className="btn btn-primary" role="button">
          {this.props.confirm}
        </bootstrapButton>
      )
    }
    if (this.props.cancel) {
      cancelButton = (
        <bootstrapButton onClick={this.handleCancel} className="btn btn-secondary" role="button">
          {this.props.cancel}
        </bootstrapButton>
      );
    }

    return (
      <div className="modal fade" ref="root">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.handleCancel}>&times;</button>
              <h3>{this.props.title}</h3>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              {cancelButton}
              {confirmButton}
            </div>
          </div>
        </div>
      </div>
    );
  },
  handleCancel: function() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },
  handleConfirm: function() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  },
  handleHidden: function() {
    if (this.props.onHidden) {
      this.props.onHidden();
    }
  }
});

var ReactBootstrapModalDialog = React.createClass({
  handleCancel: function() {
    if (confirm('Are you sure you want to cancel the dialog info?')) {
      this.refs.modal.close();
    }
  },
  render: function() {
    var modal = null;
    modal = (
      <BootstrapModal
        ref="modal"
        confirm="OK"
        cancel="Cancel"
        onCancel={this.handleCancel}
        onConfirm={this.closeModal}
        onHidden={this.handleModalDidClose}
        >
        This is a React component powered by jQuery and Bootstrap!        
      </BootstrapModal>
    );
    return (
      <div className="modalbtn">
        {modal}
        <bootstrapButton onClick={this.openModal} className="btn btn-primary" role="button">
          Open modal
        </bootstrapButton>
      </div>
    );
  },
  openModal: function() {
    this.refs.modal.open();
  },
  closeModal: function() {
    this.refs.modal.close();
  },
  handleModalDidClose: function() {
    alert("The modal has been dismissed!");
  }
});

ReactDOM.render(<ReactBootstrapModalDialog />, document.getElementById('modal'));
