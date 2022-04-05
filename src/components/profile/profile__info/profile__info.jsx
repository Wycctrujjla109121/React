import './profile__info.css'

const ProfileInfo = (props) => {
    return (
        <div className='profile'>
            <img className='profile__bg__img' src='https://w-dog.ru/wallpapers/0/62/349856802100204/zolotoj-bereg-okean-avstraliya-oteli-more-gorod.jpg' />
            <div className='profile__info'>
                <img className='profile__img' src="https://sun9-2.userapi.com/impg/-j9worTvE5IfcH945LpaEKW82Y_j3ERaq4T4jQ/726Akmx5W4M.jpg?size=1620x2160&quality=96&sign=37dd87aa78ac07a7ef6dd911f36ebcbb&type=album" />
                <div className='profile__data'>
                    <h2 className='profile__name'>Dmitry K.</h2>
                    <p className='profile__text'>date of Birth: 2 january</p>
                    <p className='profile__text'>City: Minsk</p>
                    <p className='profile__text'>Education: BSU'11</p>
                    <p className='profile__text'>
                        Web Site:
                        <a className='profile__link' href="https://vk.com/smokeweedrvl">https://vk.com/smokeweedrvl</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo