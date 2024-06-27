import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  function emptyTemplate(){
    return(
      <span className='custom-font sf-rating-heart'></span> 
    );
  }
  return (
    <div className="App">
      <RatingComponent value={3} //min={2} //precision='Exact'
      showLabel={true} //labelPosition='Left'
      //enableSingleSelection={true} 
      allowReset={true}
      //itemsCount={10}
      labelTemplate='<span>${value} out of 5</span>'
      tooltipTemplate='<span>${value} star</span>'
      emptyTemplate={emptyTemplate}
      readOnly={true}
      disabled={true}
      ></RatingComponent>
    </div>
  );
}

export default App;
