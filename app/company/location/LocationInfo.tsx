import React from "react";
import styles from "./LocationInfo.module.css";

export default function LocationInfo() {
  const busStops = [
    {
      name: "노블발렌티웨딩홀",
      href: "https://map.kakao.com/?busStopId=11230581029&from=roughmap",
    },
    {
      name: "노블발렌티웨딩홀",
      href: "https://map.kakao.com/?busStopId=BS115977&from=roughmap",
    },
    {
      name: "서울의료원후문",
      href: "https://map.kakao.com/?busStopId=BS115976&from=roughmap",
    },
    {
      name: "봉은사역5번출구.광동한방병원",
      href: "https://map.kakao.com/?busStopId=11230581004&from=roughmap",
    },
    {
      name: "봉은사역.삼성래미안아파트",
      href: "https://map.kakao.com/?busStopId=BS117658&from=roughmap",
    },
  ];

  return (
    <div className={styles.cont}>
      <div className={`${styles.section} ${styles.section_address}`}>
        <div className={styles.address}>
          <strong className={styles.tit}>주소</strong>
          <span className={styles.txt}>
            서울 강남구 봉은사로114길 12 대웅제약 빌딩 6층
          </span>
        </div>
        <div className={styles.phone}>
          <strong className={styles.tit}>전화</strong>
          <span className={styles.txt}>02-567-7111</span>
        </div>
      </div>

      <div className={`${styles.section} ${styles.section_subway}`}>
        <strong className={styles.title}>주변 지하철</strong>
        <ul className={styles.wrap_list}>
          <li>
            <span
              className={`${styles.hide_text} ${styles.ico_subway} ${styles.ico_subway09}`}
            >
              수도권 9호선
            </span>
            <a
              href="https://map.kakao.com/?subwayId=SES0929&from=roughmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              봉은사역
            </a>
          </li>
          <li>
            <span
              className={`${styles.hide_text} ${styles.ico_subway} ${styles.ico_subway02}`}
            >
              수도권 2호선
            </span>
            <a
              href="https://map.kakao.com/?subwayId=SES0219&from=roughmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              삼성역
            </a>
          </li>
          <li>
            <span
              className={`${styles.hide_text} ${styles.ico_subway} ${styles.ico_subway02}`}
            >
              수도권 2호선
            </span>
            <a
              href="https://map.kakao.com/?subwayId=SES0218&from=roughmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              종합운동장역
            </a>
          </li>
          <li>
            <span
              className={`${styles.hide_text} ${styles.ico_subway} ${styles.ico_subway09}`}
            >
              수도권 9호선
            </span>
            <a
              href="https://map.kakao.com/?subwayId=SES0218&from=roughmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              종합운동장역
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.section} ${styles.section_busstop}`}>
        <strong className={styles.title}>주변 정류장</strong>
        <ul className={styles.wrap_list}>
          {busStops.map((s, i) => (
            <li key={`${s.name}-${i}`}>
              {/* 불필요한 동적 icon_busN 제거 */}
              <span className={styles.icon_bus} aria-hidden="true" />
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.section} ${styles.section_busline}`}>
        <strong className={styles.title}>주변 버스</strong>
        {/* screen_out → hide_text로 대체 (또는 CSS에 .screen_out 추가) */}
        <span className={styles.hide_text}>
          해당 장소 주변에 정차하는 버스리스트
        </span>

        {/* how_way 제거, how_bus만 사용 */}
        <ul className={`${styles.wrap_list} ${styles.how_bus}`}>
          <li className={styles.ico_bus2}>
            <span className={styles.icon_bus}>지선</span>
            <span className={styles.txt}>
              <span className={styles.txt_item}>
                <a
                  href="https://map.kakao.com/?busInfoId=1100071726&busStopId=11230581029&from=roughmap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3417
                </a>
              </span>
            </span>
          </li>

          <li className={styles.ico_bus7}>
            <span className={styles.icon_bus}>마을</span>
            <span className={styles.txt}>
              <span className={styles.txt_item}>
                <a
                  href="https://map.kakao.com/?busInfoId=B9885&busStopId=BS115977&from=roughmap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  강남01
                </a>
              </span>
              <span className={styles.txt_item}>
                <a
                  href="https://map.kakao.com/?busInfoId=B9981&busStopId=BS115976&from=roughmap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  강남07
                </a>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
