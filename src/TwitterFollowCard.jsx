export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) {
    return (
        <article className='tw-followCard'>
            <header  className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="El avartar de migue " 
                src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>{formatUserName (userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>seguir</button>
            </aside>
        </article>
    )
}