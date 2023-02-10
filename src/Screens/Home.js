import React, { useEffect, useContext, useState } from 'react';
import HomeComponent from '../Components/HomeComponent';
import { AuthLoginContext } from '../Context/AuthLoginContext';
import Loader from '../Utils/Loader';
import {allplays } from '../Utils/requests';

const Home = () => {

  const { share, graphData, userDetail } = useContext(AuthLoginContext);
  const [wins, setWins] = useState('');
  const [pendings, setPendings] = useState('');
  const [loss, setLoss] = useState('');
  const [series, setSeries] = useState([]);
  const [color, setColor] = useState([]);


  useEffect(() => {
    piaculate();
  }, [])

  const piaculate = async () => {
    const plays = await allplays();

    const wins = parseInt(plays.wins);
    const loss = parseInt(plays.loss);
    const pendings = parseInt(plays.pendings);

    const total = wins + loss + pendings;

    const perWins = (wins / total) * 100;
    const perLoss = (loss / total) * 100;
    const perPend = (pendings / total) * 100;
  

    setSeries([perWins, perLoss, perPend]);
    setColor(['green', 'orange', 'white']);

    if (isNaN(perWins) || isNaN(perLoss)) {
      setWins(0);
      setLoss(0)
    } else {
      setWins(perWins);
      setPendings(perPend);
      setLoss(perLoss);
    }
  }

  return (


    <>
      {userDetail && share && graphData ?

        <HomeComponent
          share={share}
          graphData={graphData}
          userDetail={userDetail}
          series={series}
          color={color}
        />

        :
        <Loader />
      }
    </>
  )
}

export default Home;