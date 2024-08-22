import React, {useState, useRef, useEffect} from "react";
import Card from "./Card.jsx";
import '../Styles/Card.css';
import SignUp from '../Components/SignUpButton';



export default function Cards() {

    const [readMore, setReadMore] = useState(false);

    function handleClick2() {
        setReadMore(!readMore);
    }

    const [isSigned, setIsSigned] = useState(false);

    const handleClick = () => {
        setIsSigned(!isSigned);
    };


    const readMoreBgRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (readMoreBgRef.current && !readMoreBgRef.current.contains(event.target)) {
            setReadMore(!readMore);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [readMore]);


    return (
        <div>
        <div className="container">
            
            <Card 
                pfp="src/assets/flipboard-icon.svg" 
                username="NBC News" 
                category="Top Stories" 
                img="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240414-sydney-stabbing-memorial-vl-150p-1b507c.jpg"
                date="Now"
                title='Officer, bystanders hailed for confronting and stopping a man who killed 6 at a Sydney shopping mall'
                source="NBC News - By Associated Press"
                likes="15"
                comments="6"
                adds="19"
            />

            <Card 
                pfp="https://um-cdn.flipboard.com/jAa4djZPI1J52oJonQMQCg/uploads/avatar/6f51cb48ab744f2f3630752e6acd1542a29a48fe.jpeg" 
                username="MSNBC" 
                category="NEWS" 
                img="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2024_04/1713098418770_n_theweekend_DBlock1_140424_1920x1080-upfxsd.jpg"
                date="5 hours ago"
                title='Why prosecution will `filet` Donald Trump in hush-money trial'
                source="MSNBC"
                likes="26"
                comments="8"
                adds="53"
            />

            <Card 
                pfp="https://cdn.flipboard.com/uploads/avatar/619a2646ff37388b3492205ac9a8d0f950f48259.jpg" 
                username="ABC News" 
                category="NEWS" 
                img="https://i.abcnewsfe.com/a/69234dad-b80d-4f64-87c7-5f903b9ace94/240414_tw_zakaria_1012_hpMain_16x9.jpg?w=992"
                date="2 hours ago"
                title='Video US adversaries "don`t just fear American power, they fear American values": Zakaria'
                source="ABC News"
                likes="100"
                comments="45"
                adds="64"
            />

            <Card 
                pfp="https://cdn.flipboard.com/uploads/avatar/ca8032afec8c9a195f95300a523b5d4b3c58f4e0.jpeg" 
                username="USA Today" 
                category="NEWS" 
                img="https://ic-cdn.flipboard.com/usatoday.com/fa51660eea7e118a29bae1b9cfa37699ad446590/_medium.webp"
                date="9 hours ago"
                title='Moms for Liberty co-founder tells American parents they have something in common with Trump'
                source="USA TODAY - Rachel Barber"
                likes="58"
                comments="31"
                adds="64"
            />

            <Card 
                pfp="https://cdn.flipboard.com/uploads/avatar/7e3f95156ec0e3f7aa37a201a199cc4b7b015ccb.jpeg" 
                username="The Daily Beast" 
                category="NEWS" 
                img="https://ic-cdn.flipboard.com/thedailybeast.com/33c9afbcdb50b7493b800b26db223d6563ebe12f/_medium.webp"
                date="19 hours ago"
                title='Survivors: Russians Tortured Us With Twisted Sexual Abuse Technique Named After Biden'
                source="The Daily Beast - Anna Conkling"
                likes="78"
                comments="14"
                adds="123"
            />

            <Card 
                pfp="https://pbs.twimg.com/profile_images/3168904353/b358e17be17cfdd3628ae5ef77d8ff2c_normal.jpeg" 
                username="Robert CG" 
                category="NEWS" 
                img="https://cdn.mos.cms.futurecdn.net/Aq8uBNWwVUEsnMEomPcoMM.png"
                date="6 hours ago"
                title='Microsoft lifts two-year-old block that prevented some users from upgrading to Windows 11'
                source="tomshardware.com"
                likes="2"
                comments=""
                adds="4"
            />

            <Card 
                pfp="https://cdn.flipboard.com/uploads/avatar/7e211185df7384dc5032a1b22b634616c56c1238.jpeg" 
                username="Flipboard Canada" 
                category="NEWS" 
                img="https://s.yimg.com/ny/api/res/1.2/Isp9wXD5RVk3bWkF1VjsVA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTk-/https://media.zenfs.com/en/aol_business_insider_articles_308/0b91fea657b6d3730812565d067c0dcc"
                date="5 hours ago"
                title='Silicon Valley elite like Mark Zuckerberg and Tim Cook are obsessed with these watches'
                source="AOL"
                likes="23"
                comments="4"
                adds="21"
            />

            <Card 
                pfp="https://cdn.flipboard.com/uploads/avatar/5daf0bbfafd8e99ddce2bf0d101ae41888486f19.jpeg" 
                username="Fox News" 
                category="NEWS" 
                img="https://ic-cdn.flipboard.com/foxnews.com/6421e3b5fa11c29ff73562d65618585106586806/_medium.webp"
                date="20 hours ago"
                title='`Roseanne` star John Goodman shows off fit physique in NYC after 200-pound weight loss'
                source="Fox News"
                likes="87"
                comments="12"
                adds="42"
            />

            <Card 
                pfp="https://cdn.flipboard.com/uploads/avatar/65985674a229da704a4d5788159b5e229a702dce.png" 
                username="FanSided" 
                category="NEWS" 
                img="https://images2.minutemediacdn.com/image/upload/c_crop,w_4190,h_2356,x_0,y_175/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/229/01hverm4rb1ff9aj9x43.jpg"
                date="1 hours ago"
                title='Brandon Aiyuk`s agent gives crucial update about WR`s rumored trade request'
                source="FanSided News"
                likes="12"
                comments="3"
                adds="41"
            />

           
        </div>

            <div className="read--div">
                <button className="read--button" onClick={handleClick2}>Read more</button>
            </div>

            {readMore && (
            <div className="read--more--bg">
                <div className="read--more--box" ref={readMoreBgRef}>
                    <h4 className="read--more--h4">WANT MORE STORIES?</h4>
                    <p className="read--more--p">Sign up for Flipboard to see more great stories</p>
                    <SignUp isSigned={isSigned} handleClick={handleClick} setIsSigned={setIsSigned} />
                    <button onClick={handleClick} className='read--more--button'>Continue</button>

                </div>
            </div>
        )}



        </div>
        
        

    )
}