import React from 'react';

class MapExample extends React.Component {

      constructor(props){
            super(props);
            this.state = {
                contactData: [
                    {name: "young1", age: "24"},
                    {name: "young2", age: "25"},
                    {name: "young3", age: "26"},
                    {name: "young4", age: "27"}
                ]
            };
      }

      render(){
          return (
            <div>
                <h1>MapExample</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (
                            <li key={i}>{contact.name} {contact.age}</li>
                        );
                    })}
                </ul>
            </div>
          );
      }
}

export default MapExample;
