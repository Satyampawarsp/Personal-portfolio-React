import React from 'react'
import styles from './AlertBox.module.css'
import {motion} from 'framer-motion'

function AlertBox() {
  return (
    <motion.div 
   
     className={styles.alert_box}>Email sent!. You will get the response email soon.</motion.div>
  )
}

export default AlertBox