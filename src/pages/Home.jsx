import Header from "../component/Header"
import Toggle from "../component/toggle"
import Story from "../component/story"
import News from "../component/News"

export default function Home(){
    return(
        <>
            <Header />
            <Story />
            <News />
            {/* <Toggle /> */}
        </>
    )
}