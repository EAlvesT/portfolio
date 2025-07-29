"use client"

import { Input } from '@/components/input';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailJs from '@emailjs/browser';
import { InputMask } from '@react-input/mask';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const maxCaracter = 50 as number;
const maxCaracterMensagem = 300 as number;

const contatoSchema = z.object({
  nome: z.string().nonempty('O nome é obrigatório.').max(maxCaracter, `O nome deve ter no máximo ${maxCaracter} caracteres.`),
  email: z.string().min(1, 'O email é obrigatório.').email({ pattern: z.regexes.unicodeEmail, message: 'O email é inválido.' }),
  mensagem: z.string().min(1, 'A mensagem é obrigatória.').max(maxCaracterMensagem, `A mensagem deve ter no máximo ${maxCaracterMensagem} caracteres.`),
  numeroContato: z.string()
    .nonempty('O número de contato é obrigatório.')
    .transform((value) => value.replace(/\D/g, ''))
    .refine((value) => value.length === 10 || value.length === 11, {
      message: 'O número deve conter 10 ou 11 dígitos.'
    })
})

type Contatoform = z.infer<typeof contatoSchema>;

export function ContatoForm() {
  const formRef = useRef(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Contatoform>({
    resolver: zodResolver(contatoSchema),
    mode: "onChange"
  });

  async function handleSend() {
    if (!formRef.current) return;

    emailJs.sendForm(
      `${process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
      formRef.current,
      `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`
    )
      .then(() => {
        toast.success("Obrigado pelo contato, retornarei o mais breve possível!")
        reset();
      })
      .catch(() => {
        toast.error("Opss... Algo deu errado, tente novamente mais tarde.")
      })
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleSend)}
      ref={formRef}
    >
      <div>
        <Input
          type='text'
          placeholder='Digite seu nome'
          {...register('nome')}
        />
        {errors.nome && (
          <p className={styles.errorsZod}>
            {errors.nome.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type='email'
          placeholder='Digite seu email'
          {...register('email')}
        />
        {errors.email && (
          <p className={styles.errorsZod}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <InputMask
          mask="(__) _____-____"
          replacement={{ _: /\d/ }}
          className='input'
          placeholder='Digite seu número de contato'
          {...register('numeroContato')}
        />
        {errors.numeroContato && (
          <p className={styles.errorsZod}>
            {errors.numeroContato.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          placeholder='Digite sua mensagem...'
          className={styles.textArea}
          {...register('mensagem')}
        />
        {errors.mensagem && (
          <p className={styles.errorsZod}>
            {errors.mensagem.message}
          </p>
        )}
      </div>
      <button type='submit' className={styles.botaoEnviar}>Enviar</button>
    </form>
  )
}