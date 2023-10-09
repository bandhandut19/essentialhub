import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="flex border-4  border-purple-400 rounded-xl justify-between p-2 items-center mb-10">

            <h1 className='text-3xl font-bold '>Essential Hub</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;