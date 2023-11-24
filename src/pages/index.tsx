
import { Inter } from 'next/font/google'
import { ArrowDown, ArrowLeft, ArrowRight } from 'phosphor-react'
import { Categories, HomeContainer, Filters, ProductsContainer, Productcard, HomeContainerHeader, CategoryItem } from '@/styles/home'
import { api } from '@/api/axios-client'
import { GetServerSideProps, GetStaticProps } from 'next'
import Image from 'next/image'
import { MouseEventHandler, useEffect, useState } from 'react'
import { type } from 'os'
import { ApiProduct } from '@/models/apiProduct'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  products: ApiProduct[];
}



interface ProductState {
  products: ApiProduct[],
}

export interface Filter {
  type?: 'shirt' | 'mug' | 'nofilter' | '';
  orderBy?: 'name' | 'price' | 'nofilter' | '';
  page?: number;
}

export default function Home({ products }: HomeProps) {

  const [productsState, setProductsState] = useState<ProductState>({
    products: products
  })
  const [filtersState, setFilterState] = useState<Filter>({
    orderBy: '',
    page: 1,
    type: ''
  });

  async function handleChangePageEvent(page: number) {

    setFilterState({
      page: page,
    })
  }

  useEffect(() => {
    if (filtersState.type == '' && filtersState.page == 1 && filtersState.orderBy == null) {
      return;
    }
    let action = `product?_page=${filtersState.page}&_limit=${12}`;
    if (filtersState.type == 'mug' || filtersState.type == 'shirt') {
      action += `&type=${filtersState.type}`;
    } 
    
    if (filtersState.orderBy != 'nofilter' && filtersState.type != '') {
      action+= `&_sort=${filtersState.orderBy}`
    }

    api.get<ApiProduct[]>(action).then((res) => {

      setProductsState({
        products: [...res.data]
      })
    })



  }, [filtersState])

  function handleSortEvent(type: any){
    setFilterState((state) => {
      return {
        type: state.type,
        page: state.page,
        orderBy: type
      }
    })
  }

  function handleChangeCategory(type: any) {
    setFilterState((state) => {
      return {
        type: type,
        page: state.page,
        orderBy: state.orderBy
      }
    })
  }

  return (
    <>
      <HomeContainer>
        <HomeContainerHeader>
          <Categories>
            <CategoryItem onClick={() => handleChangeCategory('nofilter')} isactive={filtersState.type == 'nofilter' ||filtersState.type== ''}>Todos os produtos</CategoryItem>
            <CategoryItem onClick={() => handleChangeCategory('shirt')} isactive={filtersState.type == 'shirt'}>Camisetas</CategoryItem>
            <CategoryItem onClick={() => handleChangeCategory('mug')} isactive={filtersState.type == 'mug'}>Canecas</CategoryItem>
          </Categories>

          <Filters>
            <div >
              <label htmlFor='filterSort'>Organizar por <ArrowDown /> </label>
              <input id='filterSort' type='checkbox' />

              <div id='sortMenu'>
                <ul>
                  <li onClick={() => handleSortEvent('price')}>Preço</li>
                  <li onClick={() =>handleSortEvent('name')}>Nome</li>
                </ul>
              </div>
            </div>
            <ul>
              <li onClick={async () => await handleChangePageEvent(1)}><span>1</span></li>
              <li onClick={async () => await handleChangePageEvent(2)}><span>2</span></li>
              <li onClick={async () => await handleChangePageEvent(3)}><span>3</span></li>
              <li onClick={async () => await handleChangePageEvent(4)}><span>4</span></li>
              <li onClick={async () => await handleChangePageEvent(5)}><span>5</span></li>
              <li onClick={async () => await handleChangePageEvent(filtersState.page! - 1)}><ArrowLeft /> </li>
              <li onClick={async () => await handleChangePageEvent(filtersState.page! + 1)}><ArrowRight /> </li>
            </ul>
          </Filters>
        </HomeContainerHeader>

        <ProductsContainer>

          {
            productsState.products.map((x) => {
              return (
                <Link key={x.id} href={`/product/${x.id}`}>
                <Productcard >
                  <Image src={x.image} width={256} height={300} alt='' />
                  <div>
                    <h3>{x.name}</h3>
                    <div></div>
                    <span>R$ {x.price}</span>
                  </div>
                </Productcard>
                </Link>
              );
            })
          }
        </ProductsContainer>

      </HomeContainer>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let { limit, page } = query;
  limit = limit ?? '12';
  page = page ?? '0';
  const result = await api.get<ApiProduct[]>(`product?_page=${page}&_limit=${limit}`, {
    headers: {
      "Content-Type": 'application/json'
    }
  });

  return {
    props: {
      products: result.data
    }
  }
}
