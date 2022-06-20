import React from 'react'

// local imports
import styles from './codeAnimation.module.css'

export const CodeAnimation: React.FC = () => {
  return (
    // class="cli-container typing-animation-container"
    <div className={`${styles['cli-container']} ${styles['typing-animation-container']}`}>
      <pre>
        Last login: Mon May 16 08:41:10
        <br />
        <br />
        <span>Kuroi_Cc@personal-site:/$</span>
        <div className={styles['typing-animation']}>sudo show-my-personal-site</div>
      </pre>
    </div>
  )
}
