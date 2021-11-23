import './App.css';
import './star-rating.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MenuList from './Components/MenuList';
import Container from './Components/Container';
import tester from './Helpers/helpers';


// <button onClick={tester} > Test </button> 

function App(props) {
  const [applicationData, setApplicationData] = useState({
    workorder: [],
    inventory: [],
    today: []
  })

  useEffect(() => {
    Promise.all(
      [
        axios.get('/workorder'),
        axios.get('/inventory'),
        axios.get('/today')
      ]
    )
      .then((all) => {
        const workorder = all[0].data
        const inventory = all[1].data
        const today = all[2].data
        setApplicationData(prev => ({
          ...prev, workorder: [...workorder], inventory: [...inventory], today: [...today]
        }))
      })
  }, [])


  return (
    <div className="App">
      <div class="columns">
        <div class="column is-one-quarter">
          <MenuList />

        </div>
        <div class="column ">
          <Container 
						workorder={applicationData.workorder} 
						inventory={applicationData.inventory} 
						today={applicationData.today}
						setApplicationData={setApplicationData}
					/>
        </div>
      </div>
    </div>
  )
}

export default App;
