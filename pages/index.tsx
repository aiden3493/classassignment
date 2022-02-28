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
        <link rel="icon" href="/SchoolFavicon.ico" />
      </Head>
        <motion.main>
            <motion.div className={styles.titleContainer}>
                <h1 className={styles.title}>상암중 반배정 현황</h1>
                <h3 style={{position:"absolute", marginTop: "70px"}}>추가 문의는 dokyungyu@gmail.com</h3>
            </motion.div>
            <motion.div className={styles.classContent}>
                <AnimateSharedLayout>
                    <ClassContainer classNum="1" student="홍현희 이지효 한가인 이린 장사무엘"/>
                    <ClassContainer classNum="2" student="하예솔 고석영 김시현 문소아 조예준 장선아 이창우 염정윤"/>
                    <ClassContainer classNum="3" student="이시은 강진아 안다경 이서정 나정균 정현지 정광현 김정후"/>
                    <ClassContainer classNum="4" student="황승주 이다은 원인안 이서후 이예은 최서현"/>
                    <ClassContainer classNum="5" student="장수빈 채혜림 김나영 이채경 이은우 김정윤 강민권 최진규"/>
                    <ClassContainer classNum="6" student="김가을 마혜민 윤준서 신우찬 소서이 김남현 이동영"/>
                    <ClassContainer classNum="7" student="이민희 김동후 최은진"/>
                    <ClassContainer classNum="8" student="전소연 이정헌 김주하 강세림 박형준"/>
                    <ClassContainer classNum="9" student="김하은 오수혁 한승원, 김나림"/>
                    <ClassContainer classNum="10" student="김서희 정지윤 이서하 이예찬 김예은"/>
                    <ClassContainer classNum="11" student="박다율 문지영 최승아 김루아 김민정 정예원 정조국 서은후 정예원"/>
                    <ClassContainer classNum="12" student="김초아 한사라 가윤 김수민 이지원 강민재 박경은 김수민 김송연 정다연"/>
                    <ClassContainer classNum="13" student="윤사랑 김의현 백은빈 송수아 박영찬"/>
                </AnimateSharedLayout>
            </motion.div>
        </motion.main>

    </motion.div>
  )
}

export default Home
