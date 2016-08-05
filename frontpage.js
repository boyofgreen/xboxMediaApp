 
 
 
 var data = [
   {section:"recently released", id:"A", movies:[
   {title:"a", id:1},
   {title:"b", id:2},
   {title:"c", id:3},
   {title:"d", id:4},
   {title:"e", id:5},
   {title:"a", id:6},
   {title:"b", id:7},
   {title:"c", id:8},
   {title:"d", id:9},
   {title:"e", id:10}
 ]},
 {section:"Adventures", id:"B",movies:[
    {title:"f", id:11},
   {title:"g", id:12},
   {title:"h", id:13},
   {title:"i", id:14},
   {title:"j", id:15},
      {title:"a", id:16},
   {title:"b", id:17},
   {title:"c", id:18},
   {title:"d", id:19},
   {title:"e", id:20}
   
 ]},
 {section:"People",id:"C", movies:[
   {title:"k", id:21},
   {title:"l", id:22},
   {title:"k", id:23},
   {title:"l", id:24},
   {title:"k", id:25},
   {title:"a", id:26},
   {title:"b", id:27},
   {title:"c", id:28},
   {title:"d", id:29},
   {title:"e", id:30}
 ]},
 {section:"People",id:"D", movies:[
   {title:"k", id:31},
   {title:"l", id:32},
   {title:"k", id:33},
   {title:"l", id:34},
   {title:"k", id:35},
   {title:"a", id:36},
   {title:"b", id:37},
   {title:"c", id:38},
   {title:"d", id:39},
   {title:"e", id:40}
 ]},
 {section:"People",id:"E", movies:[
   {title:"k", id:41},
   {title:"l", id:42},
   {title:"k", id:43},
   {title:"l", id:44},
   {title:"k", id:45},
   {title:"a", id:46},
   {title:"b", id:47},
   {title:"c", id:48},
   {title:"d", id:49},
   {title:"e", id:50}
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
      <div className="movieBoxContainer">
        <div className="movieBox" id={this.props.id} title={this.props.title}></div>
        {this.props.title}
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