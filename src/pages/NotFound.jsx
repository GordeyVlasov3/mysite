import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      {/* Ошибка 404 */}
      <section className="bg-gray-800 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <i className="fas fa-exclamation-triangle text-8xl text-amber-400 mb-6"></i>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Страница не найдена</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary text-lg inline-flex items-center justify-center">
              <i className="fas fa-home mr-2"></i>
              На главную
            </Link>
            <Link to="/catalog" className="btn-secondary text-lg inline-flex items-center justify-center">
              <i className="fas fa-th-large mr-2"></i>
              Каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Полезные ссылки */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Возможно, вас заинтересует</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-th-large"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Каталог изделий</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Посмотрите наш каталог памятников, крестов и оградок
              </p>
              <Link to="/catalog" className="text-amber-600 hover:text-amber-700 font-medium text-lg">
                Перейти в каталог →
              </Link>
            </div>
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-info-circle"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">О нашей компании</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Узнайте больше о нашей истории и опыте работы
              </p>
              <Link to="/about" className="text-amber-600 hover:text-amber-700 font-medium text-lg">
                Подробнее →
              </Link>
            </div>
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Контакты</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Свяжитесь с нами для консультации
              </p>
              <Link to="/contact" className="text-amber-600 hover:text-amber-700 font-medium text-lg">
                Написать нам →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Быстрые ссылки */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Популярные разделы</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center">
              <i className="fas fa-home text-2xl text-amber-600 mb-3"></i>
              <div className="font-medium">Главная</div>
            </Link>
            <Link to="/catalog" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center">
              <i className="fas fa-th-large text-2xl text-amber-600 mb-3"></i>
              <div className="font-medium">Каталог</div>
            </Link>
            <Link to="/about" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center">
              <i className="fas fa-info-circle text-2xl text-amber-600 mb-3"></i>
              <div className="font-medium">О нас</div>
            </Link>
            <Link to="/contact" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center">
              <i className="fas fa-phone text-2xl text-amber-600 mb-3"></i>
              <div className="font-medium">Контакты</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
