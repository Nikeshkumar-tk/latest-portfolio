import HeroTypography from "./HeroTypography"

const Hero = () => {
    return (
        <div className="h-screen relative">
            

            <HeroTypography />
        
            <div className="h-screen">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/hero-2.jpg?alt=media&token=0226ca2c-9671-45c2-910c-ecf5a2ff0833"
                    alt=""
                    className="object-cover h-full w-full" />

            </div>
        </div>
    )
}

export default Hero