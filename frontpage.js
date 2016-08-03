 
 
 
 var data = [
   {title:"a", id:1},
   {title:"b", id:2},
   {title:"c", id:3},
   {title:"d", id:4},
   {title:"e", id:5},
   {title:"f", id:7},
   {title:"g", id:8},
   {title:"h", id:9},
   {title:"i", id:10},
   {title:"j", id:11},
   {title:"k", id:12},
   {title:"l", id:13},
   ]
 
    
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

var MovieBox = React.createClass({
  render: function(){
    return(
      <div className="movieBox" id={this.props.id} title={this.props.title}>
       
      </div>
    )
  }
});


var MovieListing = React.createClass({
    render: function() {
      var movieNodes = this.props.data.map(function(data) {
      return (
        
          <MovieBox title={data.title} key={data.id} id={data.id} />
        
      );
    });

    return (
      <div className="movieListing">
       {movieNodes}
       
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
            <MovieListing data={this.props.data} />
        </div>
      </div>
    );
  }
});




ReactDOM.render(
  <PageWrapper data={data} />,
  document.getElementById('page')
);