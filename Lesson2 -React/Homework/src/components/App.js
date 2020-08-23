
function Header() {
    return (
      <header>
          <div className="wrapper">
            <div className="header">
              <a href="#"><div className="header-logo" /></a>
              <a href="tel:888" className="header-phone" />
              <div className="header-phonelink"><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>
            </div>
          </div>
      </header>
    );
}

function Main() {
    return (
      <main>
        <div className="wrapper">
          <div className="main">
            <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
            <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
              вебмастеру сгенерировать несколько абзацев более.
            </div>
           <button className="btn main-btn"><span>Подробнее</span></button>
          </div>
        </div>
      </main>
    );
}

function SliderItem(props) {
  return (
      <div className="features-slider_item">
        <div className="features-img" style={{ backgroundImage: `url(./images/${props.imgTitle}.svg)` }} />
  <div className="features-feature">{props.title}</div>
      </div>
  );
}



function Features() {
    return (
    <section className="features">
      <div className="wrapper">
        <div className="features-wrapper">
          <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
          <div className="features-subhead">О нас</div>
          <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
           сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
           оратору отточить.
        </div>

        <div className="features-slider">
          <div className="features-slider_items">

                <SliderItem 
                     title={'Первое целевое преимущество'}
                     imgTitle={'1'}
                />

                <SliderItem
                  title={'Второе целевое преимущество'}
                  imgTitle={'2'}
                />
                
                <SliderItem
                  title={'Третье целевое преимущество'}
                  imgTitle={'3'}
                />

                <SliderItem
                  title={'Четвертое целевое преимущество'}
                  imgTitle={'4'}
                />

          </div>


          <button className="features-slider-arrow features-slider-prev">
            <svg width={9} height={16} xmlns="http://www.w3.org/2000/svg">
              <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
              </path>
            </svg>
          </button>
          <button className="features-slider-arrow features-slider-next">
            <svg width={9} height={16} xmlns="http://www.w3.org/2000/svg">
              <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
              </path>
            </svg>
          </button>
          </div>
        </div>
      </div>
    </section>

    );
}



function Contact() {
    return (
      <section className="contact">
        <div className="wrapper">
          <div className="contact-wrapper">
            <h2 className="contact-title">Остались вопросы?</h2>
            <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
            <form action="../mailer.smart.php" className="contact-form"><input type="text" placeholder="Ваше имя" />
               <input type="tel" placeholder="Телефон" /> <input type="email" placeholder="E-mail" />
                <button className="btn contact-btn"><span>Позвоните мне</span></button>
            </form>
            <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
            </div>
           </div>
        </div>
      </section>
     
    );
}

function Footer() {
    return (
      	<footer>
	      	<div class="footer">
		      	<div class="footer-logo"></div>
		      	<div class="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
			      <a href="tel:888"
					    class="footer-phone">
            </a>
			      <div class="footer-websurfer">
              <span class="footer-websurfer_build">Сделано</span> 
              <a href="#">Ваше имя</a>
            </div>
			      <div class="footer-phonelink">
                <a href="tel:888">+7(962)556-1234</a>
            </div>
	      	</div>
	      </footer>
     
    );
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Features/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

let root = document.querySelector('#root');


ReactDOM.render( <App/> , root);