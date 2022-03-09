import Confetti from 'react-confetti';
import styles from '../styles/Finish.module.scss';
import img from '../assets/park.jpg';

const FinishScreen = () => {
    function handleClick() {
        sessionStorage.clear();
        window.location.href = 'https://prosveta-coding.vercel.app/heroes';
    };

    return (
        <div className={styles.finishContainer}>
            <img className={styles.img} src={img} alt="amusement park" />
            <div className={styles.text}>Поздравления!<br />Твоят герой {sessionStorage.getItem('emoji')} на име {sessionStorage.getItem('name')} стигна до увеселителния парк!</div>
            <button className={styles.button} onClick={handleClick}>Започни нова игра!</button>
            <Confetti
                width={'inherit'}
                height={400}
                numberOfPieces={50}
                className={styles.confetti} />
        </div>
    )
}

export default FinishScreen;