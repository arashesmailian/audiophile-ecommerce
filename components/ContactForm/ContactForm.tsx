'use client'
import {FormEvent, useState} from 'react'
import {getCategories} from '@/lib/cms'

type Props = {}

const ContactForm = (props: Props) => {
  const [email, setEmail] = useState<string>('')
  const cat = getCategories()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    setEmail('')
    console.log('hi')
    console.log(cat)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ContactForm
