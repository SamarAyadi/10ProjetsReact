import React, {useState} from 'react'
import './Scroll.css'
import {Waypoint} from 'react-waypoint'
import {useSpring, animated} from 'react-spring'

export default function Scroll() {

    const [toggleTxt, setToggleTxt] = useState(false)

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)"
    })


    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>
            <Waypoint 
            bottomOffset="30%"
            onEnter={() => {
                if(!toggleTxt){
                    setToggleTxt(true)
                }
            }}
            />
            <animated.div style={animation} className="cta-section">
                <h2>N'en ratez pas une miette !</h2>
                <form>
                    <label htmlFor="email">Inscrivez-vous à la newsletter</label>
                    <input type="email" id="email" />
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>
        </div>
    )
}
