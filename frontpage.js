 
 
 
 var data = [
   {section:"recently released", id:"A", movies:[
   {title:"a", id:1},
   {title:"b", id:2},
   {title:"c", id:3},
   {title:"d", id:4},
   {title:"e", id:5}
 ]},
 {section:"Adventures", id:"B",movies:[
    {title:"f", id:7},
   {title:"g", id:8},
   {title:"h", id:9},
   {title:"i", id:10},
   {title:"j", id:11}
   
 ]},
 {section:"People",id:"C", movies:[
      {title:"k", id:12},
   {title:"l", id:13},
      {title:"k", id:14},
   {title:"l", id:15},
      {title:"k", id:16}
 ]}
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


var MovieSection = React.createClass({
  render: function(){
   var movieSectionNodes = this.props.data.map(function(data) {
      return (
        
          <MovieBox id={data.id} key={data.id} title={data.title} />
        
      );
    });
    return(
      <div className="movieSection" id={this.props.id}>
       <h4>{this.props.section}</h4>
       <div className="list">
       {movieSectionNodes}
       </div>
      </div>
    )
  }
});


var MovieListing = React.createClass({
    render: function() {
      var num = 0;
      var movieSectionNodes = this.props.data.map(function(data) {
      return (
        
          <MovieSection title={data.title} key={data.id} section={data.section} data={data.movies} />
        
      );
    });

    return (
      <div className="movieListing">
       {movieSectionNodes}
       
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