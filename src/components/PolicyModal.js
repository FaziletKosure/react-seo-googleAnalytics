import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import ghost from "../assets/ghost.svg";

export const PolicyModal = ({ question, answer, text }) => {
  useEffect(() => {}, [question, answer]);
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Muna | Belgium</title>
        <meta
          name="description"
          content="Know your rights! Consumers get personalised deals and control over their data. "
        />
      </Helmet>
      {/* The Modal  */}
      <div className="modal" id="policyModel">
        <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className=" modal-ghost">
              <img
                src={ghost}
                alt="ghost"
                loading="lazy"
                className="policy-icon"
              />
            </div>
            {/* Modal Header  */}
            <div className="modal-header">
              <div className="custom-header">
                <h3>{question}</h3>
                <h4>{answer}</h4>
              </div>

              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            {/* Modal body  */}
            <div className="modal-body">
              {text}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <p>Some text to enable scrolling.. Lorem ipsum dolor sit</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati
              quo error molestiae, tempora esse maiores? Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Vitae, possimus! Beatae
              praesentium fuga vel repellendus, ea consectetur, esse officiis
              qui reprehenderit possimus ducimus nemo est eius dolor! Iste unde
              eveniet velit possimus minus adipisci quibusdam ducimus impedit
              sint accusantium minima temporibus numquam et non voluptate ab,
              placeat hic nostrum saepe? Neque eos distinctio quod inventore
              maiores aperiam, quibusdam illo delectus animi. Eaque laborum,
              corporis exercitationem fugiat impedit dolore beatae nostrum in
              facere similique! Saepe ullam expedita nesciunt delectus impedit.
              Soluta facere harum cupiditate in architecto quidem cum ab
              doloribus odit quam quibusdam doloremque vel omnis earum sequi
              consectetur, ipsum consequatur esse? Incidunt, exercitationem
              perspiciatis. Non, maiores qui culpa ducimus nulla incidunt
              aliquam in inventore nesciunt quis maxime quae eos ut repudiandae
              velit. Sunt omnis molestias reprehenderit ea nulla recusandae
              incidunt architecto accusantium expedita blanditiis adipisci
              inventore sed repudiandae sint, accusamus ipsum laboriosam
              voluptatibus natus necessitatibus totam facilis minus dicta? Sit
              blanditiis iure mollitia fugit, velit ducimus deleniti dolorum
              aperiam! Ut asperiores dolore eligendi. Error laudantium explicabo
              ex similique nihil fugiat amet rem a ipsa saepe voluptatibus ab,
              aliquid quos. Voluptatibus doloribus magnam rerum dolorem ducimus
              quae minima ipsa suscipit sequi ipsam! Deserunt, hic? Suscipit
              nemo ducimus eos dolore quidem eius quos atque temporibus ipsam
              pariatur. Sequi aspernatur incidunt explicabo nulla officia
              aperiam quaerat quo, praesentium repellendus pariatur mollitia
              neque nemo totam nobis sint harum? Magni nulla, dolores possimus
              harum ab quos eius in distinctio neque molestias repudiandae
              dolore, quo cum earum sit reprehenderit, sapiente accusantium
              soluta voluptate libero molestiae quaerat. Magni, sit aliquid.
              Voluptatem enim minima mollitia recusandae ab officia perspiciatis
              eveniet accusantium odit sequi eum adipisci sit, suscipit,
              consectetur, modi eligendi. Voluptatum, tempore! Illo
              exercitationem tempore magni incidunt possimus, pariatur, quasi
              iste, reiciendis at quae ea vero. Enim adipisci dolor iure,
              provident corrupti suscipit molestias reprehenderit officiis
              placeat dolorum laudantium, voluptate atque facilis odit laborum
              repellat, perferendis delectus totam minima. Magni quam vero fuga
              quae exercitationem dolores delectus similique, in illum magnam
              esse recusandae rerum voluptatem dolorem, voluptates ullam, at
              cupiditate! Incidunt doloribus deserunt, cupiditate pariatur,
              dolor illo exercitationem molestiae accusamus, deleniti delectus
              nobis veniam? Et libero culpa provident, accusamus itaque
              assumenda voluptate laborum eos voluptates pariatur similique,
              autem quod earum blanditiis. Non eveniet adipisci id ad impedit
              autem esse alias quaerat tenetur vel architecto natus temporibus,
              consequatur ipsa voluptatum reiciendis sit illum, error, dolorem
              quae ducimus. Distinctio quod modi saepe, ducimus excepturi quidem
              necessitatibus dolores soluta eius exercitationem fugiat vitae
              nobis velit delectus! Fuga magnam id sint enim, dolor labore
              repellat laudantium culpa assumenda dolore expedita autem tempora
              sit debitis sunt. Maxime rem totam, rerum dolorem veniam placeat
              assumenda magnam vitae nulla architecto. Aliquam esse corporis
              reprehenderit fugit error quia molestiae vel quos quas natus
              accusamus nemo rem possimus, voluptas ipsam beatae dolorem cum
              earum laboriosam consequuntur! Placeat nulla culpa excepturi
              tenetur unde, vero eligendi maiores veritatis, sit eos modi eum a.
              Tempore explicabo recusandae fugit dolores, dolorem quo est dolore
              vitae autem minus dolor saepe exercitationem quaerat sequi
              inventore veniam porro nobis officiis quas obcaecati labore!
              Ducimus!ducimus excepturi quidem necessitatibus dolores soluta
              eius exercitationem fugiat vitae nobis velit delectus! Fuga magnam
              id sint enim, dolor labore repellat laudantium culpa assumenda
              dolore expedita autem tempora sit debitis sunt. Maxime rem totam,
              rerum dolorem veniam placeat assumenda magnam vitae nulla
              architecto. Aliquam esse corporis reprehenderit fugit error quia
              molestiae vel quos quas natus accusamus nemo rem possimus,
              voluptas ipsam beatae dolorem cum earum laboriosam consequuntur!
              Placeat nulla culpa excepturi tenetur unde, vero eligendi maiores
              veritatis, sit eos modi eum a. Tempore explicabo recusandae fugit
              dolores, dolorem quo est dolore vitae autem minus dolor saepe
              exercitationem quaerat sequi inventore veniam porro nobis officiis
              quas obcaecati labore! Ducimus!
            </div>

            {/* Modal footer  */}
          </div>
        </div>
      </div>
    </div>
  );
};
