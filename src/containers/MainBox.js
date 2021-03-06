import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsToDisplay: Profile
    }
  }

  handleChangeContent = (event) => {
    event.persist()

    console.log(event.target.id)

    if (event.target.id === 'pokemon') {
      this.setState({detailsToDisplay: Pokemon})
    } else if (event.target.id === 'photo') {
      this.setState({detailsToDisplay: Photos})
    } else if (event.target.id === 'cocktail') {
      this.setState({detailsToDisplay: Cocktails})
    } else {
      this.setState({detailsToDisplay: Profile})
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleChangeContent={this.handleChangeContent}/>
        {<this.state.detailsToDisplay />}
        {/*detailsToDisplay*/}
      </div>
    )
  }

}

export default MainBox
