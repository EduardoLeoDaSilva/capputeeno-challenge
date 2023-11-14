import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Logo } from '@/styles/layout'
import { ArrowDown, ArrowLeft, ArrowRight } from 'phosphor-react'
import { Categories, HomeContainer, Filters, ProductsContainer, Productcard, HomeContainerHeader, CategoryItem } from '@/styles/home'
import img from '../../assets/Camiseta 01.jpg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeContainer>
        <HomeContainerHeader>
          <Categories>
            <CategoryItem isActive={true}>Todos os produtos</CategoryItem>
            <CategoryItem>Camisetas</CategoryItem>
            <CategoryItem>Canecas</CategoryItem>
          </Categories>

          <Filters>
            <button>Organizar por <ArrowDown /> </button>
            <ul>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><ArrowLeft /> </li>
              <li><ArrowRight /> </li>
            </ul>
          </Filters>
        </HomeContainerHeader>

        <ProductsContainer>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
            <div>
              <h3>Camiseta not today.</h3>
              <div></div>
              <span>R$ 78,00</span>
            </div>
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
            <div>
              <h3>Camiseta not today.</h3>
              <div></div>
              <span>R$ 78,00</span>
            </div>
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
          <Productcard>
            <Image src={img} width={256} height={300} alt='' />
          </Productcard>
        </ProductsContainer>

      </HomeContainer>
    </>
  )
}
