import './App.css'
import MenuCard from './Components/MenuCard'
import Level from './Components/FirstView/Level'
import Score from './Components/FirstView/Score'
import digitaltemplate from './assets/digitaltemplate.mp4';


const ProjectGame = () => {
  return (<>
    <div>
      <video src={digitaltemplate} autoPlay loop muted/>
      <MenuCard title='Game Description'>
        <div className='divAll'>
          <Level/>
          <Score/>
        </div>
          <button>PLAY</button>
      </MenuCard>
    </div>
  </>)
}

export default ProjectGame;
