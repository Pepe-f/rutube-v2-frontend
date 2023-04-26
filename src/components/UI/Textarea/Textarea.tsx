import { forwardRef } from 'react'

import { ITextarea } from '@/components/UI/Textarea/textarea.interface'

import styles from './Textarea.module.scss'

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ error, style, ...rest }, ref) => {
    return (
      <div className={styles.editor} style={style}>
        <textarea ref={ref} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
