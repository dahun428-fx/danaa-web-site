import styles from "./MediaSection.module.css";

export function MediaSection() {
  return (
    <section className={styles.section} id="media">
      <div className="container">
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <p>MEDIA</p>
            <h2>SBS 모닝와이드 7538회</h2>
            <span>
              생체나이 분석을 통해 건강한 체중관리와 삶의 변화를 이끈 실제 사례를
              영상으로 만나보세요.
            </span>
          </header>
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/iK3DdfEbiaE"
              title="SBS 모닝와이드 다나아데이터 소개"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
