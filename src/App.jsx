import './App.css'
import { Component } from 'react'

import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'

class App extends Component {
  state = {
    isModal: false,
    images: [{
      id: 1,
      webformatURL: "https://i.pinimg.com/474x/18/60/67/186067c3c81040a68a049b9344b9f995.jpg",
      tags: "picture"
    }, {
      id: 2,
      webformatURL: "https://media.gettyimages.com/id/963682418/photo/kiev-ukraine-cristiano-ronaldo-of-real-madrid-celebrates-with-the-uefa-champions-league-trophy.jpg?s=612x612&w=gi&k=20&c=AhRjslBcalAy91TxbNQoIO8H_anJnRH5GfbYjEhzstM="
    }]
  }



  handleSearchSubmit = (searchValue) => {
    console.log("отримали в app", searchValue);
    
  }


  render(){
    return(
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        <ImageGallery  images={this.state.images}/>
      </div>
    )
  }
}


export default App
