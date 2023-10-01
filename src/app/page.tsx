import { SearchInput } from '@/components/SearchInput'
import styles from '../style/page.module.css'
import { Banner } from '@/components/Banner/page'
import { ProductItem } from '@/components/ProductItem/page'

export default function Home() {

  const mainColor =( '#000000')
  const handleSearch = (searchValue: string) =>{
    console.log(searchValue)
  }

  return (
    <div>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headerTop}>      
              <div className={styles.headerTopLeft}>
                <p className={styles.headerTitle}>Seja bem vindo(a)👋</p>
                <p className={styles.headerSubtitle}>O que deseja para hoje?</p>
              </div>
              <div className={styles.headerTopRight}>
                <div className={styles.buttonMenu}>
                  <div className={styles.buttonLine}></div>
                  <div className={styles.buttonLine}></div>
                  <div className={styles.buttonLine}></div>
                </div>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <SearchInput
                mainColor={mainColor}
                onSearch={handleSearch}
              
              />
            </div>
          </header>
          <Banner/>

          <div className={styles.grid}></div>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>

        </div>
  )
}
