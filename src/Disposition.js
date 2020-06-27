/* 
Author(s):            Tyler Paddock
Last Date Modified:   2020/06/27
History:
                      2020/06/27 - Tyler Paddock - Initial layout of the Dispositon class was completed as an example of an additional front end component and how to use it within a project.
                                                   Naturally this scales up as projects get larger and larger. Benefits of this kind of focused component scope are numerous and prevalent throughout the industry.
*/

import React, { Component } from 'react';

/* 
  The export on the Disposition class is simply a paired <h1> and <p> placed in a <div>
*/
export class Disposition extends Component {
  render() {
    return  (
      <div className="Disposition">
          <h1>Paddockian Weather App</h1>
          <p>
            The purpose of this app is to display my coding abilities formost. The fact that it can pull weather is a means-to-an-end.
            Normally a dispositonal piece about the software is not required, but I was just demonstrating some additional features available in React. Please view 'Disposition.js'
            Obviously a dispositional piece about the software is frivilous and never requested from product management and the internal development team.
          </p>
      </div>
    );
  }
}
