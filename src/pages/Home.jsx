import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Герой секция */}
      <section className="hero-bg text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Изготовление памятников<br />из гранита
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Качественные гранитные изделия по индивидуальным проектам с гарантией 25 лет
            </p>
            <Link to="/catalog" className="btn-primary text-lg inline-flex items-center">
              <i className="fas fa-th-large mr-2"></i>
              Посмотреть каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-slide-up">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-amber-50 hover:to-amber-100 transition duration-500 animate-slide-up">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">25 лет гарантии</h3>
              <p className="text-gray-600 text-lg">
                Наши памятники сохраняют первоначальный вид десятилетиями благодаря качественному материалу
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-amber-50 hover:to-amber-100 transition duration-500 animate-slide-up">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-edit"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Индивидуальный дизайн</h3>
              <p className="text-gray-600 text-lg">
                Создаем уникальные проекты по вашим эскизам с учетом всех пожеланий
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-amber-50 hover:to-amber-100 transition duration-500 animate-slide-up">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Доставка и установка</h3>
              <p className="text-gray-600 text-lg">
                Бесплатная доставка в пределах 100 км и профессиональная установка
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584270355035-4d5b859d7a6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Мастерская" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">О нашей компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                Компания "Гранит Мастер" работает с 2005 года. За это время мы изготовили более 5000 памятников по всей стране.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Мы используем только качественный гранит из лучших месторождений России и Карелии.
              </p>
              <Link to="/about" className="btn-secondary inline-flex items-center">
                Подробнее о нас <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Популярные изделия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Памятник" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Памятник "Классика"</h3>
                <p className="text-gray-600 mb-4">
                  Традиционный памятник из карельского гранита с полированной лицевой стороной
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-800">от 25 000 ₽</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition duration-300">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Крест" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Крест гранитный</h3>
                <p className="text-gray-600 mb-4">
                  Православный крест из темного гранита с возможностью гравировки
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-800">от 18 000 ₽</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition duration-300">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Оградка" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Оградка "Престиж"</h3>
                <p className="text-gray-600 mb-4">
                  Комплект ограждения из гранита с коваными элементами
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-800">от 35 000 ₽</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition duration-300">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/catalog" className="btn-primary text-lg inline-flex items-center">
              <i className="fas fa-th-large mr-2"></i>
              Смотреть все изделия
            </Link>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Контакты</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-amber-400"></i>
                  Адрес
                </h3>
                <p className="text-lg text-gray-300">
                  Апрелевская улица, 65, Апрелевка, Наро-Фоминский городской округ, Московская область, 143362
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-amber-400"></i>
                  Телефоны
                </h3>
                <p className="text-lg text-gray-300 mb-2">+7 (980) 536-84-49</p>
                <p className="text-lg text-gray-300">+7 (916) 990-44-91</p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <i className="fas fa-envelope mr-3 text-amber-400"></i>
                  Email
                </h3>
                <p className="text-lg text-gray-300">info@granit-master.ru</p>
              </div>
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.249393964839!2d37.065623!3d55.538275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aadf1e2e2e2e3%3A0x0!2zNTXCsDMyJzE4LjgiTiAzN8KwMDQnMDQuMSJF!5e0!3m2!1sru!2sru!4v1718031111111!5m2!1sru!2sru" 
                width="100%" 
                height="400" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                className="rounded-2xl shadow-2xl"
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary text-lg inline-flex items-center">
              <i className="fas fa-paper-plane mr-2"></i>
              Написать нам
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
