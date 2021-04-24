import styles from "./styles.module.scss"

export function Player() {

  return (
    <div className={styles.playerContainer}>

      <header>
        <img src="/img/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer} >
        <strong>Selecione um Podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider} >
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>
        
        <div className={styles.buttons}>
          <button type="button">
            <img src="/img/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/img/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/img/play.svg" alt="Tocar Podcast" />
          </button>
          <button type="button">
            <img src="/img/play-next.svg" alt="Tocar próximo" />
          </button>
          <button type="button">
            <img src="/img/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>

    </div>
  );
}