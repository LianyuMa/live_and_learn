var style = {color: "#ffaaaa"};
var max_Char = '140';

var AddTicket = React.createClass({
  handleSubmitEvent: function (event) {
    event.preventDefault();

    var values = {
      date: new Date(),
      email: this.refs.email.value.trim(),
      issueType: this.refs.issueType.value.trim(),
      department: this.refs.department.value.trim(),
      comment: this.refs.comment.value.trim()
    };
    this.props.addTicketList(values);

    console.log("Email--"+this.refs.email.value.trim());
    console.log("Issue Type--"+this.refs.issueType.value.trim());
    console.log("Department--"+this.refs.department.value.trim());
    console.log("Comments--"+this.refs.comment.value.trim());
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <div className="form-group">
          <label htmlFor="email">Email <span style={style}>*</span></label>
          <input type="text" id="email" className="form-control" placeholder="Enter email" required ref="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="issueType">Issue Type <span style={style}>*</span></label>
          <select className="form-control" id="issueType" required ref="issueType">
            <option value="">-----Select-----</option>
            <option value="Access Related Issue">Access Related Issue</option>
            <option value="Email Related Issues">Email Related Issues</option>
            <option value="Hardware Request">Hardware Request</option>
            <option value="Health & Safety">Health & Safety</option>
            <option vaule="Network">Network</option>
            <option value="Intranet">Intranet</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department">Assign Department <span style={style}>*</span></label>
          <select className="form-control" id="department" required ref="department">
            <option value="">-----Select-----</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Development">Development</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments <span style={style}>*</span></label>(<span id="maxlength">200</span> characters left)
          <textarea className="form-control" rows="3" id="comments" required ref="comment"></textarea>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" className="btn btn-link">Cancel</button>
        </div>
      </form>
    );
  }
});



var AddTicketsForm = React.createClass({
  getInitialState: function() {
    return {
      list: {}
    };
  },
  updateList: function(newList) {
    this.setState({
      list: newList
    })
  },
  addTicketList: function (item) {
    var list = this.state.list;

    list[item] = item;
    // pass the item.id in array if we are using key attribute.
    this.updateList(list);
  },
  render: function () {
    var items = this.state.list;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <List items={items} />
            <AddTicket addTicketList={this.addTicketList} />
          </div>
        </div>
      </div>
    );
  }
});

// AddTicketsForm components code ends here

var List = React.createClass({
  getListOfIds: function (items) {
    return Object.keys(items);
  },
  createListElements: function (items) {
    var item;
    return (
      this.getListOfIds(items).map(function createListElements(itemId) {
        item = items[itemId];
        return (<ListPanel item={item} />); //key={item.id}
      }.bind(this)).reverse()
    );
  },
  render: function () {
    var items = this.props.items;
    var listItemElements = this.createListElements(items);

    return (
      <p className={listItemElements.length > 0 ? "":"bg-info"}>{listItemElements.length > 0 ? listItemElements : "You have not raised any ticket yet. Fill this form to submit the ticket"}</p>
    );
  }
});

var ListPanel = React.createClass({
  render: function () {
    var item = this.props.item;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {item.issueType}<br/>
          {item.email}<br/>
          {item.comment}
        </div>
        <div className="panel-footer">
          {item.date.toString()}
        </div>
      </div>
    );
  }
});

var Textarea = React.createClass({
  getInitialState: function() {
    return {value: '', char_Left: max_Char};
  },
  handleChange: function(event) {
    var input = event.target.value;
    this.setState({value: input.substr(0, max_Char), char_Left: max_Char - input.length});
  },
  render: function() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="comments">Comments <span style={style}>*</span></label>(<span>{this.state.char_Left}</span> characters left)
          <textarea className="form-control" value={this.state.value} maxlength={max_Char} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
});

ReactDOM.render(<AddTicketsForm />, document.getElementById('form'));
ReactDOM.render(<Textarea />, document.getElementById('controlled-form'));
