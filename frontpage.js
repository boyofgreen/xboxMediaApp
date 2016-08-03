    
var HeroBox = React.createClass({
  render: function() {
    return (
      <div className="heroBox">
      <div className="controls">
            <h1>Galaxy Explorer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum ipsum sit amet porta faucibus. Quisque a diam id tellus placerat euismod. Cras ullamcorper a odio non rutrum. </p>
                <button>play</button>   
        </div>
      </div>
    );
  }
});

var SelectionSection = React.createClass({
  render: function() {
    return (
      <div className="selectionSection">
       <h2>This is the selection box!</h2>
      </div>
    );
  }
});
    
var PageWrapper = React.createClass({
  render: function() {
    return (
      <div className="pageWrapper">
        <div className="logoBox"></div>
        <div className="topSection">
        <HeroBox />
        </div>
        <div className="bottomSection">
            This is the bottom section !
        </div>
      </div>
    );
  }
});




ReactDOM.render(
  <PageWrapper />,
  document.getElementById('page')
);