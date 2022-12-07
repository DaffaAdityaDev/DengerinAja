import React from 'react'
import styles from './RadioContainer.module.scss'

function RadioContainer(props: any) {
  return (
    <div className={styles.radio__container}>
        {props.children}
    </div>
  )
}

export default RadioContainer