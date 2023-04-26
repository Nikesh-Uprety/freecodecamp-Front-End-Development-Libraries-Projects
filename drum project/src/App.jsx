import './App.css'

function App() {

  return (
    <>

      <div className="containerr" id="drum-machine">

      <div id="display">

          <div className="row">
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id="Q">
            <audio src="./audio"></audio>
            </div>
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id="W">W
            <audio src=""></audio>
            </div>
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id="E">
              <audio src=""></audio>
              E</div>
          </div>
          <div className="row">
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id='A'>
              <audio src=""></audio>
              A</div>
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id='S'>
              <audio src=""></audio>
              S</div>
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id='D'>
              <audio src=""></audio>
              D</div>
          </div>
          <div className="row">
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id='Z'>
              <audio src=""></audio>
              Z</div>
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id='X'>
              <audio src=""></audio>
              X</div>
            <div className="col-1 bg-primary m-3 p-3 drum-pad" id='C'>
              <audio src=""></audio>
              C</div>
          </div>

      </div>

    <button className="btn bg-primary">On</button>
    <button className="btn bg-primary">OFF</button>
   

    </div>
      
    </>
  )
}

export default App
