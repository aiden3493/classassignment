import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion} from "framer-motion";
import {AnimateSharedLayout} from "framer-motion";
import ClassContainer from "../components/classContainer"

const Home: NextPage = () => {
  return (
      <motion.div className={styles.container} key="content">
          <Head>
            <title>상암중 반배정 현황</title>
            <meta name="description" content="상암중학교 반배정 현황" />
            <link rel="icon" href="../public/SchoolFavicon.ico" />
          </Head>
            <motion.main>
                <motion.div className={styles.titleContainer}>
                    <h1 className={styles.title}>상암중 반배정 현황</h1>
                    <h3 className={styles.subTitle}>추가 문의는 <a style={{color: "blue"}} href="https://forms.gle/HB7mYCVEGnXmqPaq8">여기로</a></h3>
                    <h3 className={styles.subTitle}>현재까지 등록된 학생 : 99명</h3>
                </motion.div>
                    <AnimateSharedLayout>
                        <motion.div className={styles.classContent} layout>
                            <ClassContainer classNum="1" student="홍현희 이지효 한가인 이린 장사무엘 이민서"/>
                            <ClassContainer classNum="2" student="하예솔 고석영 김시현 문소아 조예준 장선아 이창우 염정윤 이보람"/>
                            <ClassContainer classNum="3" student="이시은 강진아 안다경 이서정 나정균 정현지 정광현 김정후"/>
                            <ClassContainer classNum="4" student="황승주 이다은 원인안 이서후 이예은 최서현 최성우 김승하 조서영"/>
                            <ClassContainer classNum="5" student="장수빈 채혜림 김나영 이채경 이은우 김정윤 강민권 최진규 김태현"/>
                            <ClassContainer classNum="6" student="김가을 마혜민 윤준서 신우찬 소서이 김남현 이동영 전하윤 임태영 김가온 황가은 이지후"/>
                            <ClassContainer classNum="7" student="이민희 김동후 최은진"/>
                            <ClassContainer classNum="8" student="이정헌 김주하 강세림 박형준"/>
                            <ClassContainer classNum="9" student="김하은 오수혁 한승원 김나림 이해민 전소연 정민서"/>
                            <ClassContainer classNum="10" student="김서희 정지윤 이서하 이예찬 김예은 최예람 강예준"/>
                            <ClassContainer classNum="11" student="박다율 문지영 최승아 김루아 김민정 정예원 정조국 서은후 정예원 이라희 김아진"/>
                            <ClassContainer classNum="12" student="김초아 한사라 가윤 김수민 이지원 강민재 박경은 김송연 정다연 정은유"/>
                            <ClassContainer classNum="13" student="윤사랑 김의현 백은빈 송수아 박영찬 홍다민 박채민"/>
                        </motion.div>
                    </AnimateSharedLayout>
            </motion.main>
        </motion.div>

  )
}

export default Home
