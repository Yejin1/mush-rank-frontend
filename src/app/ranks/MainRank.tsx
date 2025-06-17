// 메인랭킹
import styles from './Rank.module.css';

function MainRank() {
    return (
        <div className={styles['rank-container']}>
            <h3 className={styles['rank-title']}>이번달 랭킹</h3>
            <div className={styles['rank-box']}>
                <div className={styles['rank-header']}>
                    <span className={styles['rank-num']}>순위</span>
                    <span className={styles['profile']}></span>
                    <span className={styles['username']}>이름</span>
                    <span className={styles['dept']}>부서</span>
                    <span className={styles['score1']}>점수1</span>
                    <span className={styles['score2']}>점수2</span>
                </div>
                <ul className={styles['rank-list']}>
                    <li className={styles['rank-item']}>
                        <span className={styles['rank-num']}>1</span>
                        <img className={styles['profile']} src="/img_profile/10001.png" alt="프로필" />
                        <span className={styles['username']}>홍길동</span>
                        <span className={styles['dept']}>개발팀</span>
                        <span className={styles['score1']}>1234</span>
                        <span className={styles['score2']}>5678</span>
                    </li>
                    <li className={styles['rank-item']}>
                        <span className={styles['rank-num']}>2</span>
                        <img className={styles['profile']} src="/img_profile/10002.png" alt="프로필" />
                        <span className={styles['username']}>홍길동</span>
                        <span className={styles['dept']}>개발팀</span>
                        <span className={styles['score1']}>1234</span>
                        <span className={styles['score2']}>5678</span>
                    </li>
                    <li className={styles['rank-item']}>
                        <span className={styles['rank-num']}>3</span>
                        <img className={styles['profile']} src="/img_profile/10008.png" alt="프로필" />
                        <span className={styles['username']}>홍길동</span>
                        <span className={styles['dept']}>개발팀</span>
                        <span className={styles['score1']}>1234</span>
                        <span className={styles['score2']}>5678</span>
                    </li>
                    <li className={styles['rank-item-last']}>
                        <span className={styles['rank-num']}>4</span>
                        <img className={styles['profile']} src="/img_profile/10004.png" alt="프로필" />
                        <span className={styles['username']}>홍길동</span>
                        <span className={styles['dept']}>개발팀</span>
                        <span className={styles['score1']}>1234</span>
                        <span className={styles['score2']}>5678</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainRank;