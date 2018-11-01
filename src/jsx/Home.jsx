import React, {Component} from 'react';
import ScsHeader from "./StudioCornerStone/ScsHeader";
import ScsFooter from './StudioCornerStone/ScsFooter';

class Home extends Component {
  state = {
    data: []
  };
  render() {
		return (
		 <div>
			 <ScsHeader/>
       <ScsFooter/>
		 </div>
	 );
	}
}
export default Home;