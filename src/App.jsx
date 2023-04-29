import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'zMiguezz',
        name: 'Migue González',
        initialIsFollowing: true
    },
    {
        userName: 'ClexyT',
        name: 'ClexyT',
        initialIsFollowing: false
    },
    {
        userName: 'JHUMBERTTO',
        name: 'Jorge García',
        initialIsFollowing: true
    },
    {
        userName: 'chunksito',
        name: 'Bruno Acosta',
        initialIsFollowing: false
    }
]

export function App () {
    return(
        <section className='App'>
            {
                users.map(({ userName, name, initialIsFollowing}) => (
                        <TwitterFollowCard 
                        key={name}
                        userName={userName}
                        initialIsFollowing={initialIsFollowing}
                        name={name}
                        >
                         {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}