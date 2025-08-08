import * as React from "react"
import { Link } from 'react-router-dom';
import { ListViewComponent, Inject, Virtualization } from '@syncfusion/ej2-react-lists';

export class Lists extends React.Component {
  public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];

  render(){
    return (
      <div>
        <h2>Essential JS2 ListView Component</h2>
        <Link to="/accordion">Show Accordion</Link>
        <hr/>
        <br />
        <ListViewComponent 
          id="sample-list-flat" 
          dataSource={this.data}
        >
          <Inject services={[]} />
        </ListViewComponent>
      </div>
    )
  }
}
