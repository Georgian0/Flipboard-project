import React from "react";
import "../Styles/Newsletter.css"

export default function NewsletterHero() {
    return (
        <div className="NewsHero--main">   
            <h1>Newsletter Subscriptions</h1>
            <p>Sign up to receive free newsletters, curated by Flipboard</p>
            <div className="newsletter--forms">
                <form className="mail--form">
                    <input type="text" placeholder="Enter your email" name="email"/> <br />
                    <button>Subscribe</button>
                    <p className="terms">You can opt out at anytime. By signing up, you accept the <span><a href="#">Terms of Use</a></span> and <span><a href="#">Privacy Policy</a></span></p>
                </form>
                <form className="checkbox--form">
                    <label className="main--label">10 For Today
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Ten stories to inform and inspire your day, selected by Flipboard's editorial team,<br /> seven days a week.</p>

                    <label className="main--label">Tech Briefing
                        <input type="checkbox"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Top tech headlines, deep dives and trends in the news. Selected by<br /> Flipboard every weekday.</p>

                    <label className="main--label">Climate Briefing
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Environmental news and views, selected by Flipboard's editorial team.<br /> Delivered every Tuesday.</p>

                    <label className="main--label">Photo Desk
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Striking photos depicting current events, curated by Flipboard editors.<br /> Delivered every Friday.</p>

                    <label className="main--label">The Shot
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Exploring the craft of photography, curated by photographers and filmmakers.<br /> Delivered every Wednesday.</p>

                    <label className="main--label">Recipes of the Week
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Just recipes so you never have to wonder what to eat, curated by Flipboard's <br />Lifestyle Editor Aileen Lalor. Delivered every Monday.</p>

                    <label className="main--label">The Tastiest
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Inspiration for the home cook, curated for foodies, by foodies.<br /> Delivered every Thursday.</p>

                    <label className="main--label">Wanderlust
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>
                    </label>
                    <p>Your virtual passport to travel the world, curated by experts.<br /> Delivered every Tuesday.</p>

                    <label className="main--label">$avvy
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>                   
                    </label>
                    <p>Personal finance, investing and crypto news, curated by money mavens.<br /> Delivered every Monday.</p>

                    <label className="main--label">Creator Digest
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>                    
                    </label>
                    <p>For content creators of all types. Get curated stories about creator economy, plus updates on<br /> Flipboard’s creator programs. Delivered monthly.</p>

                    <label className="main--label">The Good Life
                        <input type="checkbox" id="10ForToday"/>
                        <span className="checkbox--container"></span>    
                    </label>
                    <p>Picks and products for a curated lifestyle. Delivered several times a year,<br /> particularly around the holidays. Curated by Lifestyle Editor Aileen Lalor.</p>
                </form>
            </div>
        </div>
    )
}