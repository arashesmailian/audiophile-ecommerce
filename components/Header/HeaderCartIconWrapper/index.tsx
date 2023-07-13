import Image from 'next/image'
import {CartButton, CartNumber, CartWrapper} from './index.styled'

type Props = {
  data: {icon: any; alt: string}
}

const CartIcon = ({data: {icon, alt}}: Props) => {
  let totalProduct = 1

  return (
    <CartWrapper>
      <CartButton>
        <Image src={icon} alt={alt} />
        {totalProduct && (
          <CartNumber>
            <p>{totalProduct}</p>
          </CartNumber>
        )}
      </CartButton>
      {/* cart menu */}
    </CartWrapper>
  )
}

export default CartIcon
