import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserChoice, prepareNextRound, reset } from '../../features/game/gameSlice';
import { setCurrentUserScore } from '../../features/user/userSlice';
import './Shifoumi.css';

function Shifoumi() {

  const { currentUser } = useSelector((state) => state.user);
  const { score, userChoice, computerChoice, isRoundActive, message, round } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const choices = [{
    name: 'rock',
    icon: '✊'
  }, {
    name: 'paper',
    icon: '✋'
  }, {
    name: 'scissors',
    icon: '✌'

  }]

  const handlePlayerChoice = (choice) => {
    dispatch(setUserChoice(choice));
  }

  const handleNextRound = () => {
    if (round >= 10) {
      return;
    }
    dispatch(prepareNextRound());
  }

  const handleStartNewGame = () => {
    dispatch(reset());
  }

  useEffect(() => {
    console.log('useeffect affect score');
    if (round === 10 && !isRoundActive) {
      dispatch(setCurrentUserScore(score));
    }
  }, [round, isRoundActive, score])

  return (
    <div className="shifoumi">
      <h2>Shifoumi</h2>

      <p>
        Joueur actuel : {currentUser !== null ? currentUser.name : 'Aucun'}
        <br />
        Round : {round}/10
        <br />
        Score : {score}
      </p>

      <div className="game-container">
        <div className="left">
          <h3>Choix du joueur</h3>
          {choices.map((choice, index) => (
            <button
              className={`player-choice-btn ${userChoice === choice.name ? 'selected' : ''}`}
              disabled={!isRoundActive} key={index} type="button" onClick={() => handlePlayerChoice(choice.name)}>{choice.icon}</button>
          ))}
        </div>
        <div className="right">
          <h3>Choix de l'ordinateur</h3>
          {computerChoice ?
            <div className="computer-choice">
              {computerChoice === 'rock' ? '✊' : computerChoice === 'paper' ? '✋' : '✌'}
            </div>
            :
            <p>En attente...</p>
          }
        </div>
        <div className="message">
          <h3>Résultat</h3>
          <p>{message}</p>
        </div>
        {round >= 10 && !isRoundActive &&
          <div className="final-score">
            <h3>Score final</h3>
            <p>{score}</p>
            <button type="button" onClick={handleStartNewGame}>
              Recommencer
            </button>
          </div>
        }
        {round < 10 && !isRoundActive &&
          <div>
            <button type="button" className="next-round" onClick={handleNextRound}>Round suivant</button>
          </div>
        }

      </div>

    </div>
  )
}

export default Shifoumi
