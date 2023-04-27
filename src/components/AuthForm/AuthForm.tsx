import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { IAuthFields } from '@/components/AuthForm/auth.interface'
import { validEmail } from '@/components/AuthForm/auth.validation'
import Button from '@/components/UI/Button/Button'
import Field from '@/components/UI/Field/Field'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useClickOutside } from '@/hooks/useClickOutside'

import stylesIconsRight from '../IconsRight/IconsRight.module.scss'

import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
  const { ref, isShow, setIsShow } = useClickOutside(false)

  const [type, setType] = useState<'login' | 'register'>('login')

  const { login, register: registerAction } = useActions()

  const { isLoading } = useAuth()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthFields>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthFields> = data => {
    if (type === 'login') {
      login(data)
    } else if (type === 'register') {
      registerAction(data)
    }
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={stylesIconsRight.button}
        onClick={() => setIsShow(!isShow)}
      >
        <FaUserCircle fill='#A4A4A4' />
      </button>
      {isShow && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register('email', {
              required: 'Email обязателен!',
              pattern: {
                value: validEmail,
                message: 'Невалидный Email'
              }
            })}
            placeholder='Email'
            error={errors.email}
          />
          <Field
            {...register('password', {
              required: 'Пароль обязателен!',
              minLength: {
                value: 6,
                message: 'Мин. длина пароля - 6 символов'
              }
            })}
            placeholder='Пароль'
            error={errors.password}
            type='password'
          />
          <div className='mt-5 mb-1 text-center'>
            <Button onClick={() => setType('login')} disabled={isLoading}>
              Войти
            </Button>
          </div>
          <button
            className={styles.register}
            onClick={() => setType('register')}
            disabled={isLoading}
          >
            Регистрация
          </button>
        </form>
      )}
    </div>
  )
}

export default AuthForm
