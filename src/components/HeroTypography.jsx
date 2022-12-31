import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter"
const HeroTypography = () => {
    const [text, helper] = useTypewriter({
        words: [
            "Hi,i am Nikesh Kumar T K",
            "I am a Full stack web developer",
            "I can create websites for you"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className="absolute left-[25%] top-[40%] text-6xl font-semibold text-white">
            {text}
            <Cursor cursorColor='#f7AB0A' />
        </div>
    )
}

export default HeroTypography