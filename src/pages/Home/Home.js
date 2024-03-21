import Header from '../../components/header'
import Mid from '../../components/mid'
import Highmid from '../../components/highmid'
import Institucional from './institucional';

function Home() {
  return (
    <div>
      <div >
      <Header />
      </div>
      <div>
      <Mid/>
      </div>
      <div  >
      <Highmid/>
      </div>
      <div>
      <Institucional/>
      </div>
    </div>
    
  );
}

export default Home;