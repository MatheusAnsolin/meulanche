import { useState } from 'react';
import styles from './styles.module.css'

export const SearchInput = () =>{

    const [focused, setFocused] = useState(false);
    
    return(
        <div className={styles.container}
            style={{ borderColor: focused ? '#FF000': 'FFFFFF'}}
            >
            <div className={styles.button}></div>
            <input 
            type="text"
            className={styles.input}
            placeholder='Digite o nome do produto'
            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
            
            />
                
        </div>
    )
}