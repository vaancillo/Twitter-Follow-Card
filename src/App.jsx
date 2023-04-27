import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const format = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard
             formatUserName={format} 
            isFollowing 
            userName="zMiguezz" 
            name="Migue González"
            />

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing={false} 
            userName="ClexyT" 
            name="ClexyT"
            />
            
            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="JHUMBERTTO" 
            name="Jorge García"
            />

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="chunksito" 
            name="Bruno Acosta"
            />
        </section>
    )
}