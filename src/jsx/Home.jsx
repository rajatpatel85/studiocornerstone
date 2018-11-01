import React, {Component} from 'react';
import "../css/Scs.css";
import ScsHeader from "./StudioCornerStone/ScsHeader";
import ScsFooter from './StudioCornerStone/ScsFooter';

class Home extends Component {
  state = {
    data: []
  };
  render() {
		return (
		 <div className="App">
			 <ScsHeader/>
       <ScsFooter/>
		 </div>
	 );
	}
}
export default Home;