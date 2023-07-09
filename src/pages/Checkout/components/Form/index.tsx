import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FormProps, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  BackgroundContainer,
  ButtonContainer,
  InfoContainer,
  InputCity,
  InputLarge,
  InputMedium,
  InputRadio,
  InputSmall,
  InputUF,
  Subtitle,
} from './styled'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

const schema = zod.object({
  cep: zod
    .string()
    .min(9, 'O cep deve conter 11 caracteres')
    .max(9, 'O cep deve conter 11 caracteres'),
  rua: zod.string(),
  numero: zod.number(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod
    .string()
    .min(2, 'o estado deve conter apenas dois caracteres')
    .max(2, 'o estado deve conter apenas dois caracteres'),
  pagamento: zod.string(),
})

type Schema = zod.infer<typeof schema>

export function Form() {
  const { submitForm } = useContext(CoffeeContext)

  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  return (
    <section>
      <Subtitle>Complete seu pedido</Subtitle>

      <form action="#" id="checkout" onSubmit={handleSubmit(submitForm)}>
        <BackgroundContainer>
          <InfoContainer>
            <MapPinLine color="#C47F17" size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </InfoContainer>
          <InputSmall
            type="text"
            id="cep"
            placeholder="CEP"
            required
            {...register('cep')}
          />
          <InputLarge
            type="text"
            id="rua"
            placeholder="Rua"
            required
            {...register('rua')}
          />
          <InputSmall
            type="number"
            id="numero"
            placeholder="Número"
            required
            {...register('numero', { valueAsNumber: true })}
          />
          <InputMedium
            type="text"
            id="complemento"
            placeholder="Complemento"
            required
            {...register('complemento')}
          />
          <InputSmall
            type="text"
            id="bairro"
            placeholder="Bairro"
            required
            {...register('bairro')}
          />
          <InputCity
            type="text"
            id="cidade"
            placeholder="Cidade"
            required
            {...register('cidade')}
          />
          <InputUF type="text" id="uf" placeholder="UF" {...register('uf')} />
        </BackgroundContainer>

        <BackgroundContainer>
          <InfoContainer>
            <CurrencyDollar color="#4B2995" size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </InfoContainer>

          <ButtonContainer>
            <InputRadio
              type="radio"
              id="credito"
              {...register('pagamento')}
              value="Cartão de crédito"
            />
            <label htmlFor="credito">
              <CreditCard size={16} color="#8047F8" />
              Cartão de crédito
            </label>
            <InputRadio
              type="radio"
              id="debito"
              {...register('pagamento')}
              value="Cartão de débito"
            />
            <label htmlFor="debito">
              <Bank size={16} color="#8047F8" />
              Cartão de débito
            </label>
            <InputRadio
              type="radio"
              id="dinheiro"
              {...register('pagamento')}
              value="Dinheiro"
            />
            <label htmlFor="dinheiro">
              <Money size={16} color="#8047F8" />
              Dinheiro
            </label>
          </ButtonContainer>
        </BackgroundContainer>
      </form>
    </section>
  )
}
