
//This worked on the codepen i navigated too from the react documentation article on components.
//However, it does not render when I open chrome(*with below code as part of html file*)
//And it does not render on jsbin
//Why?


function Greet(props) {
  
 return <h1>CheckPoint 3, {props.name}</h1>;
}

function Message(){
  return(
  <div>
      <Greet name ="is completed!" />
      <Greet name ="is finished!" />
      <Greet name ="is done!" />
  </div>
  );
}

ReactDOM.render(
<Message />,
  document.getElementById('root')
);
