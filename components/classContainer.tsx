import styles from "../styles/Home.module.css";
import {motion} from "framer-motion";
import {useState} from "react";

export default function ClassContainer(props:any) {
    const [isOpen, setIsOpen] = useState(false)
    const studentArray = `${props.student}`.split(" ")
    const half1 = studentArray.slice(undefined, Math.ceil(studentArray.length / 2))
    const half2 = studentArray.slice(Math.ceil(studentArray.length / 2))
    return isOpen ? (
        <motion.div className={styles.openedClassContainer}
                    onClick={() => setIsOpen(!isOpen)}
                    layout
                    layoutId={`${props.classNum}Container`}
                    transition={{duration: 0.2}}
                    style={{height: "300px"}}
                    key="closedClassContainer">
            <motion.h2 layout layoutId={`${props.classNum}P`} style={{marginTop: "15px"}}>{props.classNum}반</motion.h2>
            <motion.div className={styles.studentContainer}>
                <motion.ul layout
                           className={styles.studentList}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.5 }}>
                        {half1.map((name) =>
                            <li><h3>{name}</h3></li>
                        )}

                </motion.ul>
                <motion.ul layout
                           className={styles.studentList2}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.5 }}>
                    {half2.map((name) =>
                        <li><h3>{name}</h3></li>
                    )}
                </motion.ul>
            </motion.div>
        </motion.div>
    ) : (
        <motion.div className={styles.classContainer}
                    onClick={() => setIsOpen(!isOpen)}
                    layout
                    layoutId={`${props.classNum}Container`}
                    transition={{duration: 0.2}}
                    style={{height: "60px"}}
                    key="openedClassContainer">
            <motion.h2 layout layoutId={`${props.classNum}P`}>{props.classNum}반</motion.h2>
        </motion.div>

    )

}