import { TextareaHTMLAttributes } from 'react'

import { IFieldProps } from '@/components/UI/Field/field.interface'

type TypeTextareaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
  IFieldProps

export interface ITextarea extends TypeTextareaPropsField {}
