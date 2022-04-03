import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 36px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 30px;
  padding: 20px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const LogoImg = `/images/logo.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={LogoImg} width={40} height={30} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            StreamEZ
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo