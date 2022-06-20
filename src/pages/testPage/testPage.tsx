import React from 'react'

// local imports
import styles from './testPage.module.css'
import { CodeAnimation } from '../../components'

export const TestPage: React.FC = () => {
  return (
    <div className={styles.testPageStage}>
      <CodeAnimation />
    </div>
  )
}
